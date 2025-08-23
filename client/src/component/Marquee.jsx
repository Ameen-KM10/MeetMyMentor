import { useState, useEffect, useRef } from "react";
import MarqueeCard from "./MarqueeCard";

const defaultSpeed = 0.7;

function Marquee({ cards }) {
  const [cardList, setCardList] = useState([...cards]);
  const [x, setX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [speed] = useState(defaultSpeed);
  const [cardWidth, setCardWidth] = useState(231);
  const transitionRef = useRef("none");
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useRef(true);
  const animationFrame = useRef(null);

  useEffect(() => {
    setCardList([...cards]);
    setX(0);
    // Measure the first card's width
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 15);
    }
  }, [cards]);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 15);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer to pause animation when not visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          setIsPaused(true);
        } else {
          setIsPaused(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isPaused && isVisible.current) {
        setX((prevX) => {
          let nextX = prevX - speed;
          if (Math.abs(nextX) >= cardWidth) {
            setCardList((prevList) => {
              const shifted = [...prevList];
              shifted.push(shifted.shift());
              return shifted;
            });
            transitionRef.current = "none";
            return nextX + cardWidth;
          }
          transitionRef.current = "transform 0s linear";
          return nextX;
        });
      }
      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isPaused, speed, cardWidth]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full py-4 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex marquee-track"
        style={{
          width: cardList.length * cardWidth,
          transform: `translateX(${x}px)`,
          transition: transitionRef.current,
        }}
      >
        {cardList.map((card, idx) => (
          <MarqueeCard
            key={idx + card.title}
            card={card}
            ref={idx === 0 ? cardRef : null}
          />
        ))}
      </div>
    </div>
  );
}

export default Marquee;
