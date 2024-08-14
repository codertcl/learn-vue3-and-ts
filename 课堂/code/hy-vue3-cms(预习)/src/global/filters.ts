import { App } from 'vue'
import { utcToDateTimeFormat } from '/@/utils/date-format'

const setupFilters = (app: App) => {
  app.config.globalProperties.$filters = {
    utcFormat(value: string) {
      return utcToDateTimeFormat(value)
    },
    showStatus(value: number) {
      return value === 0 ? '停用' : '启用'
    }
  }
}

export default setupFilters
