<template>
    <div class="reference-list">
        <template v-for="(vowel, index) in vowels">
            <ReferenceItem type="vowel" :key="vowel.symbol" :item="vowel" :index="index"/>
        </template>
    </div>
</template>
<script src="./Vowels.ts" lang="ts"></script>
