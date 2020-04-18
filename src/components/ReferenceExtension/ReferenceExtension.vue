<template>
	<v-tabs
		v-model="tab"
		background-color="green"
	>
		<v-tabs-slider></v-tabs-slider>

		<v-tab to="consonants">Consonants</v-tab>
		<v-tab to="vowels">Vowels</v-tab>
		<v-tab to="tones">Tones</v-tab>
		<v-tab to="numbers">Numbers</v-tab>
	</v-tabs>
</template>
