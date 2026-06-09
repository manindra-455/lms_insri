import React from "react"

import Navbar from "../../components/wishlist/navbar.jsx";
import BookList from "../../components/wishlist/booklist.jsx";


export default function Wishlist() {
  return (
  
    <div className="h-screen flex flex-col rounded-[20px] bg-[#F5F5F5]  mx-auto bg-linear-to-r from-gray-150 to-yellow-100 min-h-screen">
     <div className="shrink-0">
        <Navbar/>
      
      </div>
      <div className="flex-1 overflow-y-auto px-4">
      <BookList />
      </div>
    </div>
    
  );
}

