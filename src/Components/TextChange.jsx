import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "am TIYASHA.",
    "stay curious.",
    "enjoy debugging."
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        setCurrentText(texts[index].substring(0, endValue));
        setEndValue((prev) => prev + 1);

        if (endValue >= texts[index].length) {
          setIsForward(false);
        }
      } else {
        setCurrentText(texts[index].substring(0, endValue));
        setEndValue((prev) => prev - 1);

        if (endValue <= 0) {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div className="transition ease duration-300">
      Hi! I {currentText}
    </div>
  );
};

export default TextChange;



