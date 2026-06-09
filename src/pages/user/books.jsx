import React from "react"



import BookList from "../../components/books/booklist.jsx";
import Navbar1 from "../../components/books/navbar.jsx";



export default function Books() {
    

  return (

    <div className="h-screen flex flex-col rounded-[20px] bg-[#F5F5F5]  mx-auto bg-linear-to-r from-gray-150 min-h-screen to-yellow-100">
      
      <div className="shrink-0">
        <Navbar1 />
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        <div className="py-2">
          <h1 className="text-2xl font-semibold text-gray-800">
            Books
          </h1>
        </div>

        <BookList />
      </div>

    </div>
  );
}
    
    
  

