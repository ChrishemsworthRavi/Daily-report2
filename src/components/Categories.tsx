import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  DollarSign, 
  Monitor, 
  FileText, 
  User, 
  Palette, 
  Megaphone,
  Heart,
  Camera,
  Dumbbell,
  Music
} from 'lucide-react';
import { Button } from './ui/button';

const Categories = () => {
  const categories = [
    { name: 'Development', icon: Code, courses: '200K+', color: 'bg-blue-100 text-blue-600' },
    { name: 'Business', icon: Briefcase, courses: '150K+', color: 'bg-green-100 text-green-600' },
    { name: 'Finance & Accounting', icon: DollarSign, courses: '50K+', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'IT & Software', icon: Monitor, courses: '120K+', color: 'bg-purple-100 text-purple-600' },
    { name: 'Office Productivity', icon: FileText, courses: '80K+', color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Personal Development', icon: User, courses: '70K+', color: 'bg-pink-100 text-pink-600' },
    { name: 'Design', icon: Palette, courses: '90K+', color: 'bg-orange-100 text-orange-600' },
    { name: 'Marketing', icon: Megaphone, courses: '60K+', color: 'bg-teal-100 text-teal-600' },
    { name: 'Lifestyle', icon: Heart, courses: '40K+', color: 'bg-red-100 text-red-600' },
    { name: 'Photography & Video', icon: Camera, courses: '30K+', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Health & Fitness', icon: Dumbbell, courses: '25K+', color: 'bg-lime-100 text-lime-600' },
    { name: 'Music', icon: Music, courses: '20K+', color: 'bg-violet-100 text-violet-600' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1340px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            All the skills you need in one place
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From critical skills to technical topics, Udemy supports your professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 group"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {category.courses} courses
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="bg-[#A435F0] hover:bg-[#8710D8] text-white px-8 py-4 text-base font-bold h-12"
          >
            Explore all categories
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;