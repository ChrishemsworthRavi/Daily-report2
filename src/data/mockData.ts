import { Task, DailyReport, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@company.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'employee',
    department: 'Development'
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah@company.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'manager',
    department: 'Design'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@company.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'employee',
    department: 'Marketing'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implement user authentication system',
    description: 'Create a secure login/logout system with JWT tokens and password encryption',
    status: 'completed',
    priority: 'high',
    category: 'Development',
    assignedTo: 'John Doe',
    createdAt: new Date('2024-01-15T09:00:00'),
    updatedAt: new Date('2024-01-15T17:30:00'),
    dueDate: new Date('2024-01-16T18:00:00'),
    completedAt: new Date('2024-01-15T17:30:00'),
    timeSpent: 480,
    attachments: [],
    comments: [
      {
        id: '1',
        text: 'Great work on the authentication flow!',
        author: 'Sarah Wilson',
        createdAt: new Date('2024-01-15T18:00:00')
      }
    ],
    tags: ['backend', 'security', 'authentication']
  },
  {
    id: '2',
    title: 'Design landing page mockups',
    description: 'Create responsive design mockups for the new product landing page',
    status: 'in-progress',
    priority: 'medium',
    category: 'Design',
    assignedTo: 'Sarah Wilson',
    createdAt: new Date('2024-01-15T10:00:00'),
    updatedAt: new Date('2024-01-15T16:00:00'),
    dueDate: new Date('2024-01-17T18:00:00'),
    timeSpent: 360,
    attachments: [
      {
        id: '1',
        name: 'landing-page-v1.figma',
        url: '#',
        type: 'figma',
        size: 2048000,
        uploadedAt: new Date('2024-01-15T16:00:00')
      }
    ],
    comments: [],
    tags: ['design', 'ui/ux', 'landing-page']
  },
  {
    id: '3',
    title: 'Social media campaign planning',
    description: 'Plan and schedule social media posts for Q1 product launch',
    status: 'pending',
    priority: 'medium',
    category: 'Marketing',
    assignedTo: 'Mike Johnson',
    createdAt: new Date('2024-01-15T11:00:00'),
    updatedAt: new Date('2024-01-15T11:00:00'),
    dueDate: new Date('2024-01-20T18:00:00'),
    timeSpent: 0,
    attachments: [],
    comments: [],
    tags: ['marketing', 'social-media', 'campaign']
  }
];

export const mockReports: DailyReport[] = [
  {
    id: '1',
    date: new Date('2024-01-15'),
    user: 'John Doe',
    tasks: [mockTasks[0]],
    summary: 'Successfully implemented the user authentication system with JWT tokens. The system includes secure password hashing, token refresh mechanism, and proper error handling.',
    achievements: [
      'Completed user authentication system',
      'Added password encryption with bcrypt',
      'Implemented JWT token refresh mechanism',
      'Added comprehensive error handling'
    ],
    challenges: [
      'Had to debug token expiration issues',
      'Needed to research best practices for password security'
    ],
    nextDayPlan: [
      'Start working on user profile management',
      'Add email verification system',
      'Write unit tests for authentication'
    ],
    totalTimeSpent: 480,
    productivity: 9
  }
];