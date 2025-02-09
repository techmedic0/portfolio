import React from 'react';
import { Monitor, Layout, Calendar, Search, Shield, Users, Zap, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Modern Hospital Websites',
      description:
        'Custom-built, responsive websites that showcase your healthcare facility and services with a modern, professional design.',
    },
    {
      icon: Layout,
      title: 'Patient Portals',
      description:
        'Secure, user-friendly patient portals that provide easy access to medical records, test results, and communication with healthcare providers.',
    },
    {
      icon: Calendar,
      title: 'Appointment Booking UI',
      description:
        'Intuitive appointment scheduling systems that simplify the booking process for both patients and staff.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Healthcare-focused SEO strategies to improve your online visibility and attract more patients.',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description:
        'Ensuring all digital solutions meet strict healthcare privacy and security requirements.',
    },
    {
      icon: Users,
      title: 'Patient Experience',
      description:
        'User-centered design that prioritizes accessibility and ease of use for all patients.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Lightning-fast websites optimized for quick loading times and smooth performance.',
    },
    {
      icon: BarChart,
      title: 'Analytics Integration',
      description:
        'Comprehensive analytics setup to track patient engagement and website performance.',
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive web solutions tailored for healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <service.icon className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}