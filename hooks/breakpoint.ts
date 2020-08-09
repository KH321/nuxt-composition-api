import { computed, ComputedRef, unref } from '@vue/composition-api'
import { getContext } from '~/hooks/setupVM'

const breakpoint = () => {
  const { $vuetify } = getContext()
  return unref(computed(() => $vuetify.breakpoint))
}

const checkMobile = (): ComputedRef<boolean> => {
  const { $vuetify } = getContext()
  return computed(() => $vuetify.breakpoint.smAndDown)
}

export { checkMobile, breakpoint }
