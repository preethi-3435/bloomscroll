import React from "react";
import "./Tools.css";

const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
];

const Tools = () => {
  return (
    <div>
      {/* Section 1: Images */}
      <section className="animated-section">
        <div className="text-container">
          <h1> Get Exclusive Access to Keep Your Goals Alive </h1>
          <p>
            Join us to experience unlimited tools to transform yourself and
            change your life.
          </p>
        </div>

        <div className="floating-images">
          <div className="image-container" data-title="Goal Visualization">
            <img src="/goals.jpg" alt="Goal Visualization" />
          </div>
          <div className="image-container" data-title="Progress Tracking">
            <img src="/progress.jpg" alt="Progress Tracking" />
          </div>
          <div className="image-container" data-title="Positive Affirmations">
            <img src="/positive.jpg" alt="Positive Affirmations" />
          </div>
          <div className="image-container" data-title="Accountability">
            <img src="/accountable.jpg" alt="Accountability" />
          </div>
          <div className="image-container" data-title="Motivational Quotes">
            <img src="/quotes.jpg" alt="Motivational Quotes" />
          </div>
          <div className="image-container" data-title="Best Books">
            <img src="/books.jpg" alt="Best Books" />
          </div>
        </div>
      </section>

      {/* Section 2: Motivational Quotes */}
      <section className="quotes-section">
        <div className="text-container">
          <h1>Stay Inspired with Motivational Quotes</h1>
          <p>
            Explore powerful quotes to keep you motivated and push you closer to
            your goals.
          </p>
        </div>

        <div className="quotes-grid">
          {motivationalQuotes.map((quote, index) => (
            <div className="quote-card" key={index}>
              <p className="quote-text">{quote}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tools;
