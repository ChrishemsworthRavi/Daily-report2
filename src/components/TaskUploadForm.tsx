import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface TaskUploadFormProps {
  onTaskSubmit: (task: { title: string; description: string; date: string }) => void;
}

const TaskUploadForm: React.FC<TaskUploadFormProps> = ({ onTaskSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.description) {
      alert("All fields are required!");
      return;
    }

    onTaskSubmit({
      title: formData.title,
      description: formData.description,
      date: formData.date
    });

    setFormData({
      title: '',
      description: '',
      date: ''
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center space-x-2">
            <Plus className="w-6 h-6" />
            <span>Upload Completed Task</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Task Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Task Title *
              </label>
              <Input
                type="text"
                name="title"
                placeholder="What did you complete today?"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="h-12"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Date *
              </label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="h-12"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Description *
              </label>
              <textarea
                name="description"
                placeholder="Describe what you accomplished..."
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Upload Task
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskUploadForm;
