<script lang="ts">

import { defineComponent } from '@vue/composition-api'
import { checkMobile } from '~/hooks/breakpoint.ts'

export default defineComponent({
  setup () {
    const isMobile = checkMobile()
    const items = [
      { icon: 'home', title: 'Home' },
      { icon: 'app', title: 'app' }
    ]
    return {
      items,
      window,
      isMobile
    }
  }
})
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-if="!isMobile"
      app
      color="primary"
      dark
      mobile-breakpoint="960"
      :expand-on-hover="$vuetify.breakpoint.smAndDown"
      :mini-variant="$vuetify.breakpoint.smAndDown"
    >
      <v-list-item>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    {{ window.console.log({$vuetify}) }}
    <v-main>
      <v-app-bar
        v-if="isMobile"
        color="deep-purple accent-4"
        dark
        dense
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style>
</style>
