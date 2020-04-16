<template>
	<v-container fluid>
		<v-row>
			<template v-for="(toneMark, index) in toneMarks">
				<ReferenceItem type="tone" :key="toneMark.symbol" :item="toneMark" :index="index"/>
			</template>
		</v-row>
	</v-container>
</template>
<script src="./Tones.js"></script>
