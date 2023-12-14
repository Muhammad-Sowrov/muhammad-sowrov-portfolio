import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [topBtn, setTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {topBtn && (
        <FaAngleDoubleUp
          onClick={top}
          className="text-xl md:text-4xl text-white fixed bottom-4 right-5 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ScrollTop;