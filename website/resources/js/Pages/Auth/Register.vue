<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    phone:'',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <div class="flex items-center justify-center px-6">
            <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                
                <!-- Header -->
                <div class="text-center mb-6">
                    <h1 class="text-3xl font-bold text-gray-800">Create Account ✨</h1>
                    <p class="text-gray-500 text-sm">Join us today and get started</p>
                </div>

                <!-- Form -->
                <form @submit.prevent="submit" class="space-y-5">
                    <!-- Name -->
                    <div>
                        <InputLabel for="name" value="Name" class="text-gray-700 font-semibold" />
                        <TextInput
                            id="name"
                            type="text"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <!-- Email -->
                    <div>
                        <InputLabel for="email" value="Email" class="text-gray-700 font-semibold" />
                        <TextInput
                            id="email"
                            type="email"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.email"
                            required
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <!-- Phone -->
                    <div>
                        <InputLabel for="phone" value="Phone" class="text-gray-700 font-semibold" />
                        <TextInput
                            id="phone"
                            type="text"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.phone"
                            required
                        />
                        <InputError class="mt-2" :message="form.errors.phone" />
                    </div>

                    <!-- Password -->
                    <div>
                        <InputLabel for="password" value="Password" class="text-gray-700 font-semibold" />
                        <TextInput
                            id="password"
                            type="password"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.password"
                            required
                            autocomplete="new-password"
                        />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <!-- Confirm Password -->
                    <div>
                        <InputLabel for="password_confirmation" value="Confirm Password" class="text-gray-700 font-semibold" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            class="mt-2 block w-full rounded-xl border-gray-300 focus:border-[#00D6CA] focus:ring-[#00D6CA]"
                            v-model="form.password_confirmation"
                            required
                            autocomplete="new-password"
                        />
                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                    </div>

                    <!-- Submit -->
                    <PrimaryButton
                        class="w-full justify-center rounded-xl bg-[#00D6CA] text-white py-3 font-semibold hover:bg-[#00b5ac] transition disabled:opacity-50"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Register
                    </PrimaryButton>
                </form>

                <!-- Footer -->
                <div class="text-center mt-6 text-sm text-gray-600">
                    Already registered?
                    <Link
                        :href="route('login')"
                        class="text-[#00D6CA] font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
