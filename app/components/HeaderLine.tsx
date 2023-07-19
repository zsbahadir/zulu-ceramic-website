import React from 'react'
import Image from 'next/image';

import trademark from "@/app/public/images/trademark.png";


function HeaderLine() {
  return (
    <div>
          {/* logo */}
      <Image
        src={trademark}
        alt="Trade Mark"
        className="w-[83px] h-[80px] left-0 top-0 absolute rounded-2xl"
      />

      {/* Pink Line */}
      <div className="w-[870px] h-[0px] left-[62px] top-[80px] absolute border th"></div>
    </div>
  )
}

export default HeaderLine;