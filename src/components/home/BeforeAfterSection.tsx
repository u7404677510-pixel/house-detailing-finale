"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Camera } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ravalement de Façade",
    description: "Une rénovation complète et durable pour votre maison.",
    beforeImage: "/images/ravalement-avant.jpg",
    afterImage: "/images/ravalement-apres.jpg",
  },
  {
    id: 2,
    title: "Nettoyage de Façade",
    description: "Redonnez tout son éclat à votre maison avec notre lavage professionnel.",
    beforeImage: "/images/nettoyage-avant.jpg",
    afterImage: "/images/nettoyage-apres.jpg",
  },
  {
    id: 3,
    title: "Lavage de Façade Pierre",
    description: "Nettoyage en profondeur pour les façades en pierre de taille.",
    beforeImage: "/images/fissures-avant.jpg",
    afterImage: "/images/fissures-apres.jpg",
  },
];

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});

  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleImageLoad = (key: string) => {
    setImagesLoaded(prev => ({ ...prev, [key]: true }));
  };

  const handleImageError = (key: string) => {
    setImagesLoaded(prev => ({ ...prev, [key]: false }));
  };

  const beforeKey = `before-${currentProject.id}`;
  const afterKey = `after-${currentProject.id}`;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6">
            <Camera className="h-4 w-4" />
            NOS RÉALISATIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Avant / <span className="text-burgundy">Après</span>
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed">
            Découvrez la transformation de nos chantiers. 
            Faites glisser le curseur pour voir la différence.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-5xl mx-auto">
          {/* Project Info */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-2">
              {currentProject.title}
            </h3>
            <p className="text-charcoal-light">
              {currentProject.description}
            </p>
          </div>

          {/* Image Comparison */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            {/* Shadow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
            
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={currentProject.afterImage}
                alt={`${currentProject.title} - Après`}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(afterKey)}
                onError={() => handleImageError(afterKey)}
              />
              {/* Fallback */}
              {imagesLoaded[afterKey] === false && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <div className="text-center text-emerald-600/40">
                    <Home className="h-20 w-20 mx-auto mb-2" />
                    <p className="text-sm font-bold">APRÈS</p>
                  </div>
                </div>
              )}
              {/* After Label */}
              <div className="absolute top-6 right-6 bg-burgundy text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg z-10">
                APRÈS
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentProject.beforeImage}
                alt={`${currentProject.title} - Avant`}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(beforeKey)}
                onError={() => handleImageError(beforeKey)}
              />
              {/* Fallback */}
              {imagesLoaded[beforeKey] === false && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <Home className="h-20 w-20 mx-auto mb-2" />
                    <p className="text-sm font-bold">AVANT</p>
                  </div>
                </div>
              )}
              {/* Before Label */}
              <div className="absolute top-6 left-6 bg-charcoal text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg z-10">
                AVANT
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] z-20"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-burgundy cursor-ew-resize group-hover:scale-110 transition-transform">
                <div className="flex items-center gap-0.5">
                  <ChevronLeft className="h-5 w-5 text-burgundy" />
                  <ChevronRight className="h-5 w-5 text-burgundy" />
                </div>
              </div>
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Comparaison avant/après"
            />
          </div>

          {/* Navigation & Indicators */}
          <div className="flex items-center justify-center gap-8 mt-10">
            {/* Prev Button */}
            <button
              onClick={prevProject}
              className="h-14 w-14 rounded-full bg-gray-100 hover:bg-burgundy hover:text-white text-charcoal flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-burgundy w-10" 
                      : "bg-gray-300 hover:bg-gray-400 w-3"
                  }`}
                  aria-label={`Voir projet ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="h-14 w-14 rounded-full bg-gray-100 hover:bg-burgundy hover:text-white text-charcoal flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Projet suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Project Counter */}
          <p className="text-center text-charcoal-light mt-6 font-medium">
            <span className="text-burgundy font-bold">{currentIndex + 1}</span> / {projects.length} réalisations
          </p>
        </div>
      </div>
    </section>
  );
}
