<template>
	<v-container fluid>
		<v-row>
			<ReferenceItem
				v-for="(number, index) in numbers"
				type="number"
				:key="number.symbol"
				:item="number"
				:index="index"/>
		</v-row>
	</v-container>
</template>
<script src="./Numbers.js"></script>
