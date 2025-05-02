import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChartBarIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      title: 'Employee Management',
      description: 'Efficiently manage your workforce with our comprehensive tools.',
      icon: UserGroupIcon,
    },
    {
      title: 'Performance Analytics',
      description: 'Track and analyze employee performance with detailed reports.',
      icon: ChartBarIcon,
    },
    {
      title: 'Document Management',
      description: 'Secure and organized document handling for all HR needs.',
      icon: DocumentTextIcon,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Modern HR Management
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your HR processes with our cloud-based solution. Manage employees, track performance, and handle documents all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services" className="btn-primary">
            Explore Services
            <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get Started
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="feature-card p-6"
          >
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-600">Employees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Management?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of companies who have already streamlined their HR processes with our solution.
        </p>
        <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-opacity-90">
          Contact Us Now
        </Link>
      </motion.div>
    </div>
  );
};

export default Home; 