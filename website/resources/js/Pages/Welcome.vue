<script setup>
import { Thermometer, Ruler, ShieldCheck, Clock, PenTool, Recycle, Zap, Coffee, Hand, Brush, Droplets, Sparkles, RotateCcw, AlertTriangle, HelpCircle, ChevronDown } from "lucide-vue-next"
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ref, onMounted } from "vue";
import { Head, Link } from '@inertiajs/vue3';
import $ from "jquery";


const name = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);

const submitForm = async (e) => {
    e.preventDefault()
    loading.value = true

    try {
        const response = await axios.post('/contact', {
            name: name.value,
            email: email.value,
            message: message.value
        })

        if (response.data.success) {
            // reset form
            name.value = ''
            email.value = ''
            message.value = ''

            $('.formContact').hide();
            $('.formConfirmation').removeClass('hidden').addClass('flex');
        } else {
            alert('Failed: ' + response.data.message)
        }
    } catch (error) {
        console.error(error)
        alert('Something went wrong. Please try again.')
    } finally {
        loading.value = false
    }
}


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

    const myDiv = document.querySelector(".fixedcontent"); // or any div you want to change


    gsap.ticker.add(() => {
        const scrollY = smoother.scrollTop();
        const maxScroll = smoother.content().offsetHeight - window.innerHeight;
        const start = 0;
        const end = 400; // change this to how far you want the animation to last
        const start2 = 100;
        const end2 = 300;

        if (scrollY >= maxScroll - 220) {
            myDiv.style.zIndex = "1";
        } else {
            myDiv.style.zIndex = "0"; // reset to default
        }

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

        // gsap.set(".herospacer", {
        //     opacity: 0 + progress2,
        // });

        gsap.set(".content section", {
            opacity: 0 + progress2,
        });

        gsap.set(".fixedcontent", {
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
            <button @click="toggleMenu" class="md:hidden burgerMenuToggle left-[15px] md:left-[30px]" :class="{ 'open': isOpen }">

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
                                <p class="text-[14px] md:text-sm text-gray-700 font-medium leading-relaxed mb-0"
                                    v-html="item.text"></p>
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
            <div class="footerspacer"></div>
        </div>
    </div>

    <div class="fixedcontent fixed bottom-0 w-full opacity-0">
        <section class="contactus px-[40px] pt-12 mb-5">
            <div class="">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
                    <p class="mt-4 text-white mb-0">
                        Send us a message and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <!-- Contact Info -->
                    <div class="space-y-2">
                        <div class="flex align-center gap-4 mb-4">
                            <h3 class="mb-0 text-white">Reach us on</h3>
                            <div class="flex items-start space-x-4 ">
                                <a class="link transition hover:text-gray-500"
                                    href="https://wa.me/96181909548?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Memora"
                                    target="_blank">
                                    <svg height="56.693px" id="Layer_1" fill="white"
                                        class="h-8 w-8 transition hover:fill-gray-500"
                                        style="enable-background:new 0 0 56.693 56.693;" version="1.1"
                                        viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                                        <g>
                                            <path class="st0"
                                                d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z" />
                                            <path class="st0"
                                                d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z" />
                                        </g>
                                    </svg>
                                </a>
                                <a class="link transition hover:text-gray-500"
                                    href="https://www.instagram.com/memoraaligners/" target="_blank">

                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="white"
                                        class="h-8 w-8 transition hover:fill-gray-500 "
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7   c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                                            <circle cx="41.5" cy="16.4" r="2.9" />
                                            <path
                                                d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9   h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3   s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6   c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-white">Email</h3>
                                <p class="text-white opacity-[0.9] mb-0"></p>
                                <a class="link transition hover:text-gray-500"
                                    href="mailto:info@memoraaligners.com">info@memoraaligners.com</a>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 10l1.664 3.328A2 2 0 007 15h10a2 2 0 001.336-.672L21 10M12 3v4m-6 4h12" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-white">Phone</h3>
                                <a class="link transition hover:text-gray-500" href="tel:+961 81 909 548">+961 81 909
                                    548</a>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="text-white">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="white"
                                    class="h-6 w-6">
                                    <title />
                                    <g data-name="1" id="_1">
                                        <path
                                            d="M257,450.17a15,15,0,0,1-7.32-1.91A282.08,282.08,0,0,1,105,201.8q0-3.08.06-6.14c1-45.48,17.93-83.78,49-110.75C181.54,61.11,218.09,48,257,48s75.45,13.11,102.9,36.91c31.1,27,48.06,65.27,49,110.75h0c0,2,.07,4.09.07,6.14a281.8,281.8,0,0,1-40,144.87A283.7,283.7,0,0,1,264.32,448.26,15,15,0,0,1,257,450.17ZM257,78c-31.69,0-61.26,10.5-83.25,29.58-24.53,21.26-37.91,51.94-38.69,88.72,0,1.82-.06,3.66-.06,5.5a252.06,252.06,0,0,0,122,216,253.66,253.66,0,0,0,86.28-86.58A251.83,251.83,0,0,0,379,201.8c0-1.84,0-3.68-.06-5.5-.79-36.78-14.17-67.46-38.69-88.72C318.25,88.5,288.69,78,257,78Z" />
                                        <path
                                            d="M257.39,296.6a94.32,94.32,0,1,1,94.32-94.32A94.42,94.42,0,0,1,257.39,296.6Zm0-158.63a64.32,64.32,0,1,0,64.32,64.31A64.39,64.39,0,0,0,257.39,138Z" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-white">Address</h3>
                                <p class="text-white opacity-[0.9] mb-0">Hadath Centre, Hadath, Lebanon</p>
                                <a href="https://www.google.com/maps/place/Hadath+Centre/@33.836546,35.5278024,86m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a52668475f34635:0xf6e6d01652d6197b!2sOrthoDent!8m2!3d13.0750295!4d80.2249087!16s%2Fg%2F11cn9kg2jc!3m5!1s0x151f19cf11db9955:0xcd9622cc61d45a8d!8m2!3d33.8366239!4d35.5279123!16s%2Fg%2F11h7q4tm31?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank" class="link transition hover:text-gray-500">Get directions</a>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <form @submit="submitForm" class="formContact w-full max-w-md">
                        <div class="flex justify-between gap-2 mb-2">
                            <div class="flex-1">
                                <label class="block text-sm text-white font-semibold mb-1">Name</label>
                                <input type="text" placeholder="Your Name" v-model="name"
                                    class="w-full border-none bg-white rounded-lg px-4 py-2 shadow-none outline-none text-gray-500" />
                            </div>

                            <div class="flex-1">
                                <label class="block text-sm text-white font-semibold mb-1">Email</label>
                                <input type="email" placeholder="you@example.com" v-model="email"
                                    class="w-full border-none bg-white rounded-lg px-4 py-2 shadow-none outline-none text-gray-500" />
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="block text-sm text-white font-semibold mb-1">Message</label>
                            <textarea placeholder="Your Message" rows="2" v-model="message"
                                class="block w-full !border-none bg-white rounded-lg px-4 py-2 !ring-0 !shadow-none outline-none text-gray-500"></textarea>
                        </div>

                        <button type="submit" :disabled="loading"
                            class="inline-flex items-center border border-transparent bg-white px-4 py-3 text-[#00D6CA] text-xs font-semibold uppercase tracking-widest transition duration-300 ease-in-out hover:-translate-y-[2px] w-full justify-center rounded-xl hover:bg-gray-500 hover:text-white">
                            <template v-if="loading">
                                <svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                                <span>Sending...</span>
                            </template>
                            <template v-else>
                                Send
                            </template>
                        </button>
                    </form>

                    <div class="formConfirmation align-center justify-center gap-5 flex-col hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-white mb-0">Your message is sent successfully!</p>
                    </div>
                </div>
            </div>
        </section>

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

</template>
