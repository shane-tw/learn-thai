<template>
	<div>
		<v-tabs-items v-model="referenceTab" @change="updateRouter($event)">
			<v-tab-item
				v-for="tab in tabs"
				:key="tab.id"
				:value="tab.to">
				<router-view v-if="referenceTab === tab.to"/>
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>
<script src="./Reference.js"></script>
<style src="./Reference.scss" lang="scss"></style>
