import React from 'react';
import {
    MdMail,
    MdCall,
    MdLocationOn,
    MdSend,
} from 'react-icons/md';

// Import the custom Container component
import Container from '../../components/Container';
import { FaFacebook, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contacat = () => {
    return (
        // 1. Outermost <section> tag (applying flex-grow for layout, and page-level padding)
        <section id='contact' >

            {/* 2. Now using the actual <Container> component */}
            <Container className="">

                {/* All content from here onwards is inside the <Container> component */}

                {/* Contact Header Section */}
                <div className="text-center pb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-glow mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-base-content/80 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have a project in mind? We'd love to hear from you. Let's build something exceptional together.
                    </p>
                </div>

                {/* Main Contact Content - Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto place-items-center">
                    {/* Contact Information and Socials Column */}
                    <div className="lg:col-span-5 space-y-10 lg:space-y-12">
                        <div className="space-y-8">
                            {/* Email Contact */}
                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/30 border border-primary/30 rounded-xl flex items-center justify-center icon-blue-glow">
                                    <MdMail className="text-primary text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-base-content">Email Me</h3>
                                    <a href="mailto:rmahfujur782@gmail.com" className="text-base-content/80 mt-1 block hover:text-primary transition-colors">rmahfujur782@gmail.com</a>
                                </div>
                            </div>
                            {/* Call Contact */}
                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/30 border border-primary/30 rounded-xl flex items-center justify-center icon-blue-glow">
                                    <MdCall className="text-primary text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-base-content">Call Me</h3>
                                    <a href="tel:+8801882607880" className="text-base-content/80 mt-1 block hover:text-primary transition-colors">+88018826-07880</a>
                                </div>
                            </div>

                        </div>

                        {/* Social Media Links */}
                        <div className="pt-8 border-t border-base-300">
                            <h3 className="text-sm font-semibold text-base-content/60 uppercase tracking-widest mb-6">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a
                                    className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary transition-colors group transform hover:-translate-y-1"
                                    href="#"
                                    aria-label="Social Link 1"
                                >
                                    <FaGithub className="text-base-content/80 group-hover:text-base-content text-xl" />
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary transition-colors group transform hover:-translate-y-1"
                                    href="#"
                                    aria-label="Social Link 2"
                                >
                                    <FaLinkedin className="text-base-content/80 group-hover:text-base-content text-xl" />
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary transition-colors group transform hover:-translate-y-1"
                                    href="#"
                                    aria-label="Social Link 3"
                                >
                                    <FaFacebook className="text-base-content/80 group-hover:text-base-content text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-7">
                        <div className="bg-base-200/50 border border-base-300 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl">
                            <form action="#" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="label" htmlFor="fullName">
                                            <span className="label-text text-base-content/80">Full Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="Enter Your Name"
                                            className="input input-bordered input-primary bg-base-200 text-base-content w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label" htmlFor="emailAddress">
                                            <span className="label-text text-base-content/80">Email Address</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="emailAddress"
                                            placeholder="Enter Your Email"
                                            className="input input-bordered input-primary bg-base-200 text-base-content w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label" htmlFor="serviceType">
                                        <span className="label-text text-base-content/80">Service Type</span>
                                    </label>
                                    <select
                                        id="serviceType"
                                        className="select select-bordered select-primary bg-base-200 text-base-content w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        defaultValue=""
                                        required
                                    >
                                        <option disabled value="">Select a service</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="ui-ux-design">UI/UX Design</option>
                                        <option value="mobile-app-development">Mobile App Development</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label" htmlFor="message">
                                        <span className="label-text text-base-content/80">Message</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Tell us about your project or inquiry..."
                                        rows="5"
                                        className="textarea textarea-bordered textarea-primary bg-base-200 text-base-content w-full rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full py-4 rounded-xl shadow-[0_4px_20px_#3b82f64d] flex items-center justify-center space-x-2 text-lg transform hover:scale-105 transition-transform duration-200"
                                >
                                    <span>Send Message</span>
                                    <MdSend className="text-lg" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Contacat;