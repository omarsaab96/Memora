<script setup>
import { Thermometer, Ruler, ShieldCheck, Clock, PenTool, Recycle, Zap, Coffee, Hand, Brush, Droplets, Sparkles, RotateCcw, AlertTriangle, HelpCircle, ChevronDown } from "lucide-vue-next"
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
import { Head, Link } from '@inertiajs/vue3';
import $ from "jquery";

const features = [
    { text: "At oral temperature, the shape memory aligner returns to its original shape and grabs the tooth with consistent light force for effective movement.", icon: Thermometer },
    { text: "Uniform thickness and stable mechanical properties ensure more accurate tooth movement.", icon: Ruler },
    { text: "Made from biocompatible material for safe use.", icon: ShieldCheck },
    { text: "Fewer attachments and shorter treatment time.", icon: Clock },
    { text: "Customized design and thickness for a better fit and more effective treatment.", icon: PenTool },
    { text: "Direct printing eliminates the need for models, reducing waste and supporting eco-friendly practices.", icon: Recycle },
    { text: "Faster workflow from designing to finished aligner.", icon: Zap },
    { text: "Enhanced compliance: drink hot beverages while wearing the aligner for a patient-friendly experience.", icon: Coffee },
    { text: "Effortless insertion and removal after warming aligners in hot water.", icon: Hand },
]

const comparisons = [
    {
        left: {
            title: "A1",
            image: "/images/A1.jpg",
            text: "The aligner is susceptible to deformation during insertion and removal and loses its mechanical properties over time, making treatment less effective."
        },
        right: {
            title: "A2",
            image: "/images/A2.jpg",
            text: "Each time the aligner is deformed, the shape memory effect is activated at oral temperature, regaining its original shape and precise adaptation."
        }
    },
    {
        left: {
            title: "B1",
            image: "/images/B1.jpg",
            text: "Aligner not precisely fitted on the tooth due to undercut blockout necessary for thermoforming."
        },
        right: {
            title: "B2",
            image: "/images/B2.jpg",
            text: "After returning to its original shape, the aligner fully covers the tooth and gingiva, exerting fully controlled movements."
        }
    },
    {
        left: {
            title: "C1",
            image: "/images/C1.jpg",
            text: "Conventional aligners exert a pushing force (force-driven system). They apply force directly to the crown (attachment), which may lead to uncontrolled tipping and potential complications."
        },
        right: {
            title: "C2",
            image: "/images/C2.jpg",
            text: "Memora aligners exert a shape-driven force (shape-driven system). They simultaneously move the crown and root to the ideal position while maintaining tooth axis, providing continuous light force and reducing the need for attachments."
        }
    }
]

const instructions = [
    { text: "Maintain your oral hygiene: brush and floss your teeth and aligner after eating, before wearing them.", icon: Brush },
    { text: "Rinse your aligners every time you remove them.", icon: Droplets },
    { text: "Clean your aligners with a soft toothbrush and mild soap daily.", icon: Sparkles },
    { text: "Soak your aligners in warm water for 30 to 60 seconds daily to sterilize and remove bacteria.", icon: Thermometer },
    { text: "Commit to the wear time of the aligner (20–22 hours/day) to achieve planned movements.", icon: Clock },
    { text: "Switch to the next step of your treatment in the specified time — not sooner, not later.", icon: RotateCcw },
    { text: "Retainers will be required after your last aligner to maintain results.", icon: ShieldCheck },
    { text: "Before inserting, soak your aligners in warm water (not more than 50°C) for a few seconds to soften it.", icon: Thermometer },
    { text: "If removal is challenging, hold warm water in your mouth for a few seconds while wearing it to soften and easily remove.", icon: Hand },
]

const remarks = [
    "Poor oral hygiene during treatment can lead to tooth decay and gum inflammation.",
    "Mild pressure or discomfort is normal for the first few days of wearing a new aligner."
]

const openIndex = ref(null)

const toggle = (i) => {
    openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
    {
        q: "At what age is a person eligible to use Memora aligners?",
        a: "A person is generally eligible for clear aligners once all their baby teeth have fallen out and been replaced by permanent teeth. This usually happens around age 14, but the timing can vary."
    },
    {
        q: "What should I do if I feel pain or inflammation while wearing the aligner?",
        a: "Shape Memory Aligner (SMA) is a certified medical device that does not pose a risk of severe harm. Some patients may experience mild discomfort for a few days when switching to a new aligner. This sensation is normal and indicates that the teeth are moving."
    },
    {
        q: "Are there dietary restrictions while using the aligner?",
        a: "No, you are free to enjoy any meal after removing your aligners! Just never skip brushing and cleaning after eating to maintain oral hygiene."
    },
    {
        q: "How do I clean, disinfect, and store the aligner properly?",
        a: "Brush your aligners daily with a soft toothbrush and mild soap. Soak them in warm water for 30–60 seconds daily to sterilize and remove bacteria. Always store your aligners in their case when not in use."
    },
    {
        q: "How often are clinic visits needed?",
        a: "Typically, a check-up visit is recommended every few weeks for monitoring and necessary adjustments."
    }
]


defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    }
});

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
    });

    gsap.ticker.add(() => {
        const scrollY = smoother.scrollTop();
        const start = 0;
        const end = 400; // change this to how far you want the animation to last
        const start2 = 100;
        const end2 = 300;

        // clamp between 0 and 1
        const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
        const progress2 = Math.min(Math.max((scrollY - start2) / (end2 - start2), 0), 1);

        // interpolate height from 100vh to 100px
        const minHeight = 60;
        const maxHeight = window.innerHeight;
        const currentHeight = maxHeight - (maxHeight - minHeight) * progress;

        gsap.set(".hero", {
            height: currentHeight
        });

        gsap.set(".logo", {
            scale: 1 - 0.5 * progress2,
            y: -20 * progress2
        });

        gsap.set(".hero-text", {
            opacity: 1 - progress2,
            y: -30 * progress2
        });

        gsap.set(".scroll", {
            opacity: 1 - progress2,
        });

        gsap.set(".fakeLeftRadius", {
            opacity: 0 + progress2,
        });

        gsap.set(".fakeRightRadius", {
            opacity: 0 + progress2,
        });

        gsap.set(".herospacer", {
            opacity: 0 + progress2,
        });

        gsap.set(".content", {
            opacity: 0 + progress2,
        });
    });
});
</script>

<style scoped>
.reasons div:hover>div>svg {
    transform: scale(1.1);
    transition: transform 0.2s ease;
}
</style>

