import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Users, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Skills that drive you forward
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Technology and the world of work change fast — with us, you're faster. 
                Get the skills to achieve your goals.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-bold h-12"
              >
                Plan your career
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-base font-bold h-12"
              >
                Try Udemy Business
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online learning"
                className="w-full h-auto rounded-lg shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              
              {/* Floating Course Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 z-10"
              >
                <Card className="w-80 bg-white shadow-2xl border-0">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-12 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                        <Play className="text-[#A435F0]" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
                          Learn Python: The Complete Python Programming Course
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">Jose Portilla</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            <span className="text-yellow-500 font-bold text-sm">4.6</span>
                            <div className="flex ml-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={12}
                                  className={`${
                                    i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-gray-600">(74,000)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-900">$84.99</span>
                          <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <Clock size={12} />
                            <span>22 total hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-8 -right-8 z-10"
              >
                <Card className="bg-white shadow-2xl border-0">
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900">500K+</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Floating Achievement Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
              >
                <Card className="bg-white shadow-2xl border-0">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="text-green-600" size={18} />
                      </div>
                      <div className="font-bold text-sm text-gray-900">Certified</div>
                      <div className="text-xs text-gray-600">Course Complete</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-8 text-lg">Trusted by over 15,000 companies and millions of learners around the world</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Volkswagen</div>
            <div className="text-2xl font-bold text-gray-400">Samsung</div>
            <div className="text-2xl font-bold text-gray-400">Cisco</div>
            <div className="text-2xl font-bold text-gray-400">Vimeo</div>
            <div className="text-2xl font-bold text-gray-400">P&G</div>
            <div className="text-2xl font-bold text-gray-400">HP Inc.</div>
            <div className="text-2xl font-bold text-gray-400">Citi</div>
            <div className="text-2xl font-bold text-gray-400">Ericsson</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;