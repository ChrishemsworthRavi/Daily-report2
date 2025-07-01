import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import TaskUploadForm from './components/TaskUploadForm';
import TaskDisplay from './components/TaskDisplay';
import { Task } from './types';
import { supabase } from './supabaseClient';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else if (data) {
        setTasks(data as Task[]);
      }
      setLoading(false);
    };

    fetchTasks();
  }, []);

  const handleTaskSubmit = async (formData: { title: string; description: string; date: string }) => {
    setError(null);
    const { data, error } = await supabase
      .from('tasks')
      .insert([{
        title: formData.title,
        description: formData.description,
        date: formData.date
      }])
      .select()
      .single();

    if (error) {
      setError(error.message);
    } else if (data) {
      setTasks(prev => [data as Task, ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <CheckSquare className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TaskTracker</h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {error && (
          <div className="text-red-500 mb-4 text-sm text-center">{error}</div>
        )}
        {loading ? (
          <p className="text-center text-gray-500">Loading tasks...</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Upload Form */}
            <div className="w-full lg:pr-4">
              <TaskUploadForm onTaskSubmit={handleTaskSubmit} />
            </div>

            {/* Right: Task Display */}
            <div className="w-full lg:pl-4">
              <TaskDisplay tasks={tasks} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
