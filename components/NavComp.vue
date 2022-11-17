<template>
    <div>
        <nav class="flex flex-row justify-between py-3 px-6 shadow sticky top-0">
            <NuxtLink to="/" class="flex flex-row space-x-3">
                <p class="text-2xl no-underline font-bold">
                    Manel Kheffache
                </p>
            </NuxtLink>
            <div class="flex flex-row space-x-5 self-center">
                <NuxtLink class="hover:text-maincolor" to="education">
                    Education
                </NuxtLink>
                <NuxtLink class="hover:text-maincolor" to="experience">
                    Experience
                </NuxtLink>
                <NuxtLink class="hover:text-maincolor" to="tech">
                    Tech & Lang Skills
                </NuxtLink>
                <NuxtLink class="hover:text-maincolor" to="other">
                    Other Experiences
                </NuxtLink>
                <NuxtLink class="hover:text-maincolor" to="contact">
                    Contact
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>

<style>
</style>