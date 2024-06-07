'use client'


import { useState } from 'react';
import Link from 'next/link'; 

function BurgerMenu({ icon, textItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
      >
        {icon} 
      </button>

      {isOpen && (
        <div className="absolute w-[450px] top-6 left-[-360%] mt-8 bg-[#7C80E6] p-4 rounded-xl">
          {textItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className=" block text-white py-2 m-3 z-50">{item.text}</div><hr/> 
            </Link>
          ))}



          
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
