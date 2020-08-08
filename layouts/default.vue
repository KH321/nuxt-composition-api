<script lang="ts">

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const items = [
      { icon: 'home', title: 'Home' },
      { icon: 'app', title: 'app' }
    ]
    return {
      items,
      window
    }
  }
})
</script>

<template>
  <v-app>
    <v-navigation-drawer
      app
      color="primary"
      dark
      :expand-on-hover="!$vuetify.breakpoint.mobile"
      :mini-variant="!$vuetify.breakpoint.mobile"
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
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style>
</style>
