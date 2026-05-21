import React from 'react';
import { Star } from 'lucide-react';
import { FaDog, FaCat, FaRegStickyNote } from 'react-icons/fa';
import { GiBirdCage } from 'react-icons/gi'; // বিকল্প হিসেবে সুন্দর বার্ড আইকন

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Sarah & Max',
      breed: 'Labrador Mix',
      text: '"Max was a shy rescue dog who\'d been passed over dozens of times. Now he greets me at the door every day and is the heart of our family."',
      rating: 5,
      icon: <FaDog className="w-5 h-5 text-orange-400" />,
      iconBg: 'bg-orange-500/10 dark:bg-orange-500/5',
    },
    {
      id: 2,
      name: 'John & Whiskers',
      breed: 'Tabby Cat',
      text: '"Whiskers came as a stray kitten. Now she sleeps on my pillow and purrs me to sleep. I can\'t imagine life without her."',
      rating: 5,
      icon: <FaCat className="w-5 h-5 text-amber-500" />,
      iconBg: 'bg-amber-500/10 dark:bg-amber-500/5',
    },
    {
      id: 3,
      name: 'Emma & Tweety',
      breed: 'Budgerigar',
      text: '"Our budgie Tweety learned to say \'I love you\' within a week. He sings every morning and brightens our entire household!"',
      rating: 5,
      icon: <span className="text-xl">🦜</span>, // রিয়েল ইমোজির মতো ভাইব ধরে রাখার জন্য
      iconBg: 'bg-pink-500/10 dark:bg-pink-500/5',
    }
  ];

  return (
    <section className="bg-white dark:bg-[#161c2d] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* 1. Small Top Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/10 text-pink-500 dark:bg-pink-500/5 border border-pink-500/20 mb-4">
          💝 Success Stories
        </span>

        {/* 2. Main Heading with Gradient */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Happy Tails &{' '}
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Happy Homes
          </span>
        </h2>

        {/* 3. Subtitle */}
        <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Real stories from real families who found their perfect match through PetNest.
        </p>

        {/* 4. Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-gray-50 border border-gray-100 dark:bg-[#0f1422] dark:border-gray-800/60 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left"
            >
              <div>
                {/* Icon & Stars Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Left: Pet Icon Container */}
                  <div className={`w-10 h-10 rounded-xl ${story.iconBg} flex items-center justify-center`}>
                    {story.icon}
                  </div>
                  
                  {/* Right: 5 Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm italic text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-medium">
                  {story.text}
                </p>
              </div>

              {/* Reviewer / Pet Info Footer */}
              <div className="mt-auto">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  {story.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
                  <span>🐾</span> {story.breed}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;