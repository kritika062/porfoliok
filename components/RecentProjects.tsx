"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { useState } from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  const handleMouseEnter = (id: number) => {
    const newFlipped = new Set(flippedCards);
    newFlipped.add(id);
    setFlippedCards(newFlipped);
  };

  const handleMouseLeave = (id: number) => {
    const newFlipped = new Set(flippedCards);
    newFlipped.delete(id);
    setFlippedCards(newFlipped);
  };

  return (
    <div className="py-20">
      <h1 className="section-heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-row items-center justify-center p-4 gap-8 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative rounded-3xl overflow-hidden"
            key={item.id}
            style={{ backgroundColor: "#13162D" }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <div className={`w-full h-full transition-transform duration-500 ${flippedCards.has(item.id) ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
              {!flippedCards.has(item.id) && (
                <div className="absolute bottom-6 right-2 z-20 cursor-pointer" onClick={() => toggleFlip(item.id)}>
                  <FaLightbulb className="text-[#d8c542] w-8 h-8 hover:text-[#f0d95a] transition-colors" />
                </div>
              )}
              <div className="absolute inset-0 backface-hidden p-6 flex flex-col">
                <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-6">
                  <img src="/bg.png" alt="bgimg" className="absolute inset-0 w-full h-full object-cover" />
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base text-white break-words">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm text-gray-300 mt-2 break-words"
                >
                  {item.des}
                </p>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-900 to-black rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-white font-bold text-xl mb-4">Why I Built This</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{item.whyBuilt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
