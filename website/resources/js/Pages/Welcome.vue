<script setup>
import { Thermometer, Ruler, ShieldCheck, Clock, PenTool, Recycle, Zap, Coffee, Hand, Brush, Droplets, Sparkles, RotateCcw, AlertTriangle, HelpCircle, ChevronDown } from "lucide-vue-next"
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ref, onMounted } from "vue";
import { Head, Link } from '@inertiajs/vue3';
import $ from "jquery";

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const features = [
    { text: "At oral temperature, the shape memory aligner <b>returns to its original shape</b> and grabs the tooth with <b>consistent light force</b> for effective movement.", icon: Thermometer },
    { text: "<b>Uniform thickness</b> and <b>stable mechanical properties</b> ensure more accurate tooth movement.", icon: Ruler },
    { text: "Made from <b>biocompatible</b> material for safe use.", icon: ShieldCheck },
    { text: "<b>Fewer attachments</b> needed and <b>shorter treatment time</b>.", icon: Clock },
    { text: "<b>Customized design and thickness</b> for a better fit and more effective treatment.", icon: PenTool },
    { text: "Direct printing eliminates the need for models, reducing waste and supporting <b>eco-friendly practices</b>.", icon: Recycle },
    { text: "<b>Faster workflow</b> from designing to finished aligner.", icon: Zap },
    { text: "<b>Enhanced compliance</b>: drink hot beverages while wearing the aligner for a patient-friendly experience.", icon: Coffee },
    { text: "<b>Effortless insertion and removal</b> after warming aligners in hot water.", icon: Hand },
]

const comparisons = [
    {
        left: {
            title: null,
            image: "/images/A1.jpg",
            text: "The aligner is susceptible to deformation during insertion and removal and loses its mechanical properties over time, making treatment less effective."
        },
        right: {
            title: null,
            image: "/images/A2.jpg",
            text: "Each time the aligner is deformed, the shape memory effect is activated at oral temperature, regaining its original shape and precise adaptation."
        }
    },
    {
        left: {
            title: null,
            image: "/images/B1.jpg",
            text: "Aligner not precisely fitted on the tooth due to undercut blockout necessary for thermoforming."
        },
        right: {
            title: null,
            image: "/images/B2.jpg",
            text: "After returning to its original shape, the aligner fully covers the tooth and gingiva, exerting fully controlled movements."
        }
    },
    {
        left: {
            title: null,
            image: "/images/C1.jpg",
            text: "Conventional aligners exert a pushing force (force-driven system). They apply force directly to the crown (attachment), which may lead to uncontrolled tipping and potential complications."
        },
        right: {
            title: null,
            image: "/images/C2.jpg",
            text: "Memora aligners exert a shape-driven force (shape-driven system). They simultaneously move the crown and root to the ideal position while maintaining tooth axis, providing continuous light force and reducing the need for attachments."
        }
    },
    {
        left: {
            title: "Effectiveness",
            image: null,
            text: "Uneven thickness of the aligner due to thermoforming"
        },
        right: {
            title: "Effectiveness",
            image: null,
            text: "Uniform precise thickness of the aligner designed by software"
        }
    },
    {
        left: {
            title: "Faster workflow",
            image: "/images/D1.jpg",
            text: "Multiple steps of production increase process duration"
        },
        right: {
            title: "Faster workflow",
            image: "/images/D2.jpg",
            text: "Fewer steps needed, enabling faster workflow"
        }
    },
    {
        left: {
            title: "Cleaning and Sanitation",
            image: null,
            text: "Conventional aligners cannot be thermally sanitized to avoid deformation and loss of their mechanical properties"
        },
        right: {
            title: "Cleaning and Sanitation",
            image: null,
            text: "It is advised to submerge Shape memory aligners in warm water to stay sanitized while maintaining its function"
        }
    },
    {
        left: {
            title: "Customization of the aligner",
            image: null,
            text: "Limited customization of the aligner to fit treatment goals"
        },
        right: {
            title: "Customization of the aligner",
            image: null,
            text: "Ability to customize and increase thickness at specific places (pressure points, hooks…)"
        }
    },
    {
        left: {
            title: "Attachments",
            image: null,
            text: "Attachments are essential to perform a pushing force for all types of movements"
        },
        right: {
            title: "Attachments",
            image: null,
            text: "Less attachments are needed due to the shape driven biomechanics "
        }
    },
    {
        left: {
            title: "Ecologically",
            image: null,
            text: "All the resin used to 3d print the dental models actually goes to waste"
        },
        right: {
            title: "Ecologically",
            image: null,
            text: "No models needed means no waste, presenting a more eco-friendly solution"
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

const issues = [
    "Teeth crowding",
    "Teeth spacing",
    "Midline shift",
    "Crossbite",
    "Open bite",
    "Deep bite",
    "Overjet bite",
]

const scrollTo = (id) => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: `#${id}`, offsetY: 60 }, // offset if you have a header
        ease: "power2.out"
    });
    isOpen.value = false; // close burger after clicking
};
const openIndex = ref(null)

