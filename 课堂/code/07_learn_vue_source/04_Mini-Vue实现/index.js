function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null;

      watchEffect(function() {
        // 挂载
        if (!isMounted) {
          oldVNode = rootComponent.render();
          mount(oldVNode, container);
          isMounted = true;
        } else {
          // 更新
          const newVNode = rootComponent.render();
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      })
    }
  }
}