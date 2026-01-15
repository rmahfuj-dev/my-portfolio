// components/AboutSection.jsx
import React, { useEffect, useRef } from 'react';
import AboutCard from './AboutCard'; // Adjust path as needed
import Container from '../../components/Container';
import { FaCode, FaGamepad, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'; // Icons from image
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null); // Ref for the entire left text column
  const rightColWrapperRef = useRef(null); // Ref for the right column wrapper including border
  // const pulseBorderRef = useRef(null); // REMOVE THIS REF
  const badgeRef = useRef(null); // Ref for the overlapping badge
  const aboutCardRef = useRef(null); // CORRECTLY DEFINED: Ref for the AboutCard itself

  useEffect(() => {
    // REMOVE THE pulseTl GSAP ANIMATION ENTIRELY
    // No more pulsing border logic needed.

    // GSAP for section entry animations
    const sectionEntryTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100", // Start animation when top of section hits center
        toggleActions: "play none none reverse", // Play on entry, reverse on exit
      }
    });

    // Animate the entire left column (div)
    sectionEntryTl.fromTo(leftColRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate the right column wrapper (now with shadow/hover effects)
    sectionEntryTl.fromTo(rightColWrapperRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5" // Start slightly before left column finishes
    );

    // Animate the badge (slight delay for overlapping effect)
    sectionEntryTl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4" // Start 0.4s after right column starts
    );

    return () => {
      // pulseTl.kill(); // REMOVE THIS
      sectionEntryTl.kill();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen py-20 px-4 flex items-center justify-center overflow-hidden bg-base-200">
      {/* NO BACKGROUND BLOBS HERE - image doesn't show them */}

      <Container className="relative z-10 text-base-content py-10 lg:py-16  w-full grid place-items-center justify-center items-center ">
        {/* Main Card Wrapper (equivalent to the large rounded rectangle in the image) */}
        {/* bg-base-200 provides a solid, theme-friendly background that contrasts with bg-base-300 */}
        <div className="bg-base-200 p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch  mx-auto">

          {/* Left Column - Text and Info Cards */}
          <div ref={leftColRef} className="lg:w-1/2 text-left opacity-0 ">
            <p className="text-primary text-sm font-bold uppercase mb-2">WHO I AM</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-base-content mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-6 rounded-full"></div> {/* Green underline */}

            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-6 text-base-content">
              Passionate Full-Stack Developer
            </h3>

            <p className="text-base sm:text-lg leading-relaxed mb-6 text-base-content/80">
              Hello! I'm Muhammad Mahfuj, a dedicated Full-Stack Developer focused on crafting dynamic and scalable web applications. My journey into coding started with a curiosity for how things work, quickly turning into a passion for building robust and elegant digital solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-12 text-base-content/80">
              I am constantly learning and evolving, aiming to create seamless user experiences and efficient backend architectures. When I'm not coding, I enjoy exploring new tech trends, indulging in competitive gaming, and contributing to open-source communities.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base-content text-sm md:text-base">
              {/* Interest */}
              <div className="flex items-center gap-3 bg-base-100/70 backdrop-blur-sm border border-base-content/10 p-4 rounded-xl shadow-md">
                <FaCode className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-base-content/70">INTEREST</p>
                  <p className="font-bold text-base-content">Web Development</p>
                </div>
              </div>
              {/* Hobby */}
              <div className="flex items-center gap-3 bg-base-100/70 backdrop-blur-sm border border-base-content/10 p-4 rounded-xl shadow-md">
                <FaGamepad className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-base-content/70">HOBBY</p>
                  <p className="font-bold text-base-content">Gaming</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3 bg-base-100/70 backdrop-blur-sm border border-base-content/10 p-4 rounded-xl shadow-md">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-base-content/70">LOCATION</p>
                  <p className="font-bold text-base-content">Dhaka, Bangladesh</p>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex items-center gap-3 bg-base-100/70 backdrop-blur-sm border border-base-content/10 p-4 rounded-xl shadow-md">
                <FaWhatsapp className="text-primary text-2xl" />
                <div>
                  <p className="font-semibold text-base-content/70">WHATSAPP</p>
                  <p className="font-bold text-base-content">+880 17XX XXX XXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - AboutCard Component and Overlays */}
          {/* NEW STYLING:
              - `rounded-2xl`: Matches the outer container's border radius.
              - `shadow-lg`: A subtle default shadow.
              - `hover:shadow-2xl`: A larger shadow on hover.
              - `hover:scale-[1.01]`: A very subtle lift on hover for interactivity.
              - `transition-all duration-300 ease-in-out`: Smooth animation for hover effects.
              - `bg-base-100`: Added a background to ensure the shadow has something to 'cast' from, and for visual consistency.
          */}
          <div
            ref={rightColWrapperRef}
            className="lg:w-1/2 relative min-h-[450px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] flex justify-center items-center opacity-0
 transition-all duration-300 ease-in-out "
          >
            {/* REMOVED: Green Border Effect (pulseBorderRef div) */}

            {/* AboutCard */}
            <div ref={aboutCardRef} className="relative w-full h-full p-2 sm:p-3 z-[2] flex justify-center items-center">
              <AboutCard />
            </div>

            {/* Overlapping Badge - UNCOMMENTED */}
            {/* <div ref={badgeRef} className="absolute bottom-6 sm:bottom-8 z-[3] opacity-0">
              <div className="flex items-center bg-base-100/70 backdrop-blur-sm rounded-full p-1 shadow-xl border border-base-content/10">
                <span className="bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full uppercase mr-2">
                  FULL-STACK DEV
                </span>
                <span className="text-base-content text-xs sm:text-sm font-medium pr-3">
                  Available for Opportunities
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;