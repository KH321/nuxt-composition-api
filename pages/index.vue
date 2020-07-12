<template>
  <v-container>
    <div>your color scheme: {{ color }}</div>
    <H1>title</H1>
    <div>
      <!-- {{ x }} -->
      <!-- {{ y }} -->
      {{ mouse }}
    </div>
    <div>
      <h1>count: {{ count }}</h1>
      <v-btn small color="primary" rounded @click="inc()">Increment</v-btn>
      <v-btn small color="primary" rounded @click="dec()">Decrement</v-btn>
      <v-btn small color="primary" rounded @click="inc(5)">Increment (+5)</v-btn>
      <v-btn small color="primary" rounded @click="dec(5)">Decrement (-5)</v-btn>
      <v-btn small color="primary" rounded @click="set(100)">Set (100)</v-btn>
      <v-btn small color="primary" rounded @click="reset()">Reset</v-btn>
      <v-btn small color="primary" rounded @click="inc()">Increment</v-btn>
    </div>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello, Vuetify!</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import {
  useMouse,
  usePreferredColorScheme,
  useStorage,
  useCounter
} from '@vueuse/core'

export default defineComponent({
  setup () {
    const mouse = useStorage('mouse', useMouse())
    return {
      color: usePreferredColorScheme(),
      mouse,
      ...useCounter()
    }
  }
})
</script>

<style>

</style>
