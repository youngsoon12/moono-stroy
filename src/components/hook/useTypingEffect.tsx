import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 1) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
    setShowFullText(false);
  }, [text]);

  useEffect(() => {
    if (index < text.length && !showFullText) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, showFullText]);

  const handleClick = () => {
    setShowFullText(true);
    setDisplayedText(text);
  };

  return { displayedText, handleClick };
};
