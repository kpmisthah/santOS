import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would send to backend
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-north-pole-950 text-white py-20 px-6 font-sans">
                <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                    <div className="mb-8 animate-bounce-slow">
                        <span className="text-9xl drop-shadow-2xl">📬</span>
                    </div>

                    <h1 className="text-6xl font-display font-bold mb-6 text-gradient-gold drop-shadow-sm">
                        Message Sent!
                    </h1>

                    <p className="text-2xl text-frost-100 mb-8 font-light">
                        Thank you for reaching out! Santa and his team will get back to you soon! 🎅
                    </p>

                    <div className="glass-card p-8 mb-12 border-stardust-500/20">
                        <p className="text-frost-200/60 leading-relaxed">
                            We typically respond within 24 hours (North Pole time). During the busy Christmas season,
                            it might take a little longer, but we promise to get back to you!
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="btn-primary px-10 py-5 text-xl shadow-glow-sm hover:scale-105 transform inline-block"
                    >
                        🏠 Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-north-pole-950 text-white py-20 px-6 font-sans">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-festive-red-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-stardust-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-stardust-400 hover:text-frost-100 transition-colors mb-8 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="font-medium tracking-wide uppercase text-sm">Back to Home</span>
                    </Link>
                    <div className="mb-6">
                        <span className="text-7xl animate-bounce-slow inline-block drop-shadow-xl">📧</span>
                    </div>
                    <h1 className="text-6xl font-display font-bold mb-4 text-gradient-gold drop-shadow-sm">
                        Contact Santa
                    </h1>
                    <p className="text-xl text-frost-200/60 max-w-2xl mx-auto font-light">
                        Have a question or need help? Send us a message and we'll get back to you! 🎄
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="glass-card p-10 border-stardust-500/20 shadow-neon-gold/10">
                            <h2 className="text-3xl font-display font-bold mb-8 text-stardust-100 border-b border-white/5 pb-4">Send Us a Message</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-stardust-400 mb-2 uppercase tracking-wide">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g., Emma Johnson"
                                        required
                                        className="glass-input w-full px-4 py-3 rounded-xl focus:shadow-neon-gold transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-stardust-400 mb-2 uppercase tracking-wide">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="e.g., you@example.com"
                                        required
                                        className="glass-input w-full px-4 py-3 rounded-xl focus:shadow-neon-gold transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-stardust-400 mb-2 uppercase tracking-wide">
                                        Subject *
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                        className="glass-input w-full px-4 py-3 rounded-xl focus:shadow-neon-gold transition-all cursor-pointer"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="wishlist">Wishlist Question</option>
                                        <option value="tracking">Tracking Issue</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-stardust-400 mb-2 uppercase tracking-wide">
                                        Message *
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us how we can help you..."
                                        rows={6}
                                        required
                                        className="glass-input w-full px-4 py-3 rounded-xl focus:shadow-neon-gold transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 btn-primary text-xl shadow-glow-sm hover:scale-[1.02] transform transition-all duration-300"
                                >
                                    📨 Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Direct Contact */}
                        <div className="glass-card p-8 border-festive-red-500/20 hover:border-festive-red-500/40 transition-colors">
                            <h3 className="text-2xl font-display font-bold mb-6 text-festive-red-100">Direct Contact</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <span className="text-3xl group-hover:scale-110 transition-transform">📧</span>
                                    <div>
                                        <p className="text-xs font-bold text-stardust-400 uppercase tracking-wide mb-1">Email</p>
                                        <a href="mailto:santa@northpole.com" className="text-frost-100 hover:text-white transition-colors">
                                            santa@northpole.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <span className="text-3xl group-hover:scale-110 transition-transform">📞</span>
                                    <div>
                                        <p className="text-xs font-bold text-stardust-400 uppercase tracking-wide mb-1">Phone</p>
                                        <a href="tel:+1-800-SANTA-OS" className="text-frost-100 hover:text-white transition-colors">
                                            +1-800-SANTA-OS
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <span className="text-3xl group-hover:scale-110 transition-transform">🏠</span>
                                    <div>
                                        <p className="text-xs font-bold text-stardust-400 uppercase tracking-wide mb-1">Address</p>
                                        <p className="text-frost-200/60 text-sm leading-relaxed">
                                            North Pole Headquarters<br />
                                            Arctic Circle, 99705
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="glass-card p-8 border-stardust-500/20 hover:border-stardust-500/40 transition-colors">
                            <h3 className="text-2xl font-display font-bold mb-6 text-stardust-100">Office Hours</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-frost-200/60">Monday - Friday</span>
                                    <span className="text-frost-100 font-bold">9 AM - 6 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-frost-200/60">Saturday</span>
                                    <span className="text-frost-100 font-bold">10 AM - 4 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-frost-200/60">Sunday</span>
                                    <span className="text-festive-red-400 font-bold">Closed</span>
                                </div>
                                <div className="pt-4 mt-2">
                                    <p className="text-stardust-400 text-xs uppercase tracking-wider font-bold">
                                        * North Pole Time (NPT)<br />
                                        * 24/7 during December
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Link */}
                        <div className="glass-card p-8 bg-gradient-to-br from-evergreen-900/20 to-north-pole-800/50 border-evergreen-500/20">
                            <div className="text-4xl mb-4 animate-bounce-slow">❓</div>
                            <h4 className="font-bold text-lg mb-2 text-evergreen-100">Quick Answers</h4>
                            <p className="text-frost-200/60 text-sm mb-6 leading-relaxed">
                                Check our FAQ page for instant answers to common questions!
                            </p>
                            <Link
                                to="/user/faq"
                                className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold text-sm transition-all text-frost-100"
                            >
                                View FAQ →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
