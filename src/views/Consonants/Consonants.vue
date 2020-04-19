<template>
	<v-container fluid>
		<v-row>
			<ReferenceItem
				v-for="(consonant, index) in consonants"
				type="consonant"
				:key="consonant.symbol"
				:item="consonant"
				:index="index"/>
		</v-row>
	</v-container>
</template>
<script src="./Consonants.js"></script>
