import { useState, useEffect } from 'react';
import type { Task } from '../../types';

const TaskAssignment = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setTasks([
                {
                    id: '1',
                    title: 'Build 500 Toy Cars',
                    description: 'Red and blue racing cars with remote control',
                    giftType: 'Toy Cars',
                    quantity: 500,
                    assignedTo: 'elf-1',
                    assignedToName: 'Buddy the Elf',
                    status: 'in-progress',
                    priority: 'high',
                    deadline: '2024-12-20',
                    createdAt: '2024-12-01',
                    updatedAt: '2024-12-15',
                },
                {
                    id: '2',
                    title: 'Assemble 300 Dollhouses',
                    description: 'Victorian style dollhouses with furniture',
                    giftType: 'Dollhouses',
                    quantity: 300,
                    assignedTo: 'elf-2',
                    assignedToName: 'Jingle the Elf',
                    status: 'completed',
                    priority: 'medium',
                    deadline: '2024-12-18',
                    createdAt: '2024-12-01',
                    updatedAt: '2024-12-17',
                },
                {
                    id: '3',
                    title: 'Paint 1000 Action Figures',
                    description: 'Superhero action figures with accessories',
                    giftType: 'Action Figures',
                    quantity: 1000,
                    status: 'pending',
                    priority: 'high',
                    deadline: '2024-12-22',
                    createdAt: '2024-12-10',
                    updatedAt: '2024-12-10',
                },
                {
                    id: '4',
                    title: 'Package 750 Board Games',
                    description: 'Family board games with all pieces',
                    giftType: 'Board Games',
                    quantity: 750,
                    assignedTo: 'elf-3',
                    assignedToName: 'Sparkle the Elf',
                    status: 'in-progress',
                    priority: 'medium',
                    deadline: '2024-12-21',
                    createdAt: '2024-12-05',
                    updatedAt: '2024-12-14',
                },
            ]);
        }, 500);
    }, []);

    const filteredTasks = tasks.filter(task => filter === 'all' || task.status === filter);

    const stats = {
        total: tasks.length,
        pending: tasks.filter(t => t.status === 'pending').length,
        inProgress: tasks.filter(t => t.status === 'in-progress').length,
        completed: tasks.filter(t => t.status === 'completed').length,
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2 text-gradient-gold drop-shadow-sm">
                        Task Assignment
                    </h1>
                    <p className="text-frost-200/60 text-lg font-light tracking-wide">
                        Assign and manage gift production tasks for elves
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 btn-primary group"
                >
                    <span className="group-hover:rotate-90 transition-transform duration-300 text-xl">➕</span>
                    <span>Create New Task</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-card p-6 flex items-center justify-between group hover:border-frost-200/20">
                    <div>
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">Total Tasks</p>
                        <p className="text-3xl font-display font-bold text-frost-100">{stats.total}</p>
                    </div>
                    <div className="text-4xl bg-north-pole-800 rounded-lg p-2 group-hover:scale-110 transition-transform">📋</div>
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
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">In Progress</p>
                        <p className="text-3xl font-display font-bold text-festive-red-400">{stats.inProgress}</p>
                    </div>
                    <div className="text-4xl bg-festive-red-900/30 rounded-lg p-2 group-hover:rotate-180 transition-transform duration-700 text-festive-red-400">🔄</div>
                </div>
                <div className="glass-card p-6 border-l-4 border-evergreen-500 flex items-center justify-between group hover:shadow-glow-sm">
                    <div>
                        <p className="text-frost-200/60 text-sm font-medium mb-1 uppercase tracking-wider">Completed</p>
                        <p className="text-3xl font-display font-bold text-evergreen-400">{stats.completed}</p>
                    </div>
                    <div className="text-4xl bg-evergreen-900/30 rounded-lg p-2 group-hover:scale-110 transition-transform text-evergreen-400">✅</div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="glass-panel p-2 inline-flex gap-2 rounded-xl">
                {(['all', 'pending', 'in-progress', 'completed'] as const).map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-6 py-2.5 rounded-lg font-medium capitalize transition-all duration-300 ${filter === status
                            ? 'bg-stardust-500/20 text-stardust-400 shadow-neon-gold border border-stardust-500/30'
                            : 'text-north-pole-400 hover:text-frost-100 hover:bg-white/5'
                            }`}
                    >
                        {status === 'in-progress' ? 'In Progress' : status}
                    </button>
                ))}
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredTasks.map((task) => (
                    <div key={task.id} className="glass-card p-6 group hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                        {/* Task Header */}
                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className="flex-1">
                                <h3 className="text-xl font-display font-bold mb-1 text-frost-100 group-hover:text-white transition-colors">{task.title}</h3>
                                <p className="text-frost-200/60 text-sm">{task.description}</p>
                            </div>
                            <span
                                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${task.priority === 'high'
                                    ? 'bg-festive-red-500/20 text-festive-red-400 border-festive-red-500/30'
                                    : task.priority === 'medium'
                                        ? 'bg-stardust-500/20 text-stardust-400 border-stardust-500/30'
                                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                                    }`}
                            >
                                {task.priority} Priority
                            </span>
                        </div>

                        {/* Task Details */}
                        <div className="space-y-3 mb-6 relative z-10 bg-north-pole-900/40 p-4 rounded-xl border border-white/5">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="text-north-pole-400 w-24">🎁 Gift Type:</span>
                                <span className="font-medium text-frost-100">{task.giftType}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="text-north-pole-400 w-24">📦 Quantity:</span>
                                <span className="font-medium text-frost-100">{task.quantity} units</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="text-north-pole-400 w-24">📅 Deadline:</span>
                                <span className="font-medium text-frost-100">{new Date(task.deadline).toLocaleDateString()}</span>
                            </div>
                            {task.assignedToName && (
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="text-north-pole-400 w-24">🧝 Assigned:</span>
                                    <span className="font-medium text-stardust-400 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-stardust-400"></span>
                                        {task.assignedToName}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
                            <span
                                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${task.status === 'completed'
                                    ? 'text-evergreen-400 bg-evergreen-900/30 shadow-glow-sm'
                                    : task.status === 'in-progress'
                                        ? 'text-festive-red-400 bg-festive-red-900/30 shadow-neon-red'
                                        : 'text-stardust-400 bg-stardust-900/30 shadow-neon-gold'
                                    }`}
                            >
                                {task.status === 'completed' && <span className="animate-pulse">✅</span>}
                                {task.status === 'in-progress' && <span className="animate-spin-slow">🔄</span>}
                                {task.status === 'pending' && <span>⏱️</span>}
                                {task.status.replace('-', ' ')}
                            </span>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-frost-200 hover:text-white" title="Edit">
                                    <span className="text-lg">✏️</span>
                                </button>
                                <button className="p-2 hover:bg-festive-red-900/30 hover:text-festive-red-400 rounded-lg transition-colors text-frost-200" title="Delete">
                                    <span className="text-lg">🗑️</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTasks.length === 0 && (
                <div className="glass-card p-12 text-center">
                    <div className="text-6xl mb-6 opacity-50 grayscale">📋</div>
                    <p className="text-frost-200/60 text-lg">No tasks found for this filter</p>
                </div>
            )}

            {/* Create Task Modal */}
            {isModalOpen && <CreateTaskModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

// Create Task Modal Component
interface CreateTaskModalProps {
    onClose: () => void;
}

const CreateTaskModal = ({ onClose }: CreateTaskModalProps) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        giftType: '',
        quantity: '',
        priority: 'medium',
        deadline: '',
        assignedTo: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle task creation
        console.log('Creating task:', formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all animate-scale-in border border-stardust-400/20 shadow-2xl shadow-stardust-900/50" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="sticky top-0 bg-north-pole-900/90 backdrop-blur-md border-b border-white/10 p-8 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-display font-bold text-gradient-gold">Create New Task</h2>
                    <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors group">
                        <span className="text-xl group-hover:rotate-90 transition-transform duration-300 block">✖️</span>
                    </button>
                </div>

                {/* Modal Content */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Task Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="e.g., Build 500 Toy Cars"
                            required
                            className="glass-input w-full px-4 py-3 rounded-xl"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Detailed description of the task..."
                            rows={3}
                            className="glass-input w-full px-4 py-3 rounded-xl resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Gift Type</label>
                            <input
                                type="text"
                                value={formData.giftType}
                                onChange={(e) => setFormData({ ...formData, giftType: e.target.value })}
                                placeholder="e.g., Toy Cars"
                                required
                                className="glass-input w-full px-4 py-3 rounded-xl"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Quantity</label>
                            <input
                                type="number"
                                value={formData.quantity}
                                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                placeholder="500"
                                required
                                className="glass-input w-full px-4 py-3 rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Priority</label>
                            <select
                                value={formData.priority}
                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                className="glass-input w-full px-4 py-3 rounded-xl"
                            >
                                <option value="low" className="bg-north-pole-900">Low</option>
                                <option value="medium" className="bg-north-pole-900">Medium</option>
                                <option value="high" className="bg-north-pole-900">High</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Deadline</label>
                            <input
                                type="date"
                                value={formData.deadline}
                                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                required
                                className="glass-input w-full px-4 py-3 rounded-xl"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stardust-400 mb-2 uppercase tracking-wide">Assign to Elf (Optional)</label>
                        <select
                            value={formData.assignedTo}
                            onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                            className="glass-input w-full px-4 py-3 rounded-xl"
                        >
                            <option value="" className="bg-north-pole-900">Unassigned</option>
                            <option value="elf-1" className="bg-north-pole-900">Buddy the Elf</option>
                            <option value="elf-2" className="bg-north-pole-900">Jingle the Elf</option>
                            <option value="elf-3" className="bg-north-pole-900">Sparkle the Elf</option>
                        </select>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-white/5">
                        <button
                            type="submit"
                            className="flex-1 btn-gold"
                        >
                            Create Task
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-8 py-3 btn-secondary"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskAssignment;
