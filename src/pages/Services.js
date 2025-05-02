import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Employee Onboarding',
      description: 'Streamline your onboarding process with digital documentation and automated workflows.',
      features: [
        'Digital document signing',
        'Automated email sequences',
        'Task management',
        'Progress tracking',
      ],
      icon: '👥',
    },
    {
      title: 'Attendance Management',
      description: 'Track employee attendance and time-off requests efficiently.',
      features: [
        'Automated time tracking',
        'Leave request management',
        'Overtime calculation',
        'Attendance reports',
      ],
      icon: '⏰',
    },
    {
      title: 'Performance Reviews',
      description: 'Conduct and track employee performance evaluations seamlessly.',
      features: [
        'Customizable review templates',
        '360-degree feedback',
        'Goal tracking',
        'Performance analytics',
      ],
      icon: '📊',
    },
    {
      title: 'Payroll Management',
      description: 'Simplify your payroll processing with automated calculations.',
      features: [
        'Automated salary calculation',
        'Tax management',
        'Direct deposits',
        'Payslip generation',
      ],
      icon: '💳',
    },
    {
      title: 'Employee Self-Service',
      description: 'Empower employees to manage their information and requests.',
      features: [
        'Profile management',
        'Document access',
        'Leave requests',
        'Payslip downloads',
      ],
      icon: '🔑',
    },
    {
      title: 'HR Analytics',
      description: 'Get insights into your workforce with powerful analytics tools.',
      features: [
        'Workforce analytics',
        'Custom reports',
        'Data visualization',
        'Trend analysis',
      ],
      icon: '📈',
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive HR solutions designed to streamline your operations and enhance employee experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn how our services can benefit your organization
          </p>
          <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 