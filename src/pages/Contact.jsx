import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';

const Contact = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
                <p className="text-zinc-400 mb-12">
                    Have a project in mind or just want to say hi? Fill out the form below.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <Button variant="secondary" className="w-full py-3">
                        Send Message
                    </Button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
