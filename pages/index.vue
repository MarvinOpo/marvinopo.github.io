<template>
    <Toolbar></Toolbar>

    <v-container class="mt-5">
        <div id="about" class="pt-16">
            <About />
        </div>

        <v-divider class="mt-10" />

        <div id="projects" class="pt-16">
            <Projects />
        </div>

        <v-divider class="mt-10" />

        <div id="experience" class="pt-16">
            <Experience />
        </div>
    </v-container>

    <Footer></Footer>
</template>

<script setup>

</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>