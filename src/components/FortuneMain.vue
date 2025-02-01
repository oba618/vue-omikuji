<script setup lang="ts">

</script>

<template>
  <main>
    <div>
      <h2>ボタンをクリックしてください</h2>
      <div class="fortune-wrapper">
        <button>おみくじを引く</button>
        <p>result</p>
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
