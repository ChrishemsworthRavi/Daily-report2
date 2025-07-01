import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Bell, 
  Search, 
  Plus,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface HeaderProps {
  onAddTask: () => void;
  onAddReport: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTask, onAddReport }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WorkTracker</h1>
              <p className="text-sm text-gray-500">Daily Progress Hub</p>
            </div>
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search tasks, reports, or team members..."
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={onAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
          
          <Button
            onClick={onAddReport}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Daily Report
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </Button>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;