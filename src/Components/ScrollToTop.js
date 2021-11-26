import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top d-flex justify-content-end">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img
            style={{ cursor: "pointer" }}
            src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
            alt="Go to top"
          />
        </div>
      )}
    </div>
  );
}
