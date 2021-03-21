<template>
  <div class="w-full h-full font-mono text-gray-200 flex justify-center my-10">
    <div class="text-center">
      <div v-show="dataFetched">
        <p class="text-3xl">It has been</p>
        <div v-if="isDead">
          <p class="text-7xl">{{ reportedDead }}</p>
          <p class="text-3xl">since the crab was confirmed dead</p>
        </div>
        <div v-else>
          <p class="text-7xl">{{ lastReportedAlive }}</p>
        </div>
        <p class="text-3xl">since the crab was confirmed alive</p>
        <div v-if="probablyDead">
          <p class="text-xl">(it's probably dead)</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCrabStatus } from "../firebase/utils";
import { formatDistance, differenceInDays } from "date-fns";

export default {
  data() {
    return {
      diedAt: new Date(),
      isDead: true,
      dateVerified: new Date(),
      aliveStatus: false,
      dataFetched: false,
    };
  },
  setup() {},
  async beforeMount() {
    const { diedAt, isDead, aliveStatus, dateVerified } = await getCrabStatus();
    this.aliveStatus = aliveStatus;
    this.dateVerified = dateVerified;
    this.diedAt = diedAt;
    this.isDead = isDead;
    this.dataFetched = true;
  },
  computed: {
    lastReportedAlive() {
      return formatDistance(this.dateVerified, new Date());
    },
    reportedDead() {
      return formatDistance(this.diedAt, new Date());
    },
    probablyDead() {
      return differenceInDays(new Date(), this.dateVerified) > 5;
    },
  },
};
</script>

<style></style>
