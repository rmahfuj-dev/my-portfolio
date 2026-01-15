// components/AboutCard.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap'; // Make sure gsap is imported

const AboutCard = ({
    name = 'Muhammad Mahfuj',
    skills = ['React', 'Next.js', 'Node.js', 'MongoDB'],
    focuses = ['Full-Stack Development', 'Scalable APIs', 'Responsive UI/UX'],
    learning = 'GraphQL & Serverless'
}) => {
    const numLines = 20; 
    const lineNumbers = Array.from({ length: numLines }, (_, i) => i + 1);

    const cursorRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(cursorRef.current, { opacity: 0, duration: 0.5, ease: "steps(1)" })
          .to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "steps(1)" });
        
        return () => tl.kill();
    }, []);

    return (
        <div className="relative w-full rounded-box shadow-xl overflow-hidden 
                    bg-base-100/60 backdrop-blur-md border border-base-content/10 flex flex-col"> {/* Removed mx-auto here */}

            {/* Header Bar */}
            <div className="flex items-center justify-between p-3 rounded-t-box bg-base-300/80 border-b border-base-content/10 flex-shrink-0">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <span className="font-mono text-sm text-base-content opacity-80">portfolio.js</span>
            </div>

            {/* Code Area with Line Numbers */}
            <div className="flex flex-grow bg-base-200/80 text-base-content font-mono text-xs sm:text-sm leading-relaxed">
                {/* Line Numbers Column */}
                <div className="w-10 sm:w-12 bg-base-300/50 text-right pr-2 sm:pr-3 py-4 text-base-content/40 select-none flex-shrink-0">
                    {lineNumbers.map(num => <div key={num}>{num}</div>)}
                </div>

                {/* Actual Code Content */}
                <div className="flex-1 p-4 sm:p-6 text-left relative overflow-auto">
                    <p className="text-base-content/60">// Muhammad Mahfuj: Full-Stack Developer Profile</p>
                    <p className="text-base-content/60">// Crafting responsive, scalable, and delightful web experiences.</p>
                    <p></p>
                    <p><span className="text-secondary">const</span> <span className="text-accent">developerProfile</span> <span className="text-base-content/90">=</span> <span className="text-base-content/90">&#123;</span></p>
                    <p className="ml-4"><span className="text-warning">name</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">{name}</span>'</span><span className="text-base-content/90">,</span></p>
                    <p className="ml-4"><span className="text-warning">role</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">Full-Stack Engineer</span>'</span><span className="text-base-content/90">,</span></p>
                    <p className="ml-4"><span className="text-warning">currentStack</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">[{skills.join(', ')}]</span>'</span><span className="text-base-content/90">,</span></p> {/* Combined skills into single string for brevity */}
                    <p className="ml-4"><span className="text-warning">specialties</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">[{focuses.join(', ')}]</span>'</span><span className="text-base-content/90">,</span></p> {/* Combined focuses into single string for brevity */}
                    <p className="ml-4"><span className="text-warning">passion</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">Building innovative web applications that solve real-world problems</span>'</span><span className="text-base-content/90">,</span></p>
                    <p className="ml-4"><span className="text-warning">learningNext</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">{learning}</span>'</span><span className="text-base-content/90">,</span></p>
                    <p className="ml-4"><span className="text-warning">status</span><span className="text-base-content/90">:</span> <span className="text-success">'<span className="text-primary">Open to exciting collaborations!</span>'</span></p>
                    <p><span className="text-base-content/90">&#125;;</span></p>
                    <p></p>
                    <p className="text-base-content/60">// Let's connect and create something impactful.</p>
                    <span ref={cursorRef}>_</span>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;