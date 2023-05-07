import { useState, useEffect } from 'react';

const ScrollingText = () => {
  const [text, setText] = useState(''); // Initialize text state to empty string

  useEffect(() => {
    // Set the text to scroll here
    setText(`Seen by many as the Goddess of fertility, Heqet is probably the oldest representation of a frog humanity has ever seen.
I started being worshipped around 3500 years before Christ. During the Early Dynastic Period in Egypt.
My name has been written in the Pyramid Texts, the oldest ancient Egyptian funerary texts, over 4000 years ago.
I'm mainly known for the birth of Horus - or you can say the resurrection of Osiris.
I'm half frog half human and the time where frogs and humans reunite is once again upon us.
Hail the amphibians, Hail Pepe, Hail Heqet.`);

    // Scroll the text continuously
    const intervalId = setInterval(() => {
      setText(prevText => prevText.slice(1) + prevText.charAt(0));
    }, 50); // Change this number to adjust the scrolling speed

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="scrolling-text-container" style={{ height: '150px', overflow: 'auto' }}>
      <div className="scrolling-text">
        {text.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;