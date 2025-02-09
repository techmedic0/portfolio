import React from 'react';
import { ArrowRight, Shield, Users, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We build modern, responsive healthcare websites that{' '}
              <span className="text-brand-neon">improve patient experience.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Transforming healthcare digital presence with cutting-edge web solutions.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border-2 border-brand-neon text-brand-neon rounded-lg text-lg font-medium hover:bg-brand-neon hover:text-brand-dark transition-colors duration-200"
            >
              See Our Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-light"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Why Choose Tech MEDICS?</h2>
            <p className="text-xl text-brand-text">
              We specialize in creating digital experiences that put patients first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'HIPAA Compliant',
                description: 'Secure solutions that protect patient data',
              },
              {
                icon: Users,
                title: 'Patient-Centric',
                description: 'Intuitive interfaces for better engagement',
              },
              {
                icon: Zap,
                title: 'Fast & Responsive',
                description: 'Lightning-quick load times on all devices',
              },
              {
                icon: Award,
                title: 'Award-Winning',
                description: 'Recognized for excellence in healthcare UX',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-brand-neon/20"
              >
                <feature.icon className="h-12 w-12 text-brand-neon mb-4" />
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-brand-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}