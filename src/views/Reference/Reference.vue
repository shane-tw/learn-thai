<template>
  <div>
    <h1>Reference</h1>
    <div style="margin-bottom: 10px;">
      <router-link to="consonants" style="margin: 10px;">Consonants</router-link>
      <router-link to="vowels" style="margin: 10px;">Vowels</router-link>
      <router-link to="tones" style="margin: 10px;">Tones</router-link>
      <router-link to="numbers" style="margin: 10px;">Numbers</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script src="./Reference.ts" lang="ts"></script>
<style src="./Reference.scss" lang="scss"></style>
