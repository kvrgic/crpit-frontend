import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipbookPage = () => {
  const [showBook, setShowBook] = useState(false);
  const totalPages = 40;

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
          <img src="/pages/1.jpg" alt="Naslovnica" className="w-[500px] h-[700px] object-cover" 
          onClick={() => setShowBook(true)}/> 
        </div>
      ) : (
        <HTMLFlipBook
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
