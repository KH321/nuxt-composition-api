<template>
  <v-container>
    <div>your color scheme: {{ color }}</div>
    <H1>title</H1>
    <div>
      {{ mouse }}
    </div>
    <div>
      <h1>count: {{ count }}</h1>
      <v-btn color="primary" rounded small @click="inc()">Increment</v-btn>
      <v-btn color="primary" rounded small @click="dec()">Decrement</v-btn>
      <v-btn color="primary" rounded small @click="inc(5)">Increment (+5)</v-btn>
      <v-btn color="primary" rounded small @click="dec(5)">Decrement (-5)</v-btn>
      <v-btn color="primary" rounded small @click="set(100)">Set (100)</v-btn>
      <v-btn color="primary" rounded small @click="reset()">Reset</v-btn>
    </div>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello, Vuetify!</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <monaco />
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
