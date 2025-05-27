<template>
	<v-toolbar class="app-toolbar" color="primary">
		<v-toolbar-title class="system-label fs-30 fw-900" flat>
			<v-icon>mdi-account-tie</v-icon> MVOPortfolio
		</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-row no-gutters>
			<v-col v-for="item in toolbar.menu" :key="item.label" cols="auto">
				<v-btn :href="item.href" :prepend-icon="item.icon" variant="text">{{ item.label }}</v-btn>
			</v-col>
		</v-row>
		<v-spacer></v-spacer>
	</v-toolbar>
</template>

<script setup>
const toolbar = ref({
	menu: [
		{ href: '#about', label: 'About', icon: 'mdi-information' },
		{ href: '#projects', label: 'Projects', icon: 'mdi-briefcase' },
		{ href: '#experience', label: 'Experience', icon: 'mdi-trophy' },
		{ href: '#contact', label: 'Contact', icon: 'mdi-phone' }
	]
})
</script>

<style>
.app-toolbar {
	position: fixed !important;
	top: 0 !important;
	width: 100%;
	z-index: 4 !important;
	padding: 10px !important;
}
</style>