import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const footerSections = [
    {
      title: 'Udemy Business',
      links: [
        'Teach on Udemy',
        'Get the app',
        'About us',
        'Contact us'
      ]
    },
    {
      title: 'Careers',
      links: [
        'Blog',
        'Help and Support',
        'Affiliate',
        'Investors'
      ]
    },
    {
      title: 'Terms',
      links: [
        'Privacy policy',
        'Cookie settings',
        'Sitemap',
        'Accessibility statement'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-[1340px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-3xl font-bold text-[#A435F0]">udemy</div>
            <p className="text-gray-400 leading-relaxed">
              Udemy is a global marketplace for learning and teaching online where 
              students are mastering new skills and achieving their goals by learning 
              from an extensive library of over 210,000 courses taught by expert instructors.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-bold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-xl mb-3">
                Stay up to date with the latest courses
              </h3>
              <p className="text-gray-400">
                Sign up for our newsletter and never miss an update
              </p>
            </div>
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A435F0] focus:border-transparent text-white"
              />
              <Button className="bg-[#A435F0] hover:bg-[#8710D8] text-white px-6 py-3 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1340px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Udemy, Inc. All rights reserved.
            </motion.div>

            {/* Language & Social */}
            <div className="flex items-center space-x-6">
              {/* Language Selector */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span className="text-sm">English</span>
              </motion.button>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;