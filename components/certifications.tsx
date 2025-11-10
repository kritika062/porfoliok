"use client";

import React from "react";
import { certifications } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationArrow } from "react-icons/fa6";

const Certifications = () => {
  return (
    <div className="py-20 w-full" id="certifications">
      <h1 className="section-heading">
        My <span className="text-purple">certifications</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-4">
        {certifications.map((cert, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4 justify-between h-full">
              <div>
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {cert.name}
                </h2>
                <p className="text-start text-purple mt-2 font-semibold">
                  {cert.issuer}
                </p>
                <p className="text-start text-white/80 mt-3 text-sm">
                  {cert.desc}
                </p>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple mt-4 text-sm font-medium"
                >
                  View Certificate
                  <FaLocationArrow className="text-purple" size={14} />
                </a>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
