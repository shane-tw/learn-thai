<template>
	<v-container fluid>
		<v-row>
			<template v-for="(consonant, index) in consonants">
				<ReferenceItem type="consonant" :key="consonant.symbol" :item="consonant" :index="index"/>
			</template>
		</v-row>
	</v-container>
</template>
<script src="./Consonants.js"></script>
