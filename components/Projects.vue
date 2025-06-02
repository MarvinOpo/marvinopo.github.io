<template>
	<div>
		<v-card color="primary" flat>
			<v-card-title class="text-h4">
				Projects
			</v-card-title>
			<v-card-text>
				<v-row justify="center">
					<v-col v-for="project in projects" cols="12" md="6" lg="4">
						<v-card class="project-item mx-auto" @click="openImageCarousel(project)">
							<v-img :src="`/images/${project.imageName}1.png`"
								max-height="260" cover></v-img>
							<v-card-title>
								{{ project.title }}
							</v-card-title>
							<v-card-text class="flex-grow-1">
								{{ project.description }}<br><br>

								<b>Role:</b> {{ project.role }}<br>
								<b>Key Stack:</b> <i>{{ project.stack }}</i>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>

		<DialogImageCarousel v-model="dialog.isVisible" :item="dialog.project"></DialogImageCarousel>
	</div>
</template>

<script setup>
const dialog = ref({
	isVisible: false,
	project: {}
})

const projects = ref([
	{
		code: 'E-LDS',
		icon: 'mdi-school',
		title: 'E-Learning and Development System',
		description: 'A one-stop system providing innovative, cost-effective, and efficient training. A way to deliver education and training in the participant’s own space and time.',
		role: 'Full Stack Developer',
		stack: 'Nuxt, Vuetify, Pinia, Node, Express, Prisma, MySQL',
		imageName: 'elds',
		imageCount: 4
	},
	{
		code: 'HRIS',
		icon: 'mdi-briefcase-account',
		title: 'Human Resource Information System',
		description: 'A comprehensive web-based system designed to manage and streamline human resource processes, including employee management, payroll, and time record tracking.',
		role: 'Full Stack Developer',
		stack: 'Vite, Vuetify, Pinia, Node, Express, Prisma, MySQL, Websocket',
		imageName: 'hris',
		imageCount: 5
	},
	{
		code: 'E-SPMS',
		icon: 'mdi-poll',
		title: 'E-Strategic Performance Management System',
		description: 'A performance evaluation system that ensure generation of timely, accurate, and reliable information for both performance monitoring/tracking, accomplishment reporting, program improvement and policy decision-making.',
		role: 'Full Stack Developer',
		stack: 'Vue3, Vuetify, Vuex, Node, Express, MySQL',
		imageName: 'espms',
		imageCount: 5
	},
	{
		code: 'DTS',
		icon: 'mdi-file-document-multiple',
		title: 'Document Tracking System',
		description: 'A centralized system designed to monitor, manage, and track the flow of official documents within an organization. It ensures transparency, accountability, and timely access to records across departments.',
		role: 'Full Stack Developer',
		stack: 'Vue3, Vuetify, Pinia, Node, Express, MySQL',
		imageName: 'dts',
		imageCount: 3
	},
	{
		code: 'B-DTR',
		icon: 'mdi-fingerprint',
		title: 'Face Recognition & Biometric DTR',
		description: '.NET-based systems designed to automate and manage employee attendance using facial recognition and biometric scanning.',
		role: 'Full Stack Developer',
		stack: '.Net, Node, Express, MySQL, Device API Integration',
		imageName: 'bs',
		imageCount: 2
	}
])

const openImageCarousel = (project) => {
	console.log('QWEQWE', project)
	dialog.value.isVisible = true;
	dialog.value.project = Object.assign({}, project);
}

</script>

<style>
.project-item {
	display: flex;
	flex-direction: column;
	height: 450px;
	cursor: pointer;
}

.project-item:hover {
	box-shadow: 0 0 10px #5cb85c;
	scale: 1.02;
}

@media (max-width: 600px) {
	.project-item {
		height: 400px;
	}
}
</style>