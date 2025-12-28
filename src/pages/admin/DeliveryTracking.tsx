import { useState, useEffect } from 'react';
import type { Delivery } from '../../types';

const DeliveryTracking = () => {
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);
    const [filter, setFilter] = useState<'all' | 'pending' | 'in-transit' | 'delivered'>('all');
    const [selectedRegion, setSelectedRegion] = useState<string>('all');

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setDeliveries([
                {
                    id: '1',
                    childId: '1',
                    childName: 'Emma Johnson',
                    region: 'North America',
                    address: '123 Main St, New York, USA',
                    giftItems: ['LEGO Set', 'Bicycle'],
                    status: 'delivered',
                    deliveryDate: '2024-12-24',
                    createdAt: '2024-12-01',
                    updatedAt: '2024-12-24',
                },
                {
                    id: '2',
                    childId: '2',
                    childName: 'Liam Smith',
                    region: 'Europe',
                    address: '456 Oxford St, London, UK',
                    giftItems: ['Action Figures', 'Board Game'],
                    status: 'in-transit',
                    createdAt: '2024-12-10',
                    updatedAt: '2024-12-20',
                },
                {
                    id: '3',
                    childId: '3',
                    childName: 'Olivia Brown',
                    region: 'Australia',
                    address: '789 George St, Sydney, Australia',
                    giftItems: ['Dollhouse'],
                    status: 'pending',
                    createdAt: '2024-12-15',
                    updatedAt: '2024-12-15',
                },
                {
                    id: '4',
                    childId: '4',
                    childName: 'Noah Davis',
                    region: 'North America',
                    address: '321 Maple Ave, Toronto, Canada',
                    giftItems: ['Toy Cars', 'Art Supplies'],
                    status: 'in-transit',
                    createdAt: '2024-12-12',
                    updatedAt: '2024-12-21',
                },
                {
                    id: '5',
                    childId: '5',
                    childName: 'Ava Wilson',
                    region: 'Europe',
                    address: '654 Champs-Élysées, Paris, France',
                    giftItems: ['Books', 'Puzzle Set'],
                    status: 'delivered',
                    deliveryDate: '2024-12-23',
                    createdAt: '2024-12-08',
                    updatedAt: '2024-12-23',
                },
            ]);
        }, 500);
    }, []);

    const regions = ['all', ...Array.from(new Set(deliveries.map(d => d.region)))];

    const filteredDeliveries = deliveries.filter(delivery => {
        const matchesStatus = filter === 'all' || delivery.status === filter;
        const matchesRegion = selectedRegion === 'all' || delivery.region === selectedRegion;
        return matchesStatus && matchesRegion;
    });

    const stats = {
        total: deliveries.length,
        pending: deliveries.filter(d => d.status === 'pending').length,
        inTransit: deliveries.filter(d => d.status === 'in-transit').length,
        delivered: deliveries.filter(d => d.status === 'delivered').length,
    };

    const regionStats = regions.slice(1).map(region => ({
        name: region,
        total: deliveries.filter(d => d.region === region).length,
        delivered: deliveries.filter(d => d.region === region && d.status === 'delivered').length,
    }));

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Page Header */}
            <div>
                <h1 className="text-4xl font-display font-bold mb-2 text-gradient-gold drop-shadow-sm">
                    Delivery Tracking
                </h1>
                <p className="text-frost-200/60 text-lg font-light tracking-wide">
                    Monitor gift deliveries across all regions worldwide
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-card p-6 flex items-center justify-between group hover:border-frost-200/20">
                    <div>
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">Total Deliveries</p>
                        <p className="text-3xl font-display font-bold text-frost-100">{stats.total}</p>
                    </div>
                    <div className="text-4xl bg-north-pole-800 rounded-lg p-2 group-hover:scale-110 transition-transform">📦</div>
                </div>
                <div className="glass-card p-6 border-l-4 border-stardust-400 flex items-center justify-between group hover:shadow-neon-gold">
                    <div>
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">Pending</p>
                        <p className="text-3xl font-display font-bold text-stardust-400">{stats.pending}</p>
                    </div>
                    <div className="text-4xl bg-stardust-900/30 rounded-lg p-2 group-hover:scale-110 transition-transform text-stardust-400">⏱️</div>
                </div>
                <div className="glass-card p-6 border-l-4 border-festive-red-500 flex items-center justify-between group hover:shadow-neon-red">
                    <div>
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">In Transit</p>
                        <p className="text-3xl font-display font-bold text-festive-red-400">{stats.inTransit}</p>
                    </div>
                    <div className="text-4xl bg-festive-red-900/30 rounded-lg p-2 group-hover:scale-110 transition-transform text-festive-red-400">🚚</div>
                </div>
                <div className="glass-card p-6 border-l-4 border-evergreen-500 flex items-center justify-between group hover:shadow-glow-sm">
                    <div>
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">Delivered</p>
                        <p className="text-3xl font-display font-bold text-evergreen-400">{stats.delivered}</p>
                    </div>
                    <div className="text-4xl bg-evergreen-900/30 rounded-lg p-2 group-hover:scale-110 transition-transform text-evergreen-400">✅</div>
                </div>
            </div>

            {/* Region Statistics */}
            <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-2xl font-display font-bold mb-6 text-frost-100 flex items-center gap-3">
                    <span className="text-stardust-400">🌍</span> Regional Progress
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {regionStats.map((region) => (
                        <div key={region.name} className="bg-north-pole-800/40 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg text-frost-100 tracking-wide">{region.name}</h3>
                                <div className="text-sm font-mono text-stardust-400 bg-stardust-900/30 px-2 py-1 rounded">
                                    {Math.round((region.delivered / region.total) * 100)}%
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-3 bg-north-pole-900 rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="h-full bg-gradient-to-r from-evergreen-600 to-evergreen-400 relative overflow-hidden group-hover:animate-shimmer"
                                        style={{ width: `${(region.delivered / region.total) * 100}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:animate-shimmer w-1/2"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-north-pole-400">
                                    <span className="group-hover:text-evergreen-400 transition-colors">{region.delivered} delivered</span>
                                    <span>{region.total} total</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="glass-panel p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Status Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-stardust-400 mb-3 uppercase tracking-wide">Filter by Status</label>
                        <div className="flex gap-2 flex-wrap">
                            {(['all', 'pending', 'in-transit', 'delivered'] as const).map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setFilter(status)}
                                    className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-300 text-sm ${filter === status
                                        ? 'bg-stardust-500/20 text-stardust-400 shadow-neon-gold border border-stardust-500/30'
                                        : 'text-north-pole-400 hover:text-frost-100 hover:bg-white/5 bg-north-pole-900/50 border border-transparent'
                                        }`}
                                >
                                    {status === 'in-transit' ? 'In Transit' : status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Region Filter */}
                    <div className="min-w-[250px]">
                        <label className="block text-sm font-bold text-stardust-400 mb-3 uppercase tracking-wide">Filter by Region</label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg z-10">🌎</span>
                            <select
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                                className="glass-input w-full pl-12 pr-4 py-3 rounded-xl appearance-none cursor-pointer"
                            >
                                {regions.map((region) => (
                                    <option key={region} value={region} className="bg-north-pole-900 capitalize">
                                        {region}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-north-pole-400">▼</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deliveries Table */}
            <div className="glass-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-north-pole-900/40 border-b border-white/5">
                            <tr>
                                <th className="px-8 py-5 text-left text-xs font-bold text-stardust-400 uppercase tracking-widest font-mono">
                                    Child
                                </th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-stardust-400 uppercase tracking-widest font-mono">
                                    Region
                                </th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-stardust-400 uppercase tracking-widest font-mono">
                                    Address
                                </th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-stardust-400 uppercase tracking-widest font-mono">
                                    Gifts
                                </th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-stardust-400 uppercase tracking-widest font-mono">
                                    Status
                                </th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-stardust-400 uppercase tracking-widest font-mono">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredDeliveries.map((delivery) => (
                                <tr key={delivery.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                👶
                                            </div>
                                            <div>
                                                <p className="font-semibold text-frost-100 group-hover:text-white transition-colors">{delivery.childName}</p>
                                                <p className="text-xs text-north-pole-400 font-mono">ID: {delivery.childId}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">🌍</span>
                                            <span className="font-medium text-frost-200">{delivery.region}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-north-pole-300 text-sm max-w-xs truncate font-mono">
                                        {delivery.address}
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex flex-wrap gap-1">
                                            {delivery.giftItems.map((gift, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] uppercase font-bold text-north-pole-300 tracking-wider"
                                                >
                                                    {gift}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span
                                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${delivery.status === 'delivered'
                                                ? 'bg-evergreen-900/30 text-evergreen-400 border-evergreen-500/30 shadow-glow-sm'
                                                : delivery.status === 'in-transit'
                                                    ? 'bg-festive-red-900/30 text-festive-red-400 border-festive-red-500/30 shadow-neon-red'
                                                    : 'bg-stardust-900/30 text-stardust-400 border-stardust-500/30 shadow-neon-gold'
                                                }`}
                                        >
                                            {delivery.status === 'delivered' && <span className="animate-pulse">✅</span>}
                                            {delivery.status === 'in-transit' && <span className="animate-float">🚚</span>}
                                            {delivery.status === 'pending' && <span>⏱️</span>}
                                            {delivery.status.replace('-', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex gap-2">
                                            {delivery.status !== 'delivered' && (
                                                <button className="px-3 py-1.5 bg-stardust-400/10 hover:bg-stardust-400/20 text-stardust-400 border border-stardust-400/20 rounded-lg text-xs font-bold uppercase tracking-wide transition-all hover:shadow-neon-gold">
                                                    Update Status
                                                </button>
                                            )}
                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-frost-200 hover:text-white">
                                                <span className="text-lg">👁️</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredDeliveries.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-6 opacity-50 grayscale animate-pulse">📦</div>
                        <p className="text-frost-200/60 text-xl font-light">No deliveries found matching your criteria.</p>
                        <p className="text-sm text-north-pole-400 mt-2">Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeliveryTracking;
