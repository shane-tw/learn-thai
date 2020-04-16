<template>
	<v-col cols="6" sm="4" lg="3" xl="2">
		<v-card color="green" class="reference-item" height="180" v-ripple @click="onClickItem">
			<div class="reference-item__row">
				<span class="reference-item__thai">
					{{ item.thai }}
				</span>
				<span class="reference-item__english" v-if="item.english">
					{{ item.english }}
				</span>
			</div>
			<div class="reference-item__row">
				<span class="reference-item__symbol">
					{{ item.symbol }}
				</span>
				<img v-if="type === 'consonant'" :src="`/images/consonants/${index+1}.webp`" height="80"/>
			</div>
			<div class="reference-item__row">
				<span class="reference-item__romanised">
					{{ item.romanised }}
				</span>
				<div class="reference-item__badge" v-if="item.tone || item.length" :class="{
					'reference-item__badge--low': item.tone === 'low' || item.length === 'short',
					'reference-item__badge--mid': item.tone === 'mid',
					'reference-item__badge--high': item.tone === 'high' || item.length === 'long',
				}">
					{{ item.tone || item.length }}
				</div>
			</div>
		</v-card>
	</v-col>
</template>
<script src="./ReferenceItem.js"></script>
<style src="./ReferenceItem.scss" scoped lang="scss"></style>
