import React from "react";
import { motion } from "framer-motion";
import "./Features.css";

const Features = () => {
  const features = [
    "Intuitive User Experience",
    "Quality Content",
    "Easy Navigation",
    "Responsive Interfaces",
  ];

  return (
    <section className="features" id="features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="feature-card"
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
