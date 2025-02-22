import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import BookService from "../Services/Book.service";
import Layout from "../components/Layout";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    BookService.getBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 5) % books.length);
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 5) % books.length);
  };

  return (
    <Layout>
      <div className="bg-blue-100 p-6">
        {/* หนังสือใหม่ รายสัปดาห์ */}
        <div className="relative overflow-hidden w-full px-4">
          <h1 className="text-xl font-bold ml-5 mb-4">📚 หนังสือใหม่ รายสัปดาห์</h1>
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100 / 5}%)` }}>
            {books.map((book) => (
              <div key={book._id.$oid} className="w-1/5 flex-none p-2">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <img src={book.book_photo} alt={book.title} className="w-full h-80 object-cover rounded-md mb-2" />
                  <h3 className="text-lg font-semibold text-center">{book.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* หนังสือยอดนิยม ตลอดกาล */}
        <div className="relative overflow-hidden w-full px-4 mt-10">
          <h1 className="text-xl font-bold ml-5 mb-4">🔥 หนังสือยอดนิยม ตลอดกาล</h1>
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex2 * 100 / 5}%)` }}>
            {books.map((book) => (
              <div key={book._id.$oid} className="w-1/5 flex-none p-2">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <img src={book.book_photo} alt={book.title} className="w-full h-80 object-cover rounded-md mb-2" />
                  <h3 className="text-lg font-semibold text-center">{book.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextSlide2} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* จัดอันดับหนังสือ/นักอ่าน */}
        <div className="w-full px-4 mt-10">
          <h1 className="text-xl font-bold ml-5 mb-4">🏆 จัดอันดับหนังสือ/นักอ่าน</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-center mb-2">📖 หนังสือยอดนิยม</h2>
              {books.slice(0, 5).map((book) => (
                <div key={book._id.$oid} className="flex items-center p-2 border-b last:border-b-0">
                  <img src={book.book_photo} alt={book.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div>
                    <h3 className="text-md font-semibold">{book.title}</h3>
                    <p className="text-gray-600 text-sm">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-center mb-2">👨‍💻 นักอ่านที่อ่านเยอะที่สุด</h2>
              {/* สามารถเพิ่มข้อมูลนักอ่านที่นี่ */}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-center mb-2">⭐ นักอ่านที่อ่านไวที่สุด</h2>
              {/* สามารถเพิ่มข้อมูลรีวิวที่นี่ */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookList;
