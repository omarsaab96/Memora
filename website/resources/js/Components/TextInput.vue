<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-md border-1 border-white bg-[#00D6CA] text-[14px] focus:border-white !outline-0 !ring-0 text-white font-normal"
        v-model="model"
        ref="input"
    />
</template>
