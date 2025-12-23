import React, { useRef, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });



        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setStatus({ loading: false, success: true, error: null });
                    form.current.reset();
                },
                (error) => {
                    setStatus({ loading: false, success: false, error: error.text });
                },
            );
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
                <p className="text-zinc-400 mb-12">
                    Have a project in mind or just want to say hi? Fill out the form below.
                </p>

                {status.success && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl mb-6">
                        Message sent successfully! I'll get back to you soon.
                    </div>
                )}

                {status.error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6">
                        Failed to send message. Please try again later.
                    </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="from_email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <Button variant="secondary" className="w-full py-3" disabled={status.loading} type="submit">
                        {status.loading ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
