import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  User, 
  Calendar, 
  Flag, 
  MessageCircle, 
  Paperclip,
  CheckCircle,
  Circle,
  AlertCircle,
  Pause
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Task } from '../types';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Circle className="w-4 h-4 text-blue-600" />;
      case 'blocked':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Pause className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'blocked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500';
      case 'high':
        return 'bg-orange-500';
      case 'medium':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              {getStatusIcon(task.status)}
              <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
            </div>
            <Badge className={`text-xs ${getStatusColor(task.status)}`}>
              {task.status.replace('-', ' ')}
            </Badge>
          </div>

          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {task.description}
            </p>
          </div>

          {/* Tags */}
          {task.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {task.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {task.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{task.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              {/* Assignee */}
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{task.assignedTo}</span>
              </div>

              {/* Time Spent */}
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{Math.floor(task.timeSpent / 60)}h {task.timeSpent % 60}m</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Comments */}
              {task.comments.length > 0 && (
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>{task.comments.length}</span>
                </div>
              )}

              {/* Attachments */}
              {task.attachments.length > 0 && (
                <div className="flex items-center space-x-1">
                  <Paperclip className="w-3 h-3" />
                  <span>{task.attachments.length}</span>
                </div>
              )}

              {/* Due Date */}
              {task.dueDate && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{format(task.dueDate, 'MMM dd')}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskCard;