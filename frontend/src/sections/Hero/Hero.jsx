import React, { useRef, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaArrowRight, FaCircleDot, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaX } from 'react-icons/fa6';
import gsap from 'gsap';

const MouseScrollIndicator = () => {
    const dotRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "linear" }
        });

        tl.fromTo(
            dotRef.current,
            { y: 0, opacity: 1 },
            { y: 15, opacity: 0, duration: 2 }
        );

        return () => tl.kill();
    }, []);

    return (
        <div
            className="
                w-6 h-10
                border-2 border-current
                rounded-xl
                relative
                overflow-hidden
                flex justify-center items-center
            "
        >
            <div
                ref={dotRef}
                className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-1 h-2
                    rounded-sm
                    bg-current
                "
                style={{ top: '6px' }}
            />
        </div>
    );
};

const Hero = () => {
    return (
        // ✅ FIX 1: top padding added for header space
        <main className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">

            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                ></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-bg opacity-30 pointer-events-none"></div>
            </div>

            {/* Main glass wrapper */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:max-w-4xl mx-auto text-center">
                {/* Secondary glow card */}
                <div className="absolute -inset-4 rounded-[2.5rem] glass-card opacity-60 blur-md z-[5] hidden md:block"></div>

                {/* Main Hero Card */}
                <div className="glass-card p-8 sm:p-12 md:p-20 rounded-[2.5rem] shadow-2xl relative overflow-hidden group z-10">
                    {/* Decorative circle */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-8 animate-bounce">
                        <FaCircleDot className="text-primary text-xs" />
                        Available for work
                    </div>

                    {/* Heading */}
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Hey, I'm{" "}
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                            Muhammad Mahfuj
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <HashLink
                            className="px-6 py-3 sm:px-8 sm:py-4 glass-card rounded-2xl font-bold tracking-wide hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-base hover:text-white sm:text-xl md:text-2xl border border-primary flex justify-center items-center gap-2"
                            to="#contact"
                        >
                            <span><FaDownload /></span> RESUME
                        </HashLink>
                        <HashLink
                            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-2xl font-bold tracking-wide shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-base sm:text-xl md:text-2xl"
                            to="#projects"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                VIEW PROJECTS
                                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </HashLink>


                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="bg-base-300 hidden lg:flex flex-col gap-8 text-3xl px-4 py-6 absolute left-0 top-1/2 -translate-y-1/2 backdrop-blur-3xl rounded-r-md hover:shadow-[1px_1px_200px_white] border-white/10 border">
                <FaLinkedin />
                <FaTwitter />
                <FaWhatsapp />
                <FaGithub />
            </div>

            {/* ✅ FIX 2: hide scroll on small screens */}
            <div className="hidden 2xl:flex absolute bottom-[5px] left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 flex-col items-center gap-2 opacity-60">
                <MouseScrollIndicator />
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            </div>
        </main>
    );
};

export default Hero;