<template>

    <Head title="Home" />

    <div class="hero">

        <div class="fakeLeftRadius"></div>
        <div class="fakeRightRadius"></div>

        <div class="hero-text">
            <h1>MOVE SMARTER WITH</h1>
        </div>

        <img src="/images/memora.png" alt="Logo" class="logo" />
        <div class="scroll">Scroll</div>
        <Link :href="route('login')" class="bannerBtn">
        Are you a dentist?
        </Link>
    </div>

    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div class="herospacer"></div>
            <div class="content">
                <section>
                    <div class="centerCol">
                        <div class="max-w-6xl mx-auto text-center mb-12">
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                                About <span class="text-[#00D6CA]">Memora</span>
                            </h2>
                            <p class="mt-3 text-gray-600">
                                Based in Lebanon, Memora Aligners is a next-generation clear aligner solution designed
                                with
                                shape memory technology, to optimize teeth movement control and treatment
                                predictability.
                                Our aligners are directly 3D-printed with the advanced Graphy Tera Harz TC-85 resin,
                                using
                                shape
                                driven biomechanics.
                            </p>
                        </div>

                        <div class="flex align-stretch relative">
                            <div class="left relative z-10">
                                <div class="w-[200px] h-[400px] mx-auto">
                                    <img src="/images/bottle.png" class="h-full object-cover" alt="bottle">
                                </div>
                            </div>
                            <div class="right">
                                <div class="text-white p-5 rounded-3xl absolute width-full left-0 bottom-0"
                                    style="background: linear-gradient(-90deg, rgb(0, 214, 202) 0%, rgb(8, 158, 151) 100%);">
                                    <div class="pl-[170px]">
                                        <h3 class="text-2xl font-bold mb-4 ">
                                            Tera Harz TC-85
                                        </h3>
                                        <p class="leading-relaxed mb-0">
                                            The Tera Harz TC-85 is a photopolymer material designed to overcome the
                                            current
                                            limitations of sheet-type thermoformed aligners. It has biocompatible
                                            properties and
                                            makes
                                            orthodontic treatment more efficient.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </section>

                <section class="reasons bg-white py-16 px-6 md:px-12">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                            Why <span class="text-[#00D6CA]">Memora?</span>
                        </h2>
                        <p class="mt-3 text-gray-600">
                            Discover the unique benefits that make Memora aligners stand out.
                        </p>
                    </div>

                    <!-- Grid -->
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div v-for="(item, index) in features" :key="index"
                            class="flex items-start space-x-4 bg-gray-100 p-6 rounded-2xl shadow-sm transition">
                            <div class="flex-shrink-0">
                                <component :is="item.icon" class="w-8 h-8 text-[#00D6CA]" />
                            </div>
                            <div>
                                <p class="text-gray-700 font-medium leading-relaxed">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white px-6 md:px-12">
                    <!-- Header -->
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                            Conventional vs <span class="text-[#00D6CA]">Shape Memory Direct Aligners</span>
                        </h2>
                        <p class="mt-3 text-gray-600">
                            A clear comparison of how Memora’s shape memory technology outperforms traditional
                            thermoformed aligners.
                        </p>
                    </div>

                    <!-- Comparison Table -->
                    <div class="max-w-6xl mx-auto">
                        <!-- Table Header -->
                        <div class="grid grid-cols-2 text-center mb-8">
                            <h3 class="text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-3">
                                Conventional Thermoformed Aligners
                            </h3>
                            <h3 class="text-xl font-semibold text-[#00D6CA] border-b-2 border-[#00D6CA] pb-3">
                                Shape Memory Direct Aligners
                            </h3>
                        </div>

                        <!-- Rows -->
                        <div v-for="(item, index) in comparisons" :key="index"
                            class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <!-- Left -->
                            <div class="bg-gray-50 p-6 rounded-2xl shadow-md transition">
                                <img :src="item.left.image" alt="" class="w-full rounded-lg object-contain" />
                                <!-- <h4 class="font-bold text-gray-800 mb-2">{{ item.left.title }}</h4> -->
                                <p class="text-gray-600 leading-relaxed">{{ item.left.text }}</p>
                            </div>

                            <!-- Right -->
                            <div class="bg-[#00D6CA]/5 p-6 rounded-2xl shadow-md transition">
                                <img :src="item.right.image" alt="" class="w-full rounded-lg mb-4 object-contain" />
                                <!-- <h4 class="font-bold text-[#00D6CA] mb-2">{{ item.right.title }}</h4> -->
                                <p class="text-gray-700 leading-relaxed">{{ item.right.text }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white pt-16 px-6 md:px-12">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                            Instructions <span class="text-[#00D6CA]"></span>
                        </h2>
                        <p class="mt-3 text-gray-600 italic">
                            Adherence to the recommended instructions is crucial for achieving the desired treatment
                            outcomes.
                        </p>
                    </div>
                    <div class="max-w-6xl mx-auto pb-[50px]">

                        <!-- Instructions List -->
                        <div class="">
                            <div v-for="(item, i) in instructions" :key="i" class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <component :is="item.icon" class="w-7 h-7 text-[#00D6CA]" />
                                </div>
                                <p class="text-gray-700 leading-relaxed">
                                    {{ item.text }}
                                </p>
                            </div>
                        </div>

                        <!-- Remarks -->
                        <div class="mt-5 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-3xl shadow-sm">
                            <div class="flex items-center mb-2">
                                <AlertTriangle class="w-6 h-6 text-yellow-500 mr-2" />
                                <h3 class="text-lg font-semibold border-yellow-400">Notes</h3>
                            </div>
                            <ul class="list-disc list-inside  text-gray-700">
                                <li v-for="(remark, i) in remarks" :key="i">{{ remark }}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="bg-white px-6 md:px-12">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                            FAQs
                        </h2>
                    </div>
                    <div class="max-w-6xl mx-auto">
                        <!-- Accordion -->
                        <div class="space-y-4 pb-[50px]">
                            <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl shadow-sm">
                                <button @click="toggle(i)"
                                    class="w-full flex justify-between items-center px-5 py-4 text-left">
                                    <div class="flex items-center space-x-3">
                                        <HelpCircle class="w-5 h-5 text-[#00D6CA]" />
                                        <span class="font-medium text-gray-800">{{ faq.q }}</span>
                                    </div>
                                    <ChevronDown class="w-5 h-5 text-gray-500 transition-transform duration-300"
                                        :class="{ 'rotate-180': openIndex === i }" />
                                </button>

                                <transition enter-active-class="transition ease-out duration-300"
                                    enter-from-class="opacity-0 -translate-y-2"
                                    enter-to-class="opacity-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-200"
                                    leave-from-class="opacity-100 translate-y-0"
                                    leave-to-class="opacity-0 -translate-y-2">
                                    <div v-if="openIndex === i" class="px-5 pb-5 text-gray-600 leading-relaxed">
                                        <p class="text-[14px] mb-0">{{ faq.a }}</p>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="pb-10 max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <img src="/images/1.jpeg" alt="Aligner 1" class="rounded-3xl shadow-md transition" />
                        <img src="/images/2.jpeg" alt="Aligner 2" class="rounded-3xl shadow-md transition" />
                        <img src="/images/3.jpeg" alt="Aligner 3" class="rounded-3xl shadow-md transition" />
                        <img src="/images/4.jpeg" alt="Aligner 4" class="rounded-3xl shadow-md transition" />
                    </div>
                </section>
            </div>

            <footer>
                <div class="flex align-center justify-between">
                    <div class="left">
                        <span class="bold">memora</span>aligners
                    </div>

                    <div class="right">
                        &copy;
                        {{ new Date().getFullYear() }}
                        All rights reserved
                    </div>
                </div>
            </footer>
        </div>
    </div>


</template>
