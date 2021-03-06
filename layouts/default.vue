<script lang="ts">
import { computed, defineComponent, reactive, unref, watch } from '@vue/composition-api'
import { checkMobile } from '~/hooks/breakpoint.ts'
import { properties } from '~/utils/constants/property'

export default defineComponent({
  setup () {
    const isMobile = checkMobile()
    const items = [
      'border',
      'app'
    ]
    const drawer = reactive({
      mini: false,
      toggleShow: false
    })
    const showDrawer = computed({
      get: () => !isMobile.value ? true : isMobile.value && unref(drawer.toggleShow),
      set: () => {}
    })
    watch(
      isMobile,
      (isMobile, prevIsMobile) => {
        if (!prevIsMobile && isMobile) {
          drawer.toggleShow = false
        }
      }
    )
    return {
      drawer,
      isMobile,
      items,
      properties,
      showDrawer
    }
  }
})
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="showDrawer"
      app
      color="primary"
      dark
      mobile-breakpoint="960"
      :mini-variant="drawer.mini"
      :temporary="isMobile && showDrawer"
    >
      <v-list-item link>
        <v-list-item-title class="title" @click="drawer.mini && (drawer.mini = !drawer.mini)">
          CSS Playgrounds
        </v-list-item-title>
        <v-btn icon @click="drawer.mini = !drawer.mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item
          v-for="(item, i) in properties"
          :key="i"
          link
          @click="drawer.mini && (drawer.mini = !drawer.mini)"
        >
          <v-list-item-content>
            <v-list-item-title class="list-title" v-text="item" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar
        v-if="isMobile"
        color="deep-purple accent-4"
        dark
        dense
      >
        <v-app-bar-nav-icon
          @click="drawer.toggleShow = !drawer.toggleShow"
        />
      </v-app-bar>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style>
.list-title {
  font-size: 1rem !important;
}
</style>
