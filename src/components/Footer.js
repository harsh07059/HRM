import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'Support', path: '/support' },
      { name: 'Blog', path: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      text: 'info@hrcloud.com',
      link: 'mailto:info@hrcloud.com',
    },
    {
      icon: PhoneIcon,
      text: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPinIcon,
      text: '123 Business Ave, Suite 100, New York, NY 10001',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">HR Cloud</h3>
            <p className="text-gray-400 mb-6">
              Streamline your HR processes with our powerful cloud-based platform.
              Manage employees, track performance, and handle documents all in one place.
            </p>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} HR Cloud. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 