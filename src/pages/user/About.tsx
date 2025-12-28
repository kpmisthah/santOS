import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-north-pole-950 text-white py-20 px-6 font-sans">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-40 left-10 w-96 h-96 bg-stardust-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-festive-red-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-north-pole-800/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-stardust-400 hover:text-frost-100 transition-colors mb-8 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="font-medium tracking-wide uppercase text-sm">Back to Home</span>
                    </Link>
                    <div className="mb-6">
                        <span className="text-7xl animate-bounce-slow inline-block drop-shadow-xl">🎅</span>
                    </div>
                    <h1 className="text-6xl font-display font-bold mb-4 text-gradient-gold drop-shadow-sm">
                        About SantaOS
                    </h1>
                    <p className="text-xl text-frost-200/60 max-w-2xl mx-auto font-light">
                        The most advanced Christmas gift management system in the world! 🌟
                    </p>
                </div>

                {/* Story Section */}
                <div className="glass-card p-10 mb-12 border-stardust-500/20 shadow-neon-gold/10">
                    <h2 className="text-4xl font-display font-bold mb-8 text-stardust-100">Our Story</h2>
                    <div className="space-y-6 text-frost-200/80 leading-relaxed text-lg font-light">
                        <p>
                            For centuries, Santa Claus and his team of dedicated elves have been spreading joy and magic
                            around the world every Christmas. But as the world grew and technology advanced, Santa knew
                            it was time to modernize the North Pole's operations.
                        </p>
                        <p>
                            In 2020, after consulting with the world's brightest tech elves, Santa launched <span className="text-stardust-400 font-bold">SantaOS</span>
                            - a state-of-the-art gift management system that combines centuries of Christmas magic with
                            cutting-edge technology.
                        </p>
                        <p>
                            Today, SantaOS helps millions of children worldwide share their Christmas wishes, track their
                            gifts in real-time, and experience the magic of Christmas like never before! 🎄✨
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8 border-festive-red-500/20 hover:border-festive-red-500/40 transition-all group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                        <h3 className="text-3xl font-display font-bold mb-4 text-festive-red-100">Our Mission</h3>
                        <p className="text-frost-200/60 leading-relaxed">
                            To bring joy, wonder, and the magic of Christmas to every child around the world through
                            innovative technology and timeless traditions.
                        </p>
                    </div>

                    <div className="glass-card p-8 border-evergreen-500/20 hover:border-evergreen-500/40 transition-all group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🌟</div>
                        <h3 className="text-3xl font-display font-bold mb-4 text-stardust-100">Our Vision</h3>
                        <p className="text-frost-200/60 leading-relaxed">
                            A world where every child experiences the wonder of Christmas, where wishes come true,
                            and where the spirit of giving connects us all.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="glass-card p-10 mb-12">
                    <h2 className="text-4xl font-display font-bold mb-10 text-frost-100 text-center">Meet the Team</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center group">
                            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-festive-red-500 to-festive-red-700 rounded-full flex items-center justify-center text-6xl shadow-neon-red group-hover:scale-105 transition-transform duration-300">
                                🎅
                            </div>
                            <h4 className="text-2xl font-bold mb-2 text-frost-100">Santa Claus</h4>
                            <p className="text-stardust-400 mb-3 text-sm uppercase tracking-widest font-bold">Chief Executive Officer</p>
                            <p className="text-frost-200/50 text-sm leading-relaxed">
                                Leading Christmas operations for over 1,700 years with unmatched dedication and joy.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-stardust-500 to-stardust-700 rounded-full flex items-center justify-center text-6xl shadow-neon-gold group-hover:scale-105 transition-transform duration-300">
                                🤶
                            </div>
                            <h4 className="text-2xl font-bold mb-2 text-frost-100">Mrs. Claus</h4>
                            <p className="text-stardust-400 mb-3 text-sm uppercase tracking-widest font-bold">Chief Operations Officer</p>
                            <p className="text-frost-200/50 text-sm leading-relaxed">
                                Ensuring smooth operations and keeping the North Pole running like clockwork.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-evergreen-500 to-evergreen-700 rounded-full flex items-center justify-center text-6xl shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
                                🧝
                            </div>
                            <h4 className="text-2xl font-bold mb-2 text-frost-100">Head Elf</h4>
                            <p className="text-stardust-400 mb-3 text-sm uppercase tracking-widest font-bold">Chief Technology Officer</p>
                            <p className="text-frost-200/50 text-sm leading-relaxed">
                                Leading a team of 10,000+ elves in gift production and technology innovation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="glass-card p-10 mb-12 border-stardust-400/20">
                    <h2 className="text-4xl font-display font-bold mb-10 text-gradient-gold text-center">By the Numbers</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-north-pole-800/50 rounded-2xl border border-white/5 hover:bg-north-pole-800 transition-all group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
                            <div className="text-4xl font-display font-bold text-stardust-400 mb-2">195+</div>
                            <div className="text-frost-200/60 text-sm uppercase tracking-wide">Countries</div>
                        </div>
                        <div className="text-center p-6 bg-north-pole-800/50 rounded-2xl border border-white/5 hover:bg-north-pole-800 transition-all group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
                            <div className="text-4xl font-display font-bold text-festive-red-400 mb-2">2.5B+</div>
                            <div className="text-frost-200/60 text-sm uppercase tracking-wide">Gifts Delivered</div>
                        </div>
                        <div className="text-center p-6 bg-north-pole-800/50 rounded-2xl border border-white/5 hover:bg-north-pole-800 transition-all group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧝</div>
                            <div className="text-4xl font-display font-bold text-evergreen-400 mb-2">10,000+</div>
                            <div className="text-frost-200/60 text-sm uppercase tracking-wide">Elves Working</div>
                        </div>
                        <div className="text-center p-6 bg-north-pole-800/50 rounded-2xl border border-white/5 hover:bg-north-pole-800 transition-all group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                            <div className="text-4xl font-display font-bold text-stardust-400 mb-2">100%</div>
                            <div className="text-frost-200/60 text-sm uppercase tracking-wide">Joy Rate</div>
                        </div>
                    </div>
                </div>

                {/* Technology */}
                <div className="glass-card p-10 mb-16 border-evergreen-500/20 bg-gradient-to-br from-north-pole-800/50 to-evergreen-900/20">
                    <h2 className="text-4xl font-display font-bold mb-8 text-evergreen-100">Our Technology</h2>
                    <div className="space-y-6 text-frost-200/80 leading-relaxed font-light">
                        <p className="text-lg">
                            SantaOS is powered by a unique blend of Christmas magic and modern technology:
                        </p>
                        <ul className="space-y-4 ml-2">
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <span className="text-3xl">✨</span>
                                <div>
                                    <strong className="text-stardust-100 block mb-1">Magic-Powered Cloud</strong>
                                    <span className="text-frost-200/60">Our servers run on pure Christmas spirit and renewable North Pole energy</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <span className="text-3xl">🦌</span>
                                <div>
                                    <strong className="text-stardust-100 block mb-1">Reindeer GPS</strong>
                                    <span className="text-frost-200/60">Real-time tracking powered by Rudolph's nose and satellite technology</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <span className="text-3xl">🎁</span>
                                <div>
                                    <strong className="text-stardust-100 block mb-1">AI Gift Matching</strong>
                                    <span className="text-frost-200/60">Advanced algorithms help match the perfect gift to every child</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <span className="text-3xl">🔒</span>
                                <div>
                                    <strong className="text-stardust-100 block mb-1">Elf-Level Security</strong>
                                    <span className="text-frost-200/60">Your wishes are protected by the most secure magic in the world</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-display font-bold mb-8 text-gradient-gold">
                        Ready to Experience the Magic?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/user/wishlist"
                            className="btn-primary px-10 py-5 text-xl"
                        >
                            ✨ Create Your Wishlist
                        </Link>
                        <Link
                            to="/user/contact"
                            className="px-10 py-5 glass-card hover:bg-white/10 rounded-xl font-bold text-xl text-frost-100 transition-all duration-300 transform hover:scale-105"
                        >
                            📧 Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
