import { computed, unref } from '@vue/composition-api'
import { getContext } from '~/hooks/setupVM'

export const breakpoint = () => {
  const { $vuetify } = getContext()
  return unref(computed(() => $vuetify.breakpoint))
}

export const isMobile = (): boolean => {
  const { $vuetify } = getContext()
  return $vuetify.breakpoint.mobile
}
