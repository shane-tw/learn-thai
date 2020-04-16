<template>
	<v-container fluid>
		<v-row>
			<template v-for="(vowel, index) in vowels">
				<ReferenceItem type="vowel" :key="vowel.symbol" :item="vowel" :index="index"/>
			</template>
		</v-row>
	</v-container>
</template>
<script src="./Vowels.js"></script>
