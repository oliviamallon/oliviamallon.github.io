import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/life/2.jpg", alt: "Summer Camp Leadership" },
  { src: "/images/qcs-formal.jpg", alt: "Queen's Computing Society Formal" },
  { src: "/images/qcs-committee.png", alt: "Queen's Computing Society Committee" },
  { src: "/images/nidc-volunteer.png", alt: "Volunteer at NIDC in Belfast" },
  { src: "/images/hackathon-2022.png", alt: "Hack the Hub Hackathon Event" },
  { src: "/images/uganda-volunteer.png", alt: "Volunteer with Abaana & Waakisa in Uganda" },
  { src: "/images/uganda-volunteer2.png", alt: "Volunteer with Abaana & Waakisa in Uganda" },
];

const AboutGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // Set up auto-sliding every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(autoSlide); // Cleanup on component unmount
  }, []);

  const goToNext = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-center mb-6">Snapshots from the Journey</h3>

      {/* Gallery Image */}
      <div className="relative w-full h-80 flex justify-center items-center">
        <motion.div
          className="w-full h-full overflow-hidden rounded-xl"
          key={selectedImage} // Add key to trigger re-render on image change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Container for the image and caption */}
          {/* Container for the image and caption */}
<div className="relative w-full h-full">
  <img
    src={galleryImages[selectedImage].src}
    alt={galleryImages[selectedImage].alt}
    className="object-contain w-full h-[300px] transition-transform duration-500"
  />

  {/* Caption Box */}
  <motion.div
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-25 text-white p-2 text-center w-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {galleryImages[selectedImage].alt}
  </motion.div>
</div>

        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default AboutGallery;
