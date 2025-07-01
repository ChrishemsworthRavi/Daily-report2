import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, BookOpen, Award } from 'lucide-react';
import { Button } from './ui/button';

const InstructorSection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Reach millions of students',
      description: 'Teach what you love. Udemy provides all the tools you need to create an online course.'
    },
    {
      icon: DollarSign,
      title: 'Earn money',
      description: 'Earn money every time a student purchases your course. Get paid monthly through PayPal or Payoneer.'
    },
    {
      icon: BookOpen,
      title: 'Get support',
      description: 'Get comprehensive support from our instructor community and our team to help you through your course creation journey.'
    },
    {
      icon: Award,
      title: 'Build authority',
      description: 'Become the go-to person in your field. Teaching online builds credibility for your existing business or services.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Instructor teaching"
              className="w-full h-96 object-cover rounded-lg"
            />
            
            {/* Overlay Stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
              <div className="absolute bottom-6 left-6 space-y-2">
                <div className="text-2xl font-bold">50M+</div>
                <div className="text-sm opacity-90">Students taught</div>
              </div>
              <div className="absolute bottom-6 right-6 space-y-2">
                <div className="text-2xl font-bold">190K+</div>
                <div className="text-sm opacity-90">Expert instructors</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Become an instructor
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Instructors from around the world teach millions of students on Udemy. 
                We provide the tools and skills to help you teach what you love.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#A435F0] rounded-lg flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-base font-bold h-12"
            >
              Start teaching today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;