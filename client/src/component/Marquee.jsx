import React from "react";
import MarqueeCard from "./MarqueeCard";

const cardWidth = 216+15; 
const defaultSpeed = 0.7; 

function Marquee({ cards }) {
  const [cardList, setCardList] = React.useState([...cards]);
  const [x, setX] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [speed] = React.useState(defaultSpeed);
  const transitionRef = React.useRef("none");

  React.useEffect(() => {
    setCardList([...cards]);
    setX(0);
  }, [cards]);

  React.useEffect(() => {
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
  }, [cardList, isPaused, speed]);

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
          <MarqueeCard key={idx + card.title} card={card} />
        ))}
      </div>
    </div>
  );
}


export default Marquee;
