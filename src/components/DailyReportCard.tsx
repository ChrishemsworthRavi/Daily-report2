import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Target,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { DailyReport } from '../types';
import { format } from 'date-fns';

interface DailyReportCardProps {
  report: DailyReport;
  onClick?: () => void;
}

const DailyReportCard: React.FC<DailyReportCardProps> = ({ report, onClick }) => {
  const getProductivityColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
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
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" />
                <AvatarFallback>
                  {report.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">{report.user}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {format(report.date, 'EEEE, MMMM dd, yyyy')}
                </p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getProductivityColor(report.productivity)}`}>
              {report.productivity}/10
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Summary */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Daily Summary</h4>
            <p className="text-sm text-gray-600 line-clamp-3">
              {report.summary}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-lg font-bold text-gray-900">
                  {report.tasks.filter(t => t.status === 'completed').length}
                </span>
              </div>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-lg font-bold text-gray-900">
                  {Math.floor(report.totalTimeSpent / 60)}h
                </span>
              </div>
              <p className="text-xs text-gray-500">Time Spent</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Target className="w-4 h-4 text-purple-600 mr-1" />
                <span className="text-lg font-bold text-gray-900">
                  {report.achievements.length}
                </span>
              </div>
              <p className="text-xs text-gray-500">Achievements</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            {report.achievements.slice(0, 2).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-600">{achievement}</span>
              </div>
            ))}
            {report.challenges.slice(0, 1).map((challenge, index) => (
              <div key={index} className="flex items-start space-x-2">
                <AlertTriangle className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-600">{challenge}</span>
              </div>
            ))}
          </div>

          {/* Task Categories */}
          <div className="flex flex-wrap gap-1">
            {Array.from(new Set(report.tasks.map(t => t.category))).slice(0, 3).map((category, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DailyReportCard;