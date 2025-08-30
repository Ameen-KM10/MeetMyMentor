import { useState, useEffect, useRef } from "react";
import MarqueeCard from "./MarqueeCard";

function Marquee({ cards }) {
  // State
  const [duplicatedCards, setDuplicatedCards] = useState([]);

  // Refs
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const translateXRef = useRef(0);
  const cardsRef = useRef([]);
  const isPausedRef = useRef(false);

  // Initialize cards and create duplicates for seamless infinite scroll
  useEffect(() => {
    if (cards && cards.length > 0) {
      cardsRef.current = cards;
      const tripleCards = [...cards, ...cards, ...cards];
      setDuplicatedCards(tripleCards);
    }
  }, [cards]);

  // Animation logic
  useEffect(() => {
    if (!duplicatedCards.length || !cardsRef.current.length) return;
    if (animationRef.current) return; // Prevent restart if already running

    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;
    const cardWidth = window.innerWidth >= 1024 ? 232 : 154;
    const resetPoint = -(cardWidth * cardsRef.current.length);

    const animate = () => {
      const isDesktop = window.innerWidth >= 1024;
      const shouldAnimate = !isDesktop || (isDesktop && !isPausedRef.current);

      if (shouldAnimate) {
        translateXRef.current -= speed;

        if (translateXRef.current <= resetPoint) {
          translateXRef.current = 0;
        }
      }

      if (track) {
        track.style.transform = `translateX(${translateXRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [duplicatedCards.length]);

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      isPausedRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      isPausedRef.current = false;
    }
  };

  if (!duplicatedCards.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full py-4"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{
          width: "max-content",
          touchAction: "none",
        }}
      >
        {duplicatedCards.map((card, index) => (
          <MarqueeCard key={`${card.title}-${index}`} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Marquee;
