import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import imgg from "../../assets/card_img1.png";

function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const movies = [
    { id: 1, image: imgg },
    { id: 2, image: imgg },
    { id: 3, image: imgg },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <section className="bg_img pb-5 relative overflow-hidden">
      <div className="w-[90%] h-full m-auto relative z-10 flex items-center justify-center">
        {/* Container for centered slider */}
        <div className="flex items-center justify-center gap-4 relative h-[500px]">
          {movies.map((movie, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={movie.id}
                className={`absolute transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "w-[300px] h-[400px] z-30 left-1/2 transform -translate-x-1/2"
                    : "w-[250px] h-[350px] z-20"
                }`}
                style={{
                  left:
                    index === (currentIndex + 1) % movies.length
                      ? "calc(50% + 180px)"
                      : index ===
                        (currentIndex - 1 + movies.length) % movies.length
                      ? "calc(50% - 180px - 250px)"
                      : isActive
                      ? "50%"
                      : "auto",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={movie.image}
                    alt="Movie"
                    className="w-full h-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/40" />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons and indicators... */}
        <div className="absolute bottom-10 left-0 flex items-center gap-5">
          <button className="h-[40px] w-[160px] text-[17px] rounded-[40px] bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-600">
            Watch Movie
          </button>
          <button className="border border-blue-500 h-[40px] w-[160px] text-white text-[17px] rounded-[40px] flex items-center justify-center gap-2 hover:bg-blue-500/20 transition-all duration-600">
            More Info <ArrowRight size={20} color="#fff" />
          </button>
        </div>

        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-2">
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-600 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
