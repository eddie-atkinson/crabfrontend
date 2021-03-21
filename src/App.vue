<template>
  <router-view />
</template>

<script setup></script>

<style>
body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/Crab2.svg");
  width: 100%;
  background-size: cover;
  height: 0;
  padding: 0; /* reset */
  padding-bottom: calc(100% * 3 / 4);
}
</style>
