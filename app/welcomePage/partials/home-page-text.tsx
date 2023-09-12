import React from "react";

function HomePageText() {
  return (
    <div className="flex col-span-2 relative justify-center mt-10">
      <div className="justify-center">
        <p className="text-black-500 text-[40px] font-light text-center mb-6">
          Unique, Handmade, Shiny{" "}
        </p>
        <p className="text-black-500 text-[40px] font-light text-center mb-6">
          <span className="text-black-500 text-[40px] font-medium italic">
            ceramic{" "}
          </span>
          products produced with
          <span className="text-black-500 text-[40px] font-medium italic"> care</span>
        </p>
      </div>
    </div>
  );
}

export default HomePageText;
