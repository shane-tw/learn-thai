<template>
	<v-container fluid>
		<v-row>
			<ReferenceItem
				v-for="(vowel, index) in vowels"
				type="vowel"
				:key="vowel.symbol"
				:item="vowel"
				:index="index"/>
		</v-row>
	</v-container>
</template>
<script src="./Vowels.js"></script>
