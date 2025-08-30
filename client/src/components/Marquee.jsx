import { useState, useEffect, useRef } from "react";
import MarqueeCard from "./MarqueeCard";

function Marquee({ cards }) {
  const [duplicatedCards, setDuplicatedCards] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const translateXRef = useRef(0); // Store current position

  // Duplicate cards for seamless infinite scroll
  useEffect(() => {
    if (cards && cards.length > 0) {
      // Create multiple copies to ensure smooth infinite scroll
      const tripleCards = [...cards, ...cards, ...cards];
      setDuplicatedCards(tripleCards);
    }
  }, [cards]);

  // Intersection Observer to pause when not visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation logic
  useEffect(() => {
    if (!trackRef.current || !duplicatedCards.length) return;

    const track = trackRef.current;
    const speed = 0.5; // Pixels per frame

    const animate = () => {
      if (isPlaying) {
        translateXRef.current -= speed;

        // Reset position when first set of cards has completely scrolled out
        // Each card is approximately 154px wide on mobile (138px + 16px margin)
        // and 232px on desktop (216px + 16px margin)
        const cardWidth = window.innerWidth >= 1024 ? 232 : 154;
        const resetPoint = -(cardWidth * cards.length);

        if (translateXRef.current <= resetPoint) {
          translateXRef.current = 0;
        }

        track.style.transform = `translateX(${translateXRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, duplicatedCards, cards]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Reset animation on resize to recalculate card widths
      if (trackRef.current) {
        translateXRef.current = 0;
        trackRef.current.style.transform = "translateX(0px)";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!duplicatedCards.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full py-4"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{
          width: "max-content",
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
