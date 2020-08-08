import { computed, SetupContext, unref } from '@vue/composition-api'

export type ctx = {
  $vuetify: any
} & SetupContext

type Runtime = {
  vm?: Vue
  ctx?: ctx
}

const runtime: Runtime = {
  vm: undefined,
  ctx: undefined
}

export function getVM (): Vue {
  if (runtime.vm) {
    return runtime.vm
  } else {
    throw new ReferenceError('[hooks.ts] No runtime vm')
  }
}

export function getContext (): ctx {
  if (runtime.ctx) {
    return runtime.ctx
  } else {
    throw new ReferenceError('[hooks.ts] No runtime ctx')
  }
}

export function setupVM (vm: Vue): void {
  runtime.vm = vm
}

export function setupContext (ctx: ctx): void {
  runtime.ctx = ctx
}
