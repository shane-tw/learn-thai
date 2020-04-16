<template>
	<v-container fluid>
		<v-row>
			<template v-for="(number, index) in numbers">
				<ReferenceItem type="number" :key="number.symbol" :item="number" :index="index"/>
			</template>
		</v-row>
	</v-container>
</template>
<script src="./Numbers.js"></script>
