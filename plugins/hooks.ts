import Vue from 'vue'
import { setupContext, setupVM, ctx } from '~/hooks/setupVM'

const hooksPlugin = (ctx: ctx) => {
  setupVM(new Vue())
  setupContext(ctx)
}

export default hooksPlugin
