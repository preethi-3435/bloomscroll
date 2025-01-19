import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedSection.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  useEffect(() => {
    // Fade-in and slide-up animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Left-to-right animation
    gsap.fromTo(
      ".slide-in-left",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".slide-in-left",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Image animations - shrink and enlarge
    gsap.utils.toArray(".image-animate").forEach((image) => {
      gsap.fromTo(
        image,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: "power2.inOut",
        }
      );
    });

    // Card animations - hover effect with rotation
    gsap.utils.toArray(".hover-card").forEach((card) => {
      const animation = gsap.to(card, { rotationY: 15, duration: 0.5, paused: true });
      card.addEventListener("mouseenter", () => animation.play());
      card.addEventListener("mouseleave", () => animation.reverse());
    });

    // Parallax effect for background
    gsap.to(".parallax", {
      backgroundPositionY: "50%",
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="animated-container bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16 fade-in">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse drop-shadow-lg">
          Welcome to BloomScroll
        </h1>
        <p className="text-lg mt-6 text-gray-300 max-w-2xl mx-auto">
          A platform where positivity blooms, inspiring greatness.
        </p>
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg transform hover:scale-105 transition">
          Explore Now
        </button>
      </header>

      {/* Why BloomScroll Section */}
      <section className="slide-in-left bg-gray-800 p-8 mx-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gradient">
          Why BloomScroll?
        </h2>
        <p className="text-center leading-relaxed">
          We foster a community of positivity, inspiring you to achieve your
          dreams and goals in a supportive environment.
        </p>
      </section>

      {/* Interactive Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
        <div className="hover-card bg-blue-600 p-6 text-white rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-3">Inspiring Content</h3>
          <p className="text-center">
            Content curated to uplift and motivate your journey.
          </p>
        </div>
        <div className="hover-card bg-purple-600 p-6 text-white rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-3">Personal Growth</h3>
          <p className="text-center">
            Achieve your goals with a community that inspires you.
          </p>
        </div>
        <div className="hover-card bg-green-600 p-6 text-white rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-3">Community Support</h3>
          <p className="text-center">
            Grow alongside like-minded individuals who support you.
          </p>
        </div>
      </section>

      {/* Animated Image Showcase */}
      <section className="image-showcase grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zcGlyaW5nJTIwY29udGVudCUyMG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D"
            alt="Uplifting"
            className="image-animate rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-500">
            <p className="text-lg font-semibold">Feel Empowered</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1482440308425-276ad0f28b19?w=500&auto=format&fit=crop&q=60"
            alt="Motivation"
            className="image-animate rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-500">
            <p className="text-lg font-semibold">Achieve Your Dreams</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedSection;
