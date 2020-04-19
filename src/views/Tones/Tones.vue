<template>
	<v-container fluid>
		<v-row>
			<ReferenceItem
				v-for="(toneMark, index) in toneMarks"
				type="tone"
				:key="toneMark.symbol"
				:item="toneMark"
				:index="index"/>
		</v-row>
	</v-container>
</template>
<script src="./Tones.js"></script>
