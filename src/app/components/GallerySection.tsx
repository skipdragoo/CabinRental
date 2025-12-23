import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1648326342761-8a9abfb7a2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYWJpbiUyMGV4dGVyaW9yJTIwZm9yZXN0fGVufDF8fHx8MTc2NjQzMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1696860740793-1bb7bf33cdc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FiaW4lMjBsaXZpbmclMjByb29tJTIwZmlyZXBsYWNlfGVufDF8fHx8MTc2NjQzMjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Living Room"
  },
  {
    url: "https://images.unsplash.com/photo-1727706572437-4fcda0cbd66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWJpbiUyMGJlZHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY0MzI3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Primary Bedroom"
  },
  {
    url: "https://images.unsplash.com/photo-1668015642167-ba3c4c64825b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbiUyMGtpdGNoZW4lMjBydXN0aWN8ZW58MXx8fHwxNzY2NDMyNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1763338997133-8044829329fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbiUyMGRlY2slMjBtb3VudGFpbiUyMHZpZXd8ZW58MXx8fHwxNzY2NDMyNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Deck & Views"
  },
  {
    url: "https://images.unsplash.com/photo-1633512424746-0cb5240e064d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaG90JTIwdHViJTIwbmF0dXJlfGVufDF8fHx8MTc2NjQzMjc1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Hot Tub"
  }
];

export function GallerySection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            Your Mountain Retreat
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully designed space where modern comfort meets natural beauty
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <div className="aspect-[16/9] bg-muted">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p 
                    className="text-white"
                    style={{ 
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem'
                    }}
                  >
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
