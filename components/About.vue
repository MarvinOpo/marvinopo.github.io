<template>
    <v-card color="surface" flat>
        <v-row>
            <v-col cols="auto" class="d-none d-md-flex">
                <img src="https://marvinopo.github.io/portfolio/images/me.png" width="500" cover>
            </v-col>

            <v-col cols="12" md="8">
                <v-container>
                    <v-card-title class="text-h3">
                        <template v-if="isMobile">
                            <v-avatar color="white" size="150">
                                <img alt="Mark" src="https://marvinopo.github.io/portfolio/images/me-avatar.png">
                            </v-avatar>

                            <v-spacer></v-spacer>
                        </template>

                        About Me
                    </v-card-title>
                    <v-card-text>
                        <p>Hi there! I'm <b>Mark</b>,</p>
                        <p class="mt-4">
                            I'm a full-stack developer passionate about building clean, scalable, and user-focused
                            applications. I enjoy working across both frontend and backend, turning complex problems
                            into intuitive digital experiences. Whether it's crafting smooth interfaces or designing
                            robust APIs, I bring a balanced mix of creativity, logic, and attention to detail to every
                            project.
                        </p>

                        <p class="mt-4">
                            I'm always learning, always shipping, and always looking for better ways to
                            build.
                        </p>


                        <v-row class="mt-5">
                            <v-col cols="12">
                                <b>Current Stack:</b>
                            </v-col>

                            <v-col v-for="stack in stacks.current" :key="stack.name" cols="auto">
                                <v-chip :prepend-icon="stack.icon" :text="stack.name" />
                            </v-col>

                            <v-col cols="12" class="mt-4">
                                <b>Past experience with:</b>
                            </v-col>

                            <v-col v-for="stack in stacks.past" :key="stack.name" cols="auto">
                                <v-chip :prepend-icon="stack.icon" :text="stack.name" />
                            </v-col>
                        </v-row>

                        <v-btn @click="viewCv" class="mt-15" color="accent" prepend-icon="mdi-eye" rounded="xl"
                            size="x-large">
                            View CV
                        </v-btn>
                    </v-card-text>
                </v-container>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
const { isMobile } = useDisplay()
const stacks = ref({
    current: [
        { name: 'Nuxt', icon: 'mdi-nuxt' },
        { name: 'Vite', icon: 'mdi-lightning-bolt-outline' },
        { name: 'Vue 3', icon: 'mdi-vuejs' },
        { name: 'Vue 2', icon: 'mdi-vuejs' },
        { name: 'Vuetify', icon: 'mdi-vuetify' },
        { name: 'Vuex', icon: 'mdi-store' },
        { name: 'Pinia', icon: 'mdi-pine-tree' },
        { name: 'WebSocket', icon: 'mdi-web' },
        { name: 'Node.js', icon: 'mdi-nodejs' },
        { name: 'Express', icon: 'mdi-server' },
        { name: 'Prisma', icon: 'mdi-database' },
        { name: 'MySQL', icon: 'mdi-database' },
        { name: 'MSSQL', icon: 'mdi-database' },
        { name: 'Git', icon: 'mdi-git' },
        { name: 'HTML', icon: 'mdi-language-html5' },
        { name: 'JavaScript', icon: 'mdi-language-javascript' },
        { name: 'CSS', icon: 'mdi-language-css3' },
    ],
    past: [
        { name: 'Java Android', icon: 'mdi-android' },
        { name: 'GreenDao', icon: 'mdi-database' },
        { name: 'Room', icon: 'mdi-home-outline' },
        { name: 'SQLite', icon: 'mdi-database' },
        { name: 'Firebase', icon: 'mdi-fire' },
        { name: 'Google Services', icon: 'mdi-google' },
    ]
})

const viewCv = () => {
    window.open('/files/MVOCV.pdf', '_blank')
}

</script>