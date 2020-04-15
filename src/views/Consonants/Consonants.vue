<template>
	<div class="reference-list">
		<template v-for="(consonant, index) in consonants">
			<ReferenceItem type="consonant" :key="consonant.symbol" :item="consonant" :index="index"/>
		</template>
	</div>
</template>
<script src="./Consonants.js"></script>
