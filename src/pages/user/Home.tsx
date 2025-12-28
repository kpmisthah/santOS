import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

    useEffect(() => {
        // Generate snowflakes
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 10
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="min-h-screen bg-north-pole-950 text-white overflow-hidden font-sans">
            {/* Animated Snowflakes */}
            <div className="fixed inset-0 pointer-events-none z-10">
                {snowflakes.map((flake) => (
                    <div
                        key={flake.id}
                        className="absolute text-white/40 opacity-70 animate-fall"
                        style={{
                            left: `${flake.left}%`,
                            animationDelay: `${flake.delay}s`,
                            animationDuration: `${flake.duration}s`,
                            top: '-10px'
                        }}
                    >
                        ❄
                    </div>
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZClIiAvPjwvc3ZnPg==')] opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-radial from-north-pole-800/50 to-north-pole-950 pointer-events-none"></div>

                <div className="relative z-20 text-center max-w-5xl mx-auto">
                    {/* Animated Santa Icon */}
                    <div className="mb-8 animate-bounce-slow">
                        <span className="text-9xl drop-shadow-lg filter shadow-gold/20">🎅</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-7xl md:text-9xl font-display font-bold mb-6 text-gradient-gold drop-shadow-xl animate-fade-in-up">
                        Welcome to SantaOS
                    </h1>

                    <p className="text-2xl md:text-3xl text-frost-100 mb-4 font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        The North Pole's Official Gift Management System
                    </p>

                    <p className="text-lg md:text-xl text-frost-200/60 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Share your Christmas wishes with Santa and track your magical gifts as they journey from the North Pole to your doorstep! 🎁✨
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <Link
                            to="/user/wishlist"
                            className="btn-primary px-10 py-5 text-xl group transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                ✨ Create Your Wishlist
                            </span>
                        </Link>

                        <Link
                            to="/user/track"
                            className="px-10 py-5 glass-card border-stardust-400/30 hover:bg-white/10 rounded-xl font-bold text-xl text-frost-100 transition-all duration-300 transform hover:scale-105 hover:shadow-glow-sm"
                        >
                            🎁 Track Your Gifts
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
                            <div className="text-4xl font-display font-bold text-stardust-400 mb-2">195+</div>
                            <div className="text-frost-200/60 font-medium uppercase tracking-wider text-sm">Countries Served</div>
                        </div>
                        <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500 border-stardust-400/30">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎁</div>
                            <div className="text-4xl font-display font-bold text-gradient-gold mb-2">2.5B+</div>
                            <div className="text-frost-200/60 font-medium uppercase tracking-wider text-sm">Gifts Delivered</div>
                        </div>
                        <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⭐</div>
                            <div className="text-4xl font-display font-bold text-festive-red-400 mb-2">100%</div>
                            <div className="text-frost-200/60 font-medium uppercase tracking-wider text-sm">Joy Guaranteed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-24 px-6 bg-north-pole-900/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-north-pole-950 via-transparent to-north-pole-950 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-5xl font-display font-bold text-center mb-4 text-gradient-gold">
                        How SantaOS Works
                    </h2>
                    <p className="text-xl text-frost-200/60 text-center mb-16 max-w-2xl mx-auto font-light">
                        Our magical system ensures every wish reaches Santa and every gift arrives on time!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="glass-card p-8 hover:border-festive-red-500/50 group relative overflow-hidden transition-all duration-300 hover:shadow-neon-red">
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-festive-red-900/50 rounded-full blur-2xl group-hover:bg-festive-red-500/20 transition-colors"></div>
                            <div className="absolute top-0 right-0 p-4 text-8xl opacity-5 font-display font-bold text-festive-red-500 select-none">1</div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-festive-red-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 text-festive-red-400 group-hover:scale-110 transition-transform">
                                    📝
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3 text-frost-100 group-hover:text-white transition-colors">Create Your Wishlist</h3>
                                <p className="text-frost-200/60 leading-relaxed font-light">
                                    Tell Santa what you'd love to receive this Christmas. Add as many wishes as your heart desires!
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="glass-card p-8 hover:border-stardust-500/50 group relative overflow-hidden transition-all duration-300 hover:shadow-neon-gold">
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-stardust-900/50 rounded-full blur-2xl group-hover:bg-stardust-500/20 transition-colors"></div>
                            <div className="absolute top-0 right-0 p-4 text-8xl opacity-5 font-display font-bold text-stardust-500 select-none">2</div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-stardust-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 text-stardust-400 group-hover:scale-110 transition-transform">
                                    🧝
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3 text-frost-100 group-hover:text-white transition-colors">Elves Get to Work</h3>
                                <p className="text-frost-200/60 leading-relaxed font-light">
                                    Our hardworking elves in the North Pole workshop prepare your gifts with love and care.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="glass-card p-8 hover:border-evergreen-500/50 group relative overflow-hidden transition-all duration-300 hover:shadow-glow-sm">
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-evergreen-900/50 rounded-full blur-2xl group-hover:bg-evergreen-500/20 transition-colors"></div>
                            <div className="absolute top-0 right-0 p-4 text-8xl opacity-5 font-display font-bold text-evergreen-500 select-none">3</div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-evergreen-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 text-evergreen-400 group-hover:scale-110 transition-transform">
                                    🎁
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3 text-frost-100 group-hover:text-white transition-colors">Track & Receive</h3>
                                <p className="text-frost-200/60 leading-relaxed font-light">
                                    Watch your gifts journey in real-time and receive them on Christmas morning!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-display font-bold text-center mb-4 text-gradient-gold">
                        What Children Say
                    </h2>
                    <p className="text-xl text-frost-200/60 text-center mb-16 font-light">
                        Spreading joy around the world! 🌟
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-festive-red-500 to-festive-red-700 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-festive-red-900/50">
                                    👧
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-frost-100">Emma, 8</div>
                                    <div className="text-stardust-400 text-xs tracking-widest">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>
                            <p className="text-frost-200/80 italic font-serif leading-relaxed">
                                "I got exactly what I wished for! Santa really read my list. Thank you SantaOS! 🎀"
                            </p>
                        </div>

                        <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-stardust-500 to-stardust-700 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-stardust-900/50">
                                    👦
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-frost-100">Lucas, 10</div>
                                    <div className="text-stardust-400 text-xs tracking-widest">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>
                            <p className="text-frost-200/80 italic font-serif leading-relaxed">
                                "Tracking my gifts was so cool! I could see when they left the North Pole! 🚀"
                            </p>
                        </div>

                        <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-evergreen-500 to-evergreen-700 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-evergreen-900/50">
                                    👧
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-frost-100">Sophia, 7</div>
                                    <div className="text-stardust-400 text-xs tracking-widest">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>
                            <p className="text-frost-200/80 italic font-serif leading-relaxed">
                                "Best Christmas ever! The website is magical and so easy to use! ✨"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-north-pole-950 to-north-pole-900 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="text-7xl mb-6 animate-bounce-slow">🎄</div>
                    <h2 className="text-5xl font-display font-bold mb-6 text-gradient-gold">
                        Ready to Share Your Christmas Wishes?
                    </h2>
                    <p className="text-xl text-frost-200/60 mb-10 font-light max-w-2xl mx-auto">
                        Join millions of children worldwide who trust SantaOS to deliver their Christmas magic!
                    </p>
                    <Link
                        to="/user/wishlist"
                        className="btn-primary px-12 py-6 text-2xl inline-block shadow-neon-gold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        🎁 Start Your Wishlist Now
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-white/5 py-16 px-6 bg-north-pole-900/30 backdrop-blur-md">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">🎅</span>
                                <span className="text-2xl font-display font-bold text-gradient-gold">SantaOS</span>
                            </div>
                            <p className="text-frost-200/50 text-sm leading-relaxed">
                                Spreading joy and magic worldwide since the beginning of Christmas! 🌟
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg text-frost-100 font-display">Quick Links</h4>
                            <ul className="space-y-3 text-frost-200/60 text-sm">
                                <li><Link to="/user/wishlist" className="hover:text-stardust-400 transition-colors uppercase tracking-wide">Create Wishlist</Link></li>
                                <li><Link to="/user/track" className="hover:text-stardust-400 transition-colors uppercase tracking-wide">Track Gifts</Link></li>
                                <li><Link to="/user/about" className="hover:text-stardust-400 transition-colors uppercase tracking-wide">About Us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg text-frost-100 font-display">Support</h4>
                            <ul className="space-y-3 text-frost-200/60 text-sm">
                                <li><Link to="/user/faq" className="hover:text-stardust-400 transition-colors uppercase tracking-wide">FAQ</Link></li>
                                <li><Link to="/user/contact" className="hover:text-stardust-400 transition-colors uppercase tracking-wide">Contact Santa</Link></li>
                                <li><Link to="/login" className="hover:text-stardust-400 transition-colors uppercase tracking-wide">Staff Login</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-lg text-frost-100 font-display">North Pole HQ</h4>
                            <ul className="space-y-3 text-frost-200/60 text-sm font-mono">
                                <li>🏠 North Pole, Arctic</li>
                                <li>📧 santa@northpole.com</li>
                                <li>🌐 Operating Worldwide</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 text-center text-north-pole-500 text-xs font-mono uppercase tracking-widest">
                        <p>&copy; 2024 SantaOS. Spreading joy worldwide. Made with ❤️ at the North Pole.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
