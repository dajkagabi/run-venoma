"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white text-primary flex items-center">
      {/*  */}
      <div className="absolute inset-0">
        {/* */}
        <div className="absolute inset-0 bg-gradient from-transparent via-accent/10 to-transparent animate-pulse"></div>

        {/* */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent rounded-full opacity-40 animate-float-delayed"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
        {/* Jobboldali szöveg*/}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center z-10 space-y-6 lg:pl-22 lg:pr-10 lg:pt-8"
        >
          <motion.h1
            className="font-primary text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tighter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">UNLEASH</span>
            <span className="block">YOUR INNER</span>
            <motion.span
              className="block text-accent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              ATHLETE
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl font-secondary text-secondary max-w-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Experience the ultimate fusion of performance and style with our
            athlete-engineered running collection.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="#"
              className="px-8 py-4 bg-accent text-primary font-secondary font-bold text-lg rounded-lg shadow-lg hover:bg-accent-hover transition duration-300 text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection 
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-4 border-2 border-primary text-primary font-secondary font-bold text-lg rounded-lg hover:bg-primary hover:text-white transition duration-300 text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Video
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Kép lebegés*/}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mt-16 lg:mt-5 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/img/hero/running.png"
              width={600}
              height={600}
              alt="Athlete running in performance gear"
              className="drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          {/* Animáció */}
          <motion.div
            className="absolute -bottom-8 -left-8 w-56 h-56 bg-accent blur-[90px] opacity-30 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-8 -right-8 w-40 h-40 bg-accent blur-[70px] opacity-20 rounded-full"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>

      {/* Lebegéshez */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
      
    </section>
  );
}