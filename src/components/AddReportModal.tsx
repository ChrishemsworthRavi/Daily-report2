import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Plus,
  Minus
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

interface AddReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (report: any) => void;
}

const AddReportModal: React.FC<AddReportModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    summary: '',
    achievements: [''],
    challenges: [''],
    nextDayPlan: [''],
    productivity: 7,
    totalTimeSpent: 480
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const report = {
      ...formData,
      id: Date.now().toString(),
      user: 'John Doe',
      date: new Date(formData.date),
      tasks: [], // This would be populated with actual tasks
      achievements: formData.achievements.filter(a => a.trim()),
      challenges: formData.challenges.filter(c => c.trim()),
      nextDayPlan: formData.nextDayPlan.filter(p => p.trim())
    };
    onSubmit(report);
    onClose();
  };

  const addItem = (field: 'achievements' | 'challenges' | 'nextDayPlan') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const removeItem = (field: 'achievements' | 'challenges' | 'nextDayPlan', index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index)
    });
  };

  const updateItem = (field: 'achievements' | 'challenges' | 'nextDayPlan', index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Create Daily Report</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date and Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Report Date
              </label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Total Time Spent (minutes)
              </label>
              <Input
                type="number"
                value={formData.totalTimeSpent}
                onChange={(e) => setFormData({ ...formData, totalTimeSpent: parseInt(e.target.value) || 0 })}
                min="0"
                required
              />
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Daily Summary *
            </label>
            <textarea
              placeholder="Summarize your day's work and key accomplishments..."
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              required
            />
          </div>

          {/* Productivity Score */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Productivity Score (1-10)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="1"
                max="10"
                value={formData.productivity}
                onChange={(e) => setFormData({ ...formData, productivity: parseInt(e.target.value) })}
                className="flex-1"
              />
              <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-sm font-bold text-blue-800">{formData.productivity}</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Key Achievements
              </label>
              <Button
                type="button"
                onClick={() => addItem('achievements')}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Describe an achievement..."
                    value={achievement}
                    onChange={(e) => updateItem('achievements', index, e.target.value)}
                    className="flex-1"
                  />
                  {formData.achievements.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeItem('achievements', index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Challenges Faced
              </label>
              <Button
                type="button"
                onClick={() => addItem('challenges')}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Describe a challenge..."
                    value={challenge}
                    onChange={(e) => updateItem('challenges', index, e.target.value)}
                    className="flex-1"
                  />
                  {formData.challenges.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeItem('challenges', index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Day Plan */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Tomorrow's Plan
              </label>
              <Button
                type="button"
                onClick={() => addItem('nextDayPlan')}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.nextDayPlan.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Target className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="What do you plan to work on tomorrow?"
                    value={plan}
                    onChange={(e) => updateItem('nextDayPlan', index, e.target.value)}
                    className="flex-1"
                  />
                  {formData.nextDayPlan.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeItem('nextDayPlan', index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Create Report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddReportModal;