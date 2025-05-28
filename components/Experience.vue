<template>
    <v-card color="transparent" flat>
        <v-card-title class="text-h4">
            Work Experience
        </v-card-title>

        <v-card-text>
            <v-timeline>
                <v-timeline-item v-for="item in experience" :key="item.company">
                    <template v-slot:icon>
                        <v-avatar v-if="item.image"
                            :image="`https://marvinopo.github.io/portfolio/images/${item.image}`"></v-avatar>
                        <v-icon v-else color="black">mdi-pound</v-icon>
                    </template>
                    <template v-slot:opposite>
                        {{ item.date }}
                    </template>
                    <div>
                        <div class="text-h6">{{ item.company }}</div>
                        <p>{{ item.description }}</p>
                        <p class="mt-4"><b>Projects:</b> <i>{{ item.projects }}</i></p>
                    </div>
                </v-timeline-item>

            </v-timeline>

            <!-- <v-container>
                <v-timeline>
                    <v-timeline-item v-for="item in experience" :key="item.company">
                        <template v-slot:icon>
                            <v-avatar v-if="item.image"
                                :image="`https://marvinopo.github.io/portfolio/images/${item.image}`"></v-avatar>
                            <v-icon v-else color="black">mdi-pound</v-icon>
                        </template>
                        <template v-slot:opposite>
                            <span>{{ item.date }}</span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title class="text-h5">
                                {{ item.company }}
                            </v-card-title>
                            <v-card-subtitle>
                                {{ item.role }} ({{ item.duration }})
                            </v-card-subtitle>
                            <v-card-text>
                                {{ item.description }}

                                <br><br>

                                <b>Projects:</b> <i>{{ item.projects }}</i>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-container> -->
        </v-card-text>
    </v-card>
</template>

<script setup>
const experience = ref([
    {
        company: 'Vicente Sotto Memorial Medical Center',
        date: 'November 2019 - Present',
        description: 'Vicente Sotto Memorial Medical Center is a government-owned hospital in Cebu City, Philippines. VSMMC is a general tertiary medical center teaching training medical facility owned by the Philippine Government.',
        duration: '5 years+',
        image: 'vsmmc-logo.png',
        projects: 'Human Resource Information System, Learning and Development System, Performance Management System, Document Tracking, Patient Tracking, Doctor’s Note, Teleconsult System, Face DTR, etc.',
        role: 'Full Stack Web Developer'
    },
    {
        company: 'Department of Health Region VII',
        date: 'October 2017 - November 2019',
        description: 'Department of Health is the main government agency responsible for ensuring access to public health services and regulating health-related goods and services for all Filipinos. ',
        duration: '2 years+',
        image: 'doh-logo.png',
        projects: 'PHA Check-App, Referral App, Dengvaxia Profiling',
        role: 'Android Developer'
    },
    {
        company: '#GTE Corporation',
        date: 'June 2016 - October 2017',
        description: '#GTE Corp is a sister company of known IT solutions provider in Cebu under BKHI including Remitbox Corporation which is specializing on Payment and Remittance Platforms.',
        duration: '1 year+',
        image: null,
        projects: 'Progear EasyLoad, Gemmary Dashboard, Event Attendance Management, SMS Manager',
        role: 'Android Developer'
    },
])
</script>