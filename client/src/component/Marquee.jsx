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

  useEffect(() => {
    setCardList([...cards]);
    setX(0);
    // Measure the first card's width
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth+15);
    }
  }, [cards]);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth+15);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (!isPaused) {
        setX(prevX => {
          let nextX = prevX - speed;
          if (Math.abs(nextX) >= cardWidth) {
            setCardList(prevList => {
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
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [cardList, isPaused, speed, cardWidth]);

  return (
    <div
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
          <MarqueeCard key={idx + card.title} card={card} ref={idx === 0 ? cardRef : null} />
        ))}
      </div>
    </div>
  );
}


export default Marquee;
