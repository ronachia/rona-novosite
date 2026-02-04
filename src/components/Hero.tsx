import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Research Driven by Passion',
    subtitle: 'Pioneering innovative therapies for rare diseases'
  },
  {
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Something New is Always Waiting to be Known',
    subtitle: 'Committed to improving quality of life through research'
  },
  {
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Research Driven by Passion',
    subtitle: 'Transforming scientific discoveries into clinical solutions'
  },
  {
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Something New is Always Waiting to be Known',
    subtitle: 'Collaborating worldwide to advance medical science'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[450px] md:h-[500px] overflow-hidden mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="scrolling-text">
          <span>RESEARCH DRIVEN BY PASSION</span>
          <span>SOMETHING NEW IS ALWAYS WAITING TO BE KNOWN</span>
          <span>RESEARCH DRIVEN BY PASSION</span>
          <span>SOMETHING NEW IS ALWAYS WAITING TO BE KNOWN</span>
        </div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 1 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-4 md:right-8 z-10" style={{ transform: 'translateY(-50%)' }}>
              <img
                src="/aguia-solta-fundo-branco-removebg-preview.png"
                alt="Keviva Logo"
                className="w-28 md:w-36 lg:w-44 h-auto drop-shadow-2xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-3xl mx-auto px-4 text-center text-white relative z-10">
                <h1 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg" style={{ color: '#c9b896' }}>
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-light drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-opacity-75 rounded-full p-3 transition z-10"
        style={{ backgroundColor: 'rgba(201, 184, 150, 0.5)' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-opacity-75 rounded-full p-3 transition z-10"
        style={{ backgroundColor: 'rgba(201, 184, 150, 0.5)' }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-[#c9b896]' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
