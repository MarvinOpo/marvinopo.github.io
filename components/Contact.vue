<template>
    <v-card color="transparent" class="w-100" flat>
        <v-card-title class="text-h4">
            Contact
        </v-card-title>
        <v-card-text>
            <div>
                “Got a project, idea, or just want to say hi? Feel free to reach out—I’d love to connect!”
            </div>

            <br><br>

            <v-row justify="center">
                <v-col v-for="contact in contacts" cols="12" md="6" lg="3">
                    <v-card>
                        <v-card-text class="text-center">
                            <v-icon color="red" size="30">{{ contact.icon }}</v-icon><br><br>
                            <span class="fs-20 mt-5">{{ contact.header }}</span><br>
                            <span class="fs-15 mt-2">{{ contact.detail }}</span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup>

const contacts = ref([
    {
        icon: 'mdi-phone',
        header: 'PHONE',
        detail: '(+63) 921 8155 172'
    },
    {
        icon: 'mdi-email',
        header: 'EMAIL',
        detail: 'markvincentopo@gmail.com'
    },
    {
        icon: 'mdi-map-marker',
        header: 'ADDRESS',
        detail: 'Canghang-at Tawason, Mandaue City, Cebu 6014'
    },
])
</script>