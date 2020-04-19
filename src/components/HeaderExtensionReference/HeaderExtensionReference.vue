<template>
	<v-tabs
		v-model="activeTab"
		background-color="green"
	>
		<v-tabs-slider></v-tabs-slider>

		<v-tab
			v-for="tab in tabs"
			:key="tab.id"
			:to="tab.to"
			exact>
			{{ tab.title }}
		</v-tab>
	</v-tabs>
</template>
<script src="./HeaderExtensionReference.js"></script>
