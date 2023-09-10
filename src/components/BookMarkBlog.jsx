import React from "react";

const BookMarkBlog = ({ bookMarkBtn, readMarkBtn }) => {
  const heading = bookMarkBtn.map((item) => {
    return (
      <p className="mb-3 p-2 rounded-lg bg-[#FFFFFF] " key={item.id}>
        {item.heading}
      </p>
    );
  });

  return (
    <div>
      <div className="mt-4 ml-4 ">
        <div>
          <h2 className="text-xl font-bold ">
            Bookmarked Blogs :{bookMarkBtn.length}
          </h2>
        </div>

        <div className="mr-4 mt-4">
          <h2 className="text-md font-bold ">{heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookMarkBlog;
