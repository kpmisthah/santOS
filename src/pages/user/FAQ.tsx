import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = [
        { id: 'all', name: 'All Questions', icon: '📚', color: 'bg-stardust-500/20' },
        { id: 'wishlist', name: 'Wishlist', icon: '📝', color: 'bg-festive-red-500/20' },
        { id: 'tracking', name: 'Tracking', icon: '🎁', color: 'bg-evergreen-500/20' },
        { id: 'delivery', name: 'Delivery', icon: '🚚', color: 'bg-north-pole-500/20' },
        { id: 'technical', name: 'Technical', icon: '⚙️', color: 'bg-stardust-500/20' }
    ];

    const faqs: FAQItem[] = [
        {
            category: 'wishlist',
            question: 'How do I create a wishlist?',
            answer: 'Simply click on "Create Your Wishlist" button on the homepage, fill in your information, add your wishes, and submit! You\'ll receive a tracking code to monitor your gifts.'
        },
        {
            category: 'wishlist',
            question: 'Can I add multiple items to my wishlist?',
            answer: 'Absolutely! You can add as many items as you\'d like. Just remember, Santa considers how good you\'ve been this year when fulfilling wishes! 🎅'
        },
        {
            category: 'wishlist',
            question: 'Can I edit my wishlist after submitting?',
            answer: 'Unfortunately, once submitted, wishlists cannot be edited as the elves start working on them immediately. However, you can contact us if you need to make urgent changes.'
        },
        {
            category: 'tracking',
            question: 'How do I track my gifts?',
            answer: 'Use the tracking code you received when you submitted your wishlist. Enter it on the "Track Your Gifts" page to see real-time updates on your gift\'s journey from the North Pole!'
        },
        {
            category: 'tracking',
            question: 'I lost my tracking code. What should I do?',
            answer: 'Don\'t worry! If you provided an email address, check your inbox for the confirmation email. Otherwise, contact our support team with your name and submission date.'
        },
        {
            category: 'tracking',
            question: 'How often is tracking information updated?',
            answer: 'Tracking information is updated in real-time as your gifts move through different stages. During peak season, updates may take a few hours to reflect.'
        },
        {
            category: 'delivery',
            question: 'When will my gifts be delivered?',
            answer: 'All gifts are delivered on Christmas morning! Santa and his reindeer work through the night of December 24th to ensure every child wakes up to presents on December 25th. 🎄'
        },
        {
            category: 'delivery',
            question: 'Do I need to be home for delivery?',
            answer: 'No! Santa has magical ways of delivering gifts even when you\'re asleep. Just make sure to leave out some cookies and milk! 🍪🥛'
        },
        {
            category: 'delivery',
            question: 'What if I\'m traveling during Christmas?',
            answer: 'Santa knows where you are! When creating your wishlist, you can specify your location during Christmas, and Santa will deliver there.'
        },
        {
            category: 'delivery',
            question: 'Can I choose a specific delivery time?',
            answer: 'Santa delivers all gifts during Christmas Eve night. The exact time is part of the Christmas magic and cannot be specified! ✨'
        },
        {
            category: 'technical',
            question: 'Is my information secure?',
            answer: 'Absolutely! We use elf-level security (the highest in the world) to protect your information. Your data is encrypted with Christmas magic and stored safely at the North Pole.'
        },
        {
            category: 'technical',
            question: 'Which browsers are supported?',
            answer: 'SantaOS works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, please use the latest version of your browser.'
        },
        {
            category: 'technical',
            question: 'Can I use SantaOS on my phone?',
            answer: 'Yes! SantaOS is fully responsive and works perfectly on smartphones, tablets, and computers. Create wishlists and track gifts from any device!'
        },
        {
            category: 'wishlist',
            question: 'Is there an age limit for creating wishlists?',
            answer: 'SantaOS is designed for children of all ages! However, parents should supervise younger children when using the platform.'
        },
        {
            category: 'delivery',
            question: 'What countries does Santa deliver to?',
            answer: 'Santa delivers to all 195 countries around the world! No matter where you are, if you believe in the magic of Christmas, Santa will find you. 🌍'
        }
    ];

    const filteredFAQs = activeCategory === 'all'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-north-pole-950 text-white py-20 px-6 font-sans">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-stardust-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-festive-red-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-stardust-400 hover:text-frost-100 transition-colors mb-8 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="font-medium tracking-wide uppercase text-sm">Back to Home</span>
                    </Link>
                    <div className="mb-6">
                        <span className="text-7xl animate-bounce-slow inline-block drop-shadow-xl">❓</span>
                    </div>
                    <h1 className="text-6xl font-display font-bold mb-4 text-gradient-gold drop-shadow-sm">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-frost-200/60 max-w-2xl mx-auto font-light">
                        Find answers to common questions about SantaOS and Christmas gift delivery! 🎄
                    </p>
                </div>

                {/* Category Filter */}
                <div className="glass-card p-6 mb-12 border-stardust-500/20">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-stardust-500 to-stardust-600 text-white shadow-neon-gold'
                                    : 'bg-north-pole-800 text-north-pole-400 hover:bg-north-pole-700 hover:text-frost-100 border border-white/5'
                                    }`}
                            >
                                <span className="mr-2 text-lg">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ List */}
                <div className="space-y-6 mb-16">
                    {filteredFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden hover:border-stardust-500/30 transition-all group"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-display font-bold text-lg text-frost-100 pr-8 group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                <span className={`text-2xl transition-transform duration-300 flex-shrink-0 text-stardust-400 ${openIndex === index ? 'rotate-180 text-festive-red-400' : ''
                                    }`}>
                                    ⬇️
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-8 pb-8 text-frost-200/60 leading-relaxed font-light border-t border-white/5 mt-2 pt-6">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div className="glass-card p-12 text-center bg-gradient-to-br from-north-pole-800/80 to-festive-red-900/20 border-festive-red-500/20">
                    <div className="text-6xl mb-6 animate-pulse">💬</div>
                    <h2 className="text-3xl font-display font-bold mb-4 text-gradient-gold">
                        Still Have Questions?
                    </h2>
                    <p className="text-frost-200/60 mb-8 max-w-2xl mx-auto font-light">
                        Can't find the answer you're looking for? Our friendly support team is here to help!
                    </p>
                    <Link
                        to="/user/contact"
                        className="btn-primary px-10 py-5 text-xl shadow-glow-sm hover:scale-105 transform inline-block"
                    >
                        📧 Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
