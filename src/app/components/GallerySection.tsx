import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import entryImg from "../images/entry.png";
import kitchenImg from "../images/kitchen.png";
import livingRoomImg from "../images/living_room.png";
import upstairsImg from "../images/upstairs.jpeg";
import upstairs2Img from "../images/upstairs2.png";

const galleryImages = [
  {
    url: entryImg,
    caption: "Entry"
  },
  {
    url: kitchenImg,
    caption: "Kitchen"
  },
  {
    url: livingRoomImg,
    caption: "Living Room"
  },
  {
    url: upstairsImg,
    caption: "Upstairs"
  },
  {
    url: upstairs2Img,
    caption: "Upstairs (Alternate View)"
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
