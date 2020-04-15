<template>
	<div class="reference-item" @click="onClickItem">
		<div class="reference-item__row">
			<div class="reference-item__thai">
				{{ item.thai }}
			</div>
			<div class="reference-item__english" v-if="item.english">
				{{ item.english }}
			</div>
		</div>
		<div class="reference-item__row">
			<div class="reference-item__symbol">
				{{ item.symbol }}
			</div>
			<img v-if="type === 'consonant'" :src="`/images/consonants/${index+1}.webp`" height="80"/>
		</div>
		<div class="reference-item__row">
			<div class="reference-item__romanised">
				{{ item.romanised }}
			</div>
			<div class="reference-item__badge" v-if="item.tone || item.length" :class="{
				'reference-item__badge--low': item.tone === 'low' || item.length === 'short',
				'reference-item__badge--mid': item.tone === 'mid',
				'reference-item__badge--high': item.tone === 'high' || item.length === 'long',
			}">
				{{ item.tone || item.length }}
			</div>
		</div>
	</div>
</template>
<script src="./ReferenceItem.js"></script>
<style src="./ReferenceItem.scss" scoped lang="scss"></style>
