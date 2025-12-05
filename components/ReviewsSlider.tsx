"use client";

import { useState, useEffect, useCallback } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Review {
  name: string;
  position: string;
  company: string;
  review: string;
  rating: number;
  image?: string;
}

const reviews: Review[] = [
  {
    name: "Michael Chen",
    position: "CTO",
    company: "TechVentures Inc.",
    review: "Stafona transformed our entire digital infrastructure. Their expertise in React and Node.js helped us scale our platform to handle 10x more users.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  },
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "InnovateLabs",
    review: "Working with Stafona was a game-changer for our startup. They built our MVP in record time and the quality was exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    name: "David Williams",
    position: "CEO",
    company: "GlobalRetail Co.",
    review: "The e-commerce platform Stafona built for us has been instrumental in our 200% revenue growth. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    name: "Emily Rodriguez",
    position: "Director of Engineering",
    company: "HealthTech Solutions",
    review: "Stafona's expertise in Python and machine learning helped us develop predictive analytics that improved patient outcomes by 35%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    name: "James Anderson",
    position: "Founder",
    company: "FinanceFlow",
    review: "We needed a secure, scalable blockchain solution and Stafona delivered beyond expectations. Their understanding of DeFi is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  },
  {
    name: "Lisa Thompson",
    position: "Marketing Director",
    company: "BrandBoost Agency",
    review: "The mobile app Stafona developed for us has a 4.9-star rating on both app stores. Their React Native expertise is top-notch!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
  },
  {
    name: "Robert Kim",
    position: "VP of Technology",
    company: "DataDriven Inc.",
    review: "Stafona's team delivered our analytics dashboard ahead of schedule. Their attention to detail and code quality is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
  },
  {
    name: "Amanda Foster",
    position: "Startup Founder",
    company: "EduTech Pro",
    review: "From concept to launch, Stafona guided us through every step. Our e-learning platform now serves thousands of students daily.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"
  }
];

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      prevSlide();
    } else {
      nextSlide();
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculate slide width percentage based on slides per view
  const slideWidth = 100 / slidesPerView;

  return (
    <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped transform
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="bg-[#131929] rounded-xl p-6 border border-white/10 h-full flex flex-col hover:border-[#667eea]/50 transition-colors">
                    {/* Quote Icon & Rating Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                        <FormatQuoteIcon sx={{ fontSize: 20, color: 'white' }} />
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            sx={{ 
                              fontSize: 16, 
                              color: i < review.rating ? '#FFD700' : '#3a3f4b' 
                            }} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-white/80 leading-relaxed mb-6 flex-grow">
                      "{review.review}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#667eea] flex-shrink-0">
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{review.name}</h4>
                        <p className="text-[#667eea] text-sm font-medium">{review.position}</p>
                        <p className="text-white/50 text-xs">{review.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button 
            onClick={() => handleArrowClick('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#131929] border border-white/10 flex items-center justify-center text-white hover:bg-[#667eea] hover:border-[#667eea] transition-all z-10"
            aria-label="Previous review"
          >
            <ArrowBackIosIcon sx={{ fontSize: 16, marginLeft: '4px' }} />
          </button>
          <button 
            onClick={() => handleArrowClick('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#131929] border border-white/10 flex items-center justify-center text-white hover:bg-[#667eea] hover:border-[#667eea] transition-all z-10"
            aria-label="Next review"
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </button> */}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-4">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-50">
            <div className="text-lg md:text-xl font-bold text-white/70">TechVentures</div>
            <div className="text-lg md:text-xl font-bold text-white/70">InnovateLabs</div>
            <div className="text-lg md:text-xl font-bold text-white/70">GlobalRetail</div>
            <div className="text-lg md:text-xl font-bold text-white/70">HealthTech</div>
            <div className="text-lg md:text-xl font-bold text-white/70">FinanceFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
