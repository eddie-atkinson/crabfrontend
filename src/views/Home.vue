<template>
  <div class="w-full h-full font-mono text-gray-200 flex justify-center m-10">
    <div class="text-center">
      <p class="text-3xl">It has been</p>
      <div v-if="isDead">
        <p class="text-7xl">{{ reportedDead }}</p>
        <p class="text-3xl">since the crab was confirmed dead</p>
      </div>
      <div v-else>
        <p class="text-7xl">{{ lastReportedAlive }}</p>
        <p class="text-3xl">since the crab was confirmed alive</p>
        <p class="text-xl">(it's probably dead)</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getCrabStatus } from "../firebase/utils";
import formatDistance from "date-fns/formatDistance";
export default {
  data() {
    return {
      diedAt: new Date(),
      isDead: true,
      dateVerified: new Date(),
      aliveStatus: false,
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
      return formatDistance(this.dateVerified, new Date());
    },
    reportedDead() {
      return formatDistance(this.diedAt, new Date());
    },
  },
};
</script>

<style></style>
