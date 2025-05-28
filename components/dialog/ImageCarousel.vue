<template>
    <v-dialog v-model="props.modelValue" fullscreen>
        <v-card>
            <v-card-title class="d-flex">
                {{ item.code }}
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" @click="$emit('update:modelValue', false)"></v-btn>
            </v-card-title>
            <v-card-text>
                <v-carousel>
                    <v-carousel-item v-for="i in item.imageCount" :src="`/images/${item.imageName}${i}.png`"
                        cover></v-carousel-item>
                </v-carousel>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>
const { isMobile } = useDisplay()
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    item: {
        type: Object,
        required: true
    }
})
</script>

<style>
.v-carousel {
    height: 800px !important;
}

@media (max-width: 600px) {
    .v-carousel {
        height: 300px !important;
    }
}
</style>
