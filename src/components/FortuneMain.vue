<script setup lang="ts">
import { ref } from 'vue'

const fortuneResult = ref('')
const isClicked = ref(false)

function handleGetOmikuji() {
  fortuneResult.value = "大吉"
  isClicked.value = true
}
</script>

<template>
  <main>
    <div>
      <h2>ボタンをクリックしてください</h2>
      <div class="fortune-wrapper">
        <button @click="handleGetOmikuji" v-bind:disabled="isClicked">おみくじを引く</button>
        <p v-if="fortuneResult">結果：{{ fortuneResult }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
}

.fortune-wrapper {
  padding: 10px;
}

.fortune-wrapper button {
  padding: 10px;
}

.fortune-wrapper p {
  font-size: 1.5rem;
}
</style>
