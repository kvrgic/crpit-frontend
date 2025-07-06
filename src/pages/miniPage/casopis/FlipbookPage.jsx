import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";


const FlipbookPage = () => {
  const [showBook, setShowBook] = useState(false);
  const bookRef = useRef();
  const totalPages = 40;

    useEffect(() => {
    if (!showBook) return;

    const handleKeyDown = (e) => {
      if (!bookRef.current) return;

      const flip = bookRef.current.pageFlip();
      if (e.key === "ArrowLeft") {
        flip.flipPrev();
      } else if (e.key === "ArrowRight") {
        flip.flipNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showBook]);

  const renderPages = () => {
    const pages = [];
    for (let i = 2; i <= totalPages; i++) {
      pages.push(
        <div key={i} className="w-full h-full">
          <img src={`/pages/${i}.jpg`} alt={`Page ${i}`} className="w-full h-full object-cover"/>
        </div>
      );
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 flex justify-center items-center">
      {!showBook ? (
        <div className="shadow-2xl shadow-black/60">
          <img src="/pages/1.jpg" alt="Naslovnica" className="w-full max-w-[500px] aspect-[5/7] object-contain md:object-cover cursor-pointer" 
          onClick={() => setShowBook(true)}/> 
        </div>
      ) : (
        <HTMLFlipBook
          ref={bookRef}
          width={500}
          height={700}
          size="stretch"
          minWidth={200}
          maxWidth={500}
          minHeight={300}
          maxHeight={700}
          drawShadow={true}
          maxShadowOpacity={0.5}
          showCover={false}
          useMouseEvents={true}
          className="w-full h-full shadow-2xl shadow-black/60"
        >
          {renderPages()}
        </HTMLFlipBook>
      )}
    </div>
  );
};

export default FlipbookPage;
