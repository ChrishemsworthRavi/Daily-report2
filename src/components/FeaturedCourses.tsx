import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
      instructor: 'Jonas Schmedtmann',
      rating: 4.7,
      reviews: 328543,
      students: 1234567,
      price: 94.99,
      originalPrice: 199.99,
      duration: '69 hours',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development',
      level: 'All Levels',
      bestseller: true
    },
    {
      id: 2,
      title: 'Complete React Developer Course with Redux, Hooks, GraphQL',
      instructor: 'Maximilian Schwarzmüller',
      rating: 4.6,
      reviews: 189234,
      students: 567890,
      price: 84.99,
      originalPrice: 179.99,
      duration: '52 hours',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development',
      level: 'Intermediate',
      bestseller: false
    },
    {
      id: 3,
      title: 'Python for Data Science and Machine Learning Bootcamp',
      instructor: 'Jose Portilla',
      rating: 4.5,
      reviews: 156789,
      students: 445678,
      price: 89.99,
      originalPrice: 189.99,
      duration: '25 hours',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Data Science',
      level: 'Beginner',
      bestseller: true
    },
    {
      id: 4,
      title: 'AWS Certified Solutions Architect - Associate 2024',
      instructor: 'Stephane Maarek',
      rating: 4.8,
      reviews: 234567,
      students: 678901,
      price: 79.99,
      originalPrice: 169.99,
      duration: '27 hours',
      image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cloud Computing',
      level: 'Intermediate',
      bestseller: false
    },
    {
      id: 5,
      title: 'Complete Digital Marketing Course - 12 Courses in 1',
      instructor: 'Daragh Walsh',
      rating: 4.4,
      reviews: 98765,
      students: 234567,
      price: 94.99,
      originalPrice: 199.99,
      duration: '36 hours',
      image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Marketing',
      level: 'All Levels',
      bestseller: true
    },
    {
      id: 6,
      title: 'Adobe Photoshop CC – Essentials Training Course',
      instructor: 'Daniel Walter Scott',
      rating: 4.7,
      reviews: 123456,
      students: 345678,
      price: 59.99,
      originalPrice: 129.99,
      duration: '30 hours',
      image: 'https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Design',
      level: 'Beginner',
      bestseller: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1340px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our most popular courses chosen by millions of students worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="cursor-pointer"
            >
              <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.bestseller && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Bestseller
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                    {course.duration}
                  </div>
                </div>

                {/* Course Content */}
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 line-clamp-2 text-base leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {course.instructor}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <span className="px-2 py-1 bg-gray-100 rounded font-medium">
                        {course.category}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award size={12} />
                        <span>{course.level}</span>
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500 font-bold text-sm">
                        {course.rating}
                      </span>
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={`${
                              i < Math.floor(course.rating)
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-600">
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Students */}
                  <div className="flex items-center space-x-1 text-xs text-gray-600">
                    <Users size={12} />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${course.originalPrice}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-bold">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
            Explore more courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;