<script lang="ts">
import { computed, defineComponent, reactive, ref, unref, watch } from '@vue/composition-api'
import { checkMobile } from '~/hooks/breakpoint.ts'

export default defineComponent({
  setup () {
    const isMobile = checkMobile()
    const items = [
      { icon: 'home', title: 'Home' },
      { icon: 'app', title: 'app' }
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
      items,
      isMobile,
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
      <v-list-item>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-btn icon @click="drawer.mini = !drawer.mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon @click="drawer.mini && (drawer.mini = !drawer.mini)">
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
</style>
