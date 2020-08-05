type Runtime = {
  vm: Vue | undefined
}

const runtime: Runtime = {
  vm: undefined
}

export function getVM (): Vue {
  if (runtime.vm) {
    return runtime.vm
  } else {
    throw new ReferenceError('[hooks] No runtime vm')
  }
}

export function setupVM (vm: Vue): void {
  if (typeof vm.$options.setup === 'function') {
    runtime.vm = vm
  }
}
