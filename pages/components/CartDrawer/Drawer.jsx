import { useState } from "react";

export default function Drawer() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  return (
    <>
    { !isDrawerVisible ? (
        <button 
          onClick={() => setDrawerVisible(!isDrawerVisible)} 
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" 
              fill="currentColor" 
              fill-rule="evenodd" 
              clip-rule="evenodd">
            </path>
          </svg>
        </button>
      ) : (
        <>
        <button  
          onClick={() => setDrawerVisible(!isDrawerVisible)} 
          className="fixed z-50 flex items-center cursor-pointer right-10 top-6"> 

          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="40" 
            height="40"
            >
          <path fill="none" d="M0 0h24v24H0z"/>
          <path 
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" 
            fill="rgba(255,255,255,1)"/>
          </svg>
          </button>
        </>
      )}

      <div
        className={`top-0 right-0 w-80 bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          isDrawerVisible ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-xl font-semibold text-white">
          this is the drawer
        </h3>
      </div>  
    </>
  );
}