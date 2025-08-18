<script setup>
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
import { Head, Link } from '@inertiajs/vue3';
import $ from "jquery";

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
                        <h2>About Us</h2>
                        <p>
                            Based in Lebanon, Memora Aligners is a next-generation clear aligner solution designed
                            with
                            shape memory technology, to optimize teeth movement control and treatment
                            predictability.
                            Our aligners are directly 3D-printed with the advanced Graphy Tera Harz TC-85 resin,
                            using
                            shape
                            driven biomechanics.
                        </p>

                        <div class="flex align-bottom half">
                            <div class="left">
                                <div class="imageContainer">
                                    <img src="/images/bottle.jpeg" alt="">
                                </div>
                            </div>

                            <div class="right">
                                <p>
                                    The Tera Harz TC-85 is a photopolymer material designed to overcome the current
                                    limitations of
                                    sheet-type thermoformed aligners. It has biocompatible properties and makes
                                    orthodontic
                                    treatment more efficient.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <h2>Why Memora?</h2>
                    <ul>
                        <li>At oral temperature, the shape memory aligner <b>returns to its original shape</b> and
                            completely
                            grabs the tooth exerting a <b>consistent light force</b> to achieve and effective
                            movement
                        </li>
                        <li>The <b>uniform thickness</b> combined with the <b>stable mechanical properties</b>
                            (shape memory) ensure
                            more accurate tooth movement
                        </li>
                        <li><b>Biocompatible</b> material
                        </li>
                        <li><b>Fewer attachments</b> needed and a <b>shorter treatment</b> time
                        </li>
                        <li><b>Customized design and thickness</b> for better fit and more effective treatment
                        </li>
                        <li>Direct printing of aligners eliminates the need for models, reducing waste and
                            supporting
                            <b>eco-friendly production</b> practices
                        </li>
                        <li><b>Faster workflow</b> from designing to finished aligner
                        </li>
                        <li><b>Enhanced patient complience</b> by having the flexibility to drink hot beverages
                            (coffee, tea…)
                            while wearing the aligner, making the treatment experience more <b>patient friendly</b>
                        </li>
                        <li><b>Effortless insertion and removal</b> of aligners after warming them in hot water
                        </li>
                    </ul>
                </section>

                <section>
                    <div class="comparisonHeader">
                        <div class="flex align-center half">
                            <div class="left">
                                <h2 class="title">
                                    Conventional Thermoformed Aligners
                                </h2>
                            </div>
                            <div class="right">
                                <h2 class="title">
                                    Shape Memory Direct Aligners
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="comparisonBody">
                        <div class="flex align-center half">
                            <div class="left">
                                <div class="item">
                                    <div class="image">
                                        <img src="/images/A1.jpg" alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">A1</div>
                                        <p>
                                            The aligner is susceptible to deformation dure to insertion and removal
                                            and
                                            loses
                                            its mechanical properties over time making the treatment less effective
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="item">
                                    <div class="image">
                                        <img src="/images/A2.jpg" alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">A2</div>
                                        <p>
                                            Each time the aligners is deformed, the shape memory effect is activated
                                            at
                                            oral
                                            temperature regaining its original shape and precise adaptation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex align-center half">
                            <div class="left">
                                <div class="item">
                                    <div class="image">
                                        <img src="/images/B1.jpg" alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">B1</div>
                                        <p>
                                            Aligner not precisely fitted on the tooth due to undercut blockout
                                            necessary
                                            for
                                            thermoforming
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="item">
                                    <div class="image">
                                        <img src="/images/B2.jpg" alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">B2</div>
                                        <p>
                                            After returning to its original shape, the aligner fully covers the
                                            tooth
                                            and
                                            gingiva exerting fully controlled movements
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="flex align-center half">
                            <div class="left">
                                <div class="item">
                                    <div class="image">
                                        <img src="/images/C1.jpg" alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">C1</div>
                                        <p>
                                            Conventional aligners exert a pushing force
                                            Force driven system
                                            Apply force direct to the crown (attachment) which may lead to
                                            unintended
                                            root
                                            movement (uncontrolled tipping) and potential complications
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="right">
                                <div class="item">
                                    <div class="image">
                                        <img src="/images/C2.jpg" alt="">
                                    </div>
                                    <div class="text">
                                        <div class="title">C2</div>
                                        <p>
                                            Memora aligners exert a shape driven force
                                            Shape driven system
                                            Simultaneously move the crown and root to the ideal position while
                                            maintaining tooth
                                            axis, providing continuous light force, hence the fewer need for
                                            attachments
                                        </p>
                                    </div>
                                </div>

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
