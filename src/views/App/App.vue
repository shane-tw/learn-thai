<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app fixed>
			<v-list
				dense
				nav
			>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					link
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
			app
			color="green"
			dark
			hide-on-scroll
			v-if="$route.meta.header !== false"
		>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="!drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>

			<template v-slot:extension v-if="$route.meta.header_extension">
				<router-view name="header_extension"/>
			</template>
		</v-app-bar>

		<v-content>
			<router-view/>
		</v-content>
	</v-app>
</template>
<script src="./App.js"></script>
