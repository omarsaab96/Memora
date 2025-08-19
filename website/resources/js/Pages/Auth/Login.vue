<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head title="Log in" />

        <div class="flex items-center justify-center px-6">
            <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <!-- Header -->
                <div class="text-center mb-6">
                    <h1 class="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
                    <p class="text-gray-500 text-sm">Please log in to continue</p>
                </div>

                <!-- Status Message -->
                <div v-if="status" class="mb-4 text-sm font-medium text-green-600 text-center">
                    {{ status }}
                </div>

                <!-- Form -->
                <form @submit.prevent="submit" class="space-y-5">
                    <!-- Email -->
                    <div>
                        <InputLabel for="email" value="Email" class="text-gray-700 font-semibold" />
                        <TextInput id="email" type="email"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.email" required autofocus autocomplete="username" />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <!-- Password -->
                    <div>
                        <InputLabel for="password" value="Password" class="text-gray-700 font-semibold" />
                        <TextInput id="password" type="password"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.password" required autocomplete="current-password" />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <!-- Remember + Forgot -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center text-sm text-gray-600">
                            <Checkbox name="remember" v-model:checked="form.remember" class="rounded" />
                            <span class="ml-2">Remember me</span>
                        </label>

                        <Link v-if="canResetPassword" :href="route('password.request')"
                            class="text-sm text-[#00D6CA] hover:underline">
                        Forgot password?
                        </Link>
                    </div>

                    <!-- Submit -->
                    <PrimaryButton
                        class="w-full justify-center rounded-xl bg-[#00D6CA] text-white py-3 font-semibold hover:bg-[#00b5ac] transition disabled:opacity-50"
                        :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Log in
                    </PrimaryButton>
                </form>

                <!-- Footer -->
                <div class="text-center mt-6 text-sm text-gray-600">
                    Don't have an account?
                    <Link :href="route('register')" class="text-[#00D6CA] font-semibold hover:underline">
                    Register
                    </Link>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
