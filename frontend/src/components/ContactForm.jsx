import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
                        Have a question or want to work together? Drop me a message!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`flex items-center px-8 py-3 rounded-full font-medium text-white transition-all shadow-lg ${status === 'submitting'
                                        ? 'bg-slate-400 cursor-not-allowed'
                                        : 'bg-accent hover:bg-sky-500 hover:shadow-accent/50'
                                    }`}
                            >
                                {status === 'submitting' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} className="mr-2" /> Sent Successfully
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle size={20} className="mr-2" /> Failed to Send
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="mr-2" /> Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
