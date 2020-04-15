<template>
	<div>
		<v-tabs
			v-model="tab"
			background-color="deep-purple accent-4"
			class="elevation-2"
			dark
			:centered="centered"
			:grow="grow"
			:vertical="vertical"
			:right="right"
			:prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
			:next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
			:icons-and-text="icons"
		>
			<v-tabs-slider></v-tabs-slider>

			<v-tab to="consonants">Consonants</v-tab>
			<v-tab to="vowels">Vowels</v-tab>
			<v-tab to="tones">Tones</v-tab>
			<v-tab to="numbers">Numbers</v-tab>
		</v-tabs>

		<router-view/>
	</div>
</template>
<script src="./Reference.js"></script>
<style src="./Reference.scss" lang="scss"></style>
