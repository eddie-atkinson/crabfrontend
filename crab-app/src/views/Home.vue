<template>
  <div class="w-full h-full font-mono text-gray-200 flex justify-center m-10">
    <div class="text-center">
      <p class="text-3xl">It has been</p>
      <p class="text-7xl">5</p>
      <p class="text-3xl">days since the crab was confirmed alive</p>
      <p class="text-xl">(it's probably dead)</p>
      <p>{{ diedAt }}</p>
      <p>{{ isDead }}</p>
    </div>
  </div>
</template>
<script>
import { getCrabStatus } from '../firebase/utils';
export default {
  data() {
    return {
      diedAt: null,
      isDead: null,
    };
  },
  setup() {},
  async beforeMount() {
    const { diedAt, isDead } = await getCrabStatus();
    console.log(diedAt);
    console.log(isDead);
    this.diedAt = diedAt;
    this.isDead = isDead;
  },
  computed: {},
};
</script>

<style></style>
