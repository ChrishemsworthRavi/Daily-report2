import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Task } from '../types';
import { format } from 'date-fns';

interface TaskDisplayProps {
  tasks: Task[];
}

const TaskDisplay: React.FC<TaskDisplayProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks uploaded yet</h3>
        <p className="text-gray-500">Upload your first completed task to get started!</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Completed Tasks</h2>
      <div className="grid gap-6">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(task.date), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">{task.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskDisplay;
