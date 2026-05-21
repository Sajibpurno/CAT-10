import React from 'react';
import { Heart, Users, ShieldCheck, Award } from 'lucide-react';

const WhyPetNest = () => {
  const features = [
    {
      id: 1,
      title: 'Save a Life',
      description: 'Every adoption gives a pet a second chance. You become a hero in their story.',
      icon: <Heart className="w-6 h-6 text-red-500" />,
      iconBg: 'bg-red-500/10 dark:bg-red-500/5',
      iconBorder: 'border-red-500/20 dark:border-red-500/10'
    },
    {
      id: 2,
      title: 'Join Our Community',
      description: 'Connect with thousands of happy pet owners who share tips, stories and support.',
      icon: <Users className="w-6 h-6 text-blue-500" />,
      iconBg: 'bg-blue-500/10 dark:bg-blue-500/5',
      iconBorder: 'border-blue-500/20 dark:border-blue-500/10'
    },
    {
      id: 3,
      title: 'Verified & Safe',
      description: 'All pets are health-checked, vaccinated and verified before being listed.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/5',
      iconBorder: 'border-emerald-500/20 dark:border-emerald-500/10'
    },
    {
      id: 4,
      title: 'Lifelong Support',
      description: 'Get expert guidance on pet care, training and wellness throughout your journey.',
      icon: <Award className="w-6 h-6 text-amber-500" />,
      iconBg: 'bg-amber-500/10 dark:bg-amber-500/5',
      iconBorder: 'border-amber-500/20 dark:border-amber-500/10'
    }
  ];

  return (
    <section className="bg-white dark:bg-[#161c2d] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className=" container mx-auto text-center">
        
        {/* 1. Small Top Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/10 text-pink-500 dark:bg-pink-500/5 border border-pink-500/20 mb-4">
          Why PetHaven?
        </span>

        {/* 2. Main Heading with Gradient */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Adopt with{' '}
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Confidence
          </span>
        </h2>

        {/* 3. Subtitle */}
        <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          We make the adoption process simple, safe, and rewarding for both you and your new companion.
        </p>

        {/* 4. Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 border border-gray-100 dark:bg-[#0f1422] dark:border-gray-800/60 shadow-xs transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon Wrapper with Custom Color/Border Soft Blend */}
              <div className={`p-4 rounded-xl border ${feature.iconBg} ${feature.iconBorder} mb-6 flex items-center justify-center`}>
                {feature.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Card Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyPetNest;