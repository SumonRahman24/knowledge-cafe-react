import { useEffect } from "react";
import { useState } from "react";
import DisplayData from "./DisplayData";
import BookMarkBlog from "./BookMarkBlog";
import ReadMarkBtn from "./ReadMarkBtn";

const LoadData = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarkBtn, setBookMarkBtn] = useState([]);
  const [readMarkBtn, setReadMarkBtn] = useState([]);

  const handleBookMark = (action) => {
    const newBookMark = [...bookMarkBtn, action];
    setBookMarkBtn(newBookMark);
  };

  const handlereadbtn = (action) => {
    const newMartBtn = [...readMarkBtn, action];
    setReadMarkBtn(newMartBtn);
  };

  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="flex gap-4 container m-auto px-20">
      <div className="space-y-10">
        {blogs.map((blog) => (
          <DisplayData
            handleBookMark={handleBookMark}
            handlereadbtn={handlereadbtn}
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
      <div>
        <div className="bg-[#EFEDFD] p-4 rounded-lg">
          <ReadMarkBtn readMarkBtn={readMarkBtn} />
        </div>
        <div className="sticky top-0 h-[100vh] bg-[#F3F3F3] w-96 ">
          <BookMarkBlog bookMarkBtn={bookMarkBtn} />
        </div>
      </div>
    </div>
  );
};

export default LoadData;
