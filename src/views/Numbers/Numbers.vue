<template>
	<div class="reference-list">
		<template v-for="(number, index) in numbers">
			<ReferenceItem type="number" :key="number.symbol" :item="number" :index="index"/>
		</template>
	</div>
</template>
<script src="./Numbers.js"></script>