const toggle = (i) => {
    openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
    {
        q: "At what age is a person eligible to use memora aligners?",
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
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

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
        <Link :href="route('login')" class="hidden md:block bannerBtn">
        Are you a dentist?
        </Link>

        <button @click="toggleMenu" class="burgerMenuToggle left-[15px] md:left-[30px]" :class="{ 'open': isOpen }">

        </button>

        <!-- Floating absolute menu -->
        <div v-if="isOpen" class="burgerMenu border border-gray-200 rounded-xl shadow-sm">
            <button @click="toggleMenu" class="burgerMenuToggle left-[15px] md:left-[30px]" :class="{ 'open': isOpen }">

            </button>
            <ul class="min-w-[170px]">
                <!-- <li>
                    <a href="/">
                        Home
                    </a>
                </li> -->
                <li>
                    <a class="block px-4 py-2" @click="scrollTo('about')">About memora</a>
                </li>
                <li>
                    <a class="block px-4 py-2" @click="scrollTo('whymemora')">Why memora?</a>
                </li>
                <li>
                    <a class="block px-4 py-2" @click="scrollTo('compare')">Conventional vs Shape Memory</a>
                </li>
                <li>
                    <a class="block px-4 py-2" @click="scrollTo('treatment')">Is this treatment right for you?</a>
                </li>
                <li>
                    <a class="block px-4 py-2" @click="scrollTo('instruction')">Instructions</a>
                </li>
                <li>
                    <a class="block px-4 py-2" @click="scrollTo('faq')">FAQ</a>
                </li>
                <li class="md:hidden p-2">
                    <Link :href="route('login')" class="block px-4 py-2 bg-[#00D6CA] text-white rounded-lg text-center">
                    Are you a dentist?
                    </Link>
                </li>
            </ul>
        </div>
    </div>

    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div class="herospacer"></div>
            <div class="content">
                <section id="about" class="pt-12">
                    <div class="centerCol">
                        <div class="max-w-6xl mx-auto text-center mb-12">
                            <h2 class="text-3xl md:text-4xl text-gray-500">
                                About <span class="text-[#00D6CA]">memora</span>
                            </h2>
                            <p class="mt-3 text-gray-600">
                                Based in Lebanon, memora Aligners is a next-generation clear aligner solution designed
                                with
                                shape memory technology, to optimize teeth movement control and treatment
                                predictability.
                                Our aligners are directly 3D-printed with the advanced Graphy Tera Harz TC-85 resin,
                                using
                                shape
                                driven biomechanics.
                            </p>
                        </div>

                        <div class="flex flex-col md:flex-row align-stretch relative">
                            <div class="left relative z-10">
                                <div class="w-[75px] h-[200px] md:w-[150px] md:h-[250px] mx-auto">
                                    <img src="/images/bottle.png" class="h-full object-cover" alt="bottle">
                                </div>
                            </div>
                            <div class="right">
                                <div class="relative -mt-[100px] md:absolute md:left-0 md:bottom-0 text-white p-5 rounded-3xl width-full"
                                    style="background: linear-gradient(-90deg, rgb(0, 214, 202) 0%, rgb(8, 158, 151) 100%);">
                                    <div class="pt-[100px] md:pt-0 pl-0 md:pl-[120px]">
                                        <h3 class="text-2xl font-bold mb-4 ">
                                            Tera Harz TC-85
                                        </h3>
                                        <p class="text-[14px] md:text-sm leading-relaxed mb-0">
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

                <section id="whymemora" class="reasons bg-white py-0 md:py-12 px-0 mb-0 md:px-12">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl text-gray-500">
                            Why <span class="text-[#00D6CA]">memora?</span>
                        </h2>
                        <p class="mt-3 text-gray-600">
                            Discover the unique benefits that make memora aligners stand out.
                        </p>
                    </div>

                    <!-- Grid -->
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div v-for="(item, index) in features" :key="index"
                            class="flex items-start space-x-4 bg-gray-100 p-2 md:p-6 rounded-2xl shadow-sm transition">
                            <div class="flex-shrink-0">
                                <component :is="item.icon" class="w-8 h-8 text-[#00D6CA]" />
                            </div>
                            <div>
                                <p class="text-[14px] md:text-sm text-gray-700 font-medium leading-relaxed mb-0" v-html="item.text"></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="compare" class="bg-white pt-12 px-0 md:px-12">
                    <!-- Header -->
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl text-gray-500">
                            Conventional vs <span class="text-[#00D6CA]">Shape Memory Direct Aligners</span>
                        </h2>
                        <p class="mt-3 text-gray-600">
                            A clear comparison of how memora's shape memory technology outperforms traditional
                            thermoformed aligners.
                        </p>
                    </div>

                    <!-- Comparison Table -->
                    <div class="max-w-6xl mx-auto">
                        <!-- Table Header -->
                        <div class="flex text-center align-stretch mb-[20px] gap-8">
                            <h3
                                class="py-2 flex align-center justify-center w-1/2 rounded-2xl text-[16px] leading-[20px] md:text-xl font-semibold text-gray-700 bg-gray-200">
                                Conventional Thermoformed Aligners
                            </h3>
                            <h3
                                class="py-2 flex align-center justify-center w-1/2 rounded-2xl text-[16px] leading-[20px] md:text-xl font-semibold text-white bg-[#00D6CA]">
                                Shape Memory Direct Aligners
                            </h3>
                        </div>

                        <!-- Rows -->
                        <div v-for="(item, index) in comparisons" :key="index"
                            class="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[20px] bubbles">
                            <!-- Left -->
                            <div class="flex justify-start leftBubble">
                                <div class="w-[80%] md:w-full bg-gray-200 p-2 md:p-6 rounded-2xl shadow-md transition">
                                    <img :src="item.left.image" alt="" class="w-full rounded-lg mb-4 object-contain"
                                        v-if="item.left.image" />
                                    <h4 class="font-bold text-gray-800 mb-2" v-if="item.left.title">{{ item.left.title
                                        }}
                                    </h4>
                                    <p class="text-gray-600 leading-relaxed text-[14px] md:text-sm mb-0">{{
                                        item.left.text
                                        }}</p>
                                </div>
                            </div>

                            <!-- Right -->
                            <div class="flex justify-end rightBubble">
                                <div class="w-[80%] md:w-full bg-[#00D6CA] p-2 md:p-6 rounded-2xl shadow-md transition">
                                    <img :src="item.right.image" alt="" class="w-full rounded-lg mb-4 object-contain"
                                        v-if="item.right.image" />
                                    <h4 class="font-bold text-white mb-2" v-if="item.right.title">{{ item.right.title }}
                                    </h4>
                                    <p class="text-gray-700 leading-relaxed text-[14px] md:text-sm mb-0">{{
                                        item.right.text
                                        }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="treatment" class="pt-12 mb-0">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl text-gray-500">
                            Is this treatment right <span class="text-[#00D6CA]">for you</span>?
                        </h2>
                        <p class="mt-3 text-gray-600">
                            Our solution is designed for people with the following smile concerns
                            and who can follow the treatment instructions.
                        </p>
                    </div>
                    <div class="flex max-w-6xl mx-auto align-center justify-between">
                        <div class="w-[60%] md:w-[40%]">
                            <!-- Smile Issues -->
                            <div class="bg-white">
                                <!-- <h3 class="text-xl font-semibold text-gray-800 mb-4">
                                Common smile concerns
                            </h3> -->
                                <ul class="list-none">
                                    <li v-for="(item, idx) in issues" :key="idx"
                                        class="flex items-start gap-3 text-gray-700 mb-[20px] last:mb-0">
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-[40%] md:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-3">
                            <img src="/images/r1.jpeg" alt="Reason 1" class="rounded-3xl shadow-md transition" />
                            <img src="/images/r2.jpeg" alt="Reason 2" class="rounded-3xl shadow-md transition" />
                            <img src="/images/r3.jpeg" alt="Reason 3" class="rounded-3xl shadow-md transition" />
                            <img src="/images/r4.jpeg" alt="Reason 4" class="rounded-3xl shadow-md transition" />
                            <img src="/images/r5.jpeg" alt="Reason 5" class="rounded-3xl shadow-md transition" />
                            <img src="/images/r6.jpeg" alt="Reason 6" class="rounded-3xl shadow-md transition" />

                        </div>
                    </div>
                </section>

                <section id="instruction" class="bg-white pt-12 px-0 md:px-12 mb-0">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl text-gray-500">
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

                        <div class="max-w-6xl grid grid-cols-4 gap-2 md:gap-6">
                            <img src="/images/1.jpeg" alt="Aligner 1"
                                class="rounded-lg md:rounded-2xl shadow-md transition" />
                            <img src="/images/2.jpeg" alt="Aligner 2"
                                class="rounded-lg md:rounded-2xl shadow-md transition" />
                            <img src="/images/3.jpeg" alt="Aligner 3"
                                class="rounded-lg md:rounded-2xl shadow-md transition" />
                            <img src="/images/4.jpeg" alt="Aligner 4"
                                class="rounded-lg md:rounded-2xl shadow-md transition" />
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

                <section id="faq" class="bg-white pt-12 px-0 md:px-12">
                    <div class="max-w-6xl mx-auto text-center mb-12">
                        <h2 class="text-3xl md:text-4xl text-gray-500">
                            FAQs
                        </h2>
                    </div>
                    <div class="max-w-6xl mx-auto">
                        <!-- Accordion -->
                        <div class="space-y-4 pb-[50px]">
                            <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl shadow-sm">
                                <button @click="toggle(i)"
                                    class="w-full flex justify-between items-start px-5 py-4 text-left">
                                    <div class="flex items-start space-x-3">
                                        <HelpCircle class="w-8 h-8 md:w-5 md:h-5 text-[#00D6CA]" />
                                        <span class="font-medium text-gray-800">{{ faq.q }}</span>
                                    </div>
                                    <ChevronDown
                                        class="w-8 h-8 md:w-5 md:h-5 text-gray-500 transition-transform duration-300"
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
