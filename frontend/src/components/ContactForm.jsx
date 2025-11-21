import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <a
                        href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=abhijit79"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-center items-center px-7 py-2 text-center no-underline text-white w-52 h-8 rounded-2xl bg-[#0A66C2] hover:bg-[#084d94] transition-colors shadow-lg hover:shadow-xl"
                        style={{ fontFamily: '"SF Pro Text", Helvetica, sans-serif' }}
                    >
                        Follow on LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
