<template>
    <v-footer class="text-center d-flex flex-column ga-2 py-4 w-100" color="primary">
        <div class="d-flex ga-3">
            <v-btn v-for="link in links" :key="link.icon" :icon="link.icon" :href="link.url" density="comfortable"
                variant="text"></v-btn>
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <div id="contact" class="w-100">
            <Contact />
        </div>

        <v-divider></v-divider>

        <div>
            COPYRIGHT 2025 <strong>MVO</strong>
        </div>
    </v-footer>
</template>

<script setup>
const links = [
    { icon: 'mdi-facebook', url: 'https://www.facebook.com/marvz.opo' },
    { icon: 'mdi-github', url: 'https://github.com/marvinopo' },
    { icon: 'mdi-linkedin', url: 'https://linkedin.com/in/marvz' },
]
</script>