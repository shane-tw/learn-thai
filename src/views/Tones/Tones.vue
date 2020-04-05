<template>
    <div class="reference-list">
        <template v-for="(toneMark, index) in toneMarks">
            <ReferenceItem type="tone" :key="toneMark.symbol" :item="toneMark" :index="index"/>
        </template>
    </div>
</template>
<script src="./Tones.ts" lang="ts"></script>
