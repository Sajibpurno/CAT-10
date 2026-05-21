import React from 'react';

const PetCareTips = () => {
  const tips = [
    {
      id: 1,
      title: 'Balanced Nutrition',
      description: 'Feed species-appropriate food in measured portions. Avoid human food that can be toxic to pets.',
      icon: '🍎',
    },
    {
      id: 2,
      title: 'Daily Exercise',
      description: 'Regular physical activity keeps your pet healthy and reduces destructive behavior.',
      icon: '🏃',
    },
    {
      id: 3,
      title: 'Regular Vet Visits',
      description: 'Annual check-ups catch health issues early. Keep vaccinations and parasite prevention up to date.',
      icon: '🏥',
    },
    {
      id: 4,
      title: 'Mental Stimulation',
      description: 'Puzzle toys, training sessions and social interaction keep pets mentally sharp and happy.',
      icon: '💕',
    },
    {
      id: 5,
      title: 'Proper Grooming',
      description: 'Regular brushing, nail trims and baths (as needed) prevent health issues and keep pets comfortable.',
      icon: '🛁',
    },
    {
      id: 6,
      title: 'Safe Environment',
      description: 'Pet-proof your home. Remove toxic plants, secure chemicals and create a cozy, safe space.',
      icon: '🏠',
    },
  ];

  return (
    <section className="bg-white dark:bg-[#161c2d] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* 1. Small Top Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/10 text-pink-500 dark:bg-pink-500/5 border border-pink-500/20 mb-4">
          Pet Care Guide
        </span>

        {/* 2. Main Heading with Gradient */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Expert{' '}
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Pet Care Tips
          </span>
        </h2>

        {/* 3. Subtitle */}
        <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Give your new companion the best life possible with these essential care guidelines.
        </p>

        {/* 4. Tips Grid (3 Columns on Large screens, 2 on Medium, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 dark:bg-[#0f1422] dark:border-gray-800/60 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left gap-4"
            >
              {/* Left: Big Icon */}
              <div className="text-3xl sm:text-4xl p-2 bg-white dark:bg-gray-800/20 rounded-xl shrink-0 flex items-center justify-center shadow-xs">
                {tip.icon}
              </div>

              {/* Right: Content */}
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetCareTips;