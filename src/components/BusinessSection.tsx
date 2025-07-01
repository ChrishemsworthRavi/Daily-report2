import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const BusinessSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Unlimited access',
      description: '25,000+ top courses, anytime, anywhere'
    },
    {
      icon: Award,
      title: 'Expert instruction',
      description: 'Learn from real-world experts'
    },
    {
      icon: TrendingUp,
      title: 'Skill assessments',
      description: 'Track progress with assessments'
    },
    {
      icon: Shield,
      title: 'Certification',
      description: 'Get certificates upon completion'
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Fresh & in-demand courses' },
    { number: '700+', label: 'Hands-on labs' },
    { number: '400+', label: 'Learning paths' },
    { number: '10', label: 'Languages' }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Building2 className="text-[#A435F0]" size={36} />
                <span className="text-3xl font-bold text-[#A435F0]">Udemy Business</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Upskill your team with Udemy Business
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Give your team access to over 25,000 top Udemy courses, anytime, anywhere. 
                Try it free for your organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-[#A435F0]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#A435F0] hover:bg-[#8710D8] text-white px-8 py-4 text-base font-bold h-12"
              >
                Try Udemy Business
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white px-8 py-4 text-base font-bold h-12"
              >
                Learn more
              </Button>
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
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="text-2xl md:text-3xl font-bold text-[#A435F0] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-[#A435F0] bg-opacity-10 rounded-lg"></div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4"
              >
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="text-green-600" size={18} />
                      <span className="text-sm font-bold">24/7 Access</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4"
              >
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-2">
                      <Award className="text-yellow-600" size={18} />
                      <span className="text-sm font-bold">Certified</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;