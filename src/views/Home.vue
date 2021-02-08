<template>
  <div class="w-full h-full font-mono text-gray-200 flex justify-center m-10">
    <div class="text-center">
      <p class="text-3xl">It has been</p>
      <div v-if="!isDead">
        <p class="text-7xl">5</p>
        <p class="text-3xl">days since the crab was confirmed alive</p>
        <p class="text-xl">(it's probably dead)</p>
      </div>
      <div v-else>
        <p class="text-3xl">days since the crab was confirmed dead</p>
      </div>
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
    const { diedAt, isDead, aliveStatus, dateVerified } = await getCrabStatus();
    this.aliveStatus = aliveStatus;
    this.dateVerified = dateVerified;
    this.diedAt = diedAt;
    this.isDead = isDead;
  },
  computed: {
    lastReportedAlive() {
      return;
    },
  },
};
</script>

<style></style>
