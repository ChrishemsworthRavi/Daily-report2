import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Users,
  Calendar,
  Filter,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import TaskCard from './TaskCard';
import DailyReportCard from './DailyReportCard';
import { mockTasks, mockReports } from '../data/mockData';

const Dashboard = () => {
  const [tasks] = useState(mockTasks);
  const [reports] = useState(mockReports);

  const stats = [
    {
      title: 'Total Tasks',
      value: tasks.length,
      icon: BarChart3,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Completed Today',
      value: tasks.filter(t => t.status === 'completed').length,
      icon: CheckCircle,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Hours Logged',
      value: Math.floor(tasks.reduce((acc, task) => acc + task.timeSpent, 0) / 60),
      icon: Clock,
      color: 'bg-purple-500',
      change: '+15%'
    },
    {
      title: 'Team Members',
      value: new Set(tasks.map(t => t.assignedTo)).size,
      icon: Users,
      color: 'bg-orange-500',
      change: '+2%'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="tasks" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="tasks">Tasks Overview</TabsTrigger>
            <TabsTrigger value="reports">Daily Reports</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <TabsContent value="tasks" className="space-y-6">
          {/* Task Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-blue-900">In Progress</h3>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-900">
                  {tasks.filter(t => t.status === 'in-progress').length}
                </p>
                <p className="text-sm text-blue-700">Active tasks</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-green-900">Completed</h3>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-900">
                  {tasks.filter(t => t.status === 'completed').length}
                </p>
                <p className="text-sm text-green-700">Finished today</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-purple-900">Productivity</h3>
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-900">8.5/10</p>
                <p className="text-sm text-purple-700">Average score</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Tasks */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          {/* Reports Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-indigo-900">This Week</h3>
                  <Calendar className="w-5 h-5 text-indigo-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-indigo-900">5</p>
                <p className="text-sm text-indigo-700">Reports submitted</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-yellow-900">Avg. Productivity</h3>
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-yellow-900">8.2</p>
                <p className="text-sm text-yellow-700">Out of 10</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-teal-900">Total Hours</h3>
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-teal-900">42</p>
                <p className="text-sm text-teal-700">This week</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Recent Daily Reports</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {reports.map((report) => (
                  <DailyReportCard key={report.id} report={report} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;