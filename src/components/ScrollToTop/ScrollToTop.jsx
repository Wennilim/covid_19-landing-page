import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight * 0.5) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      });
    };
  });

  return (
    showBtn && (
      <AiOutlineArrowUp
        color="white"
        className="fixed bottom-10 right-5 z-30 animate-bounce rounded-full w-14 h-14  bg-[#FA5652] p-3 shadow-sm"
        onClick={goToTop}
      />
    )
  );
};

export { ScrollToTop };
