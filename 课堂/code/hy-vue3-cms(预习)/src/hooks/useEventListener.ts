import type { Ref } from 'vue'

import { ref, watch, unref } from 'vue'

export type RemoveEventFn = () => void

export interface UseEventParams {
  el?: Element | Ref<Element | undefined> | Window | any
  name: string
  listener: EventListener
}

export function useEventListener({
  el = window,
  name,
  listener
}: UseEventParams): { removeEvent: RemoveEventFn } {
  let remove: RemoveEventFn = () => {}
  const isAddRef = ref(false)

  if (el) {
    const element: Ref<Element> = ref(el as Element)
    const realHandler = listener

    const removeEventListener = (e: Element) => {
      isAddRef.value = true
      e.removeEventListener(name, realHandler)
    }

    const addEventListener = (e: Element) => e.addEventListener(name, realHandler)

    const removeWatch = watch(
      element,
      (v, _ov, cleanUp) => {
        if (v) {
          !unref(isAddRef) && addEventListener(v)
          cleanUp(() => {
            removeEventListener(v)
          })
        }
      },
      { immediate: true }
    )

    remove = () => {
      removeEventListener(element.value)
      removeWatch()
    }
  }
  return { removeEvent: remove }
}
