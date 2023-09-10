const DisplayData = (props) => {
  const { author, heading, img } = props.blog;
  return (
    <>
      <div className="card w-[45rem]  bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={author.img} />
                </div>
              </div>
              <div>
                <h3>{author.name}</h3>
                <p>{author.date + " " + author.days}</p>
              </div>
            </div>
            <div className="flex">
              {`${author.read_time} min read`}

              <div>
                <button onClick={() => props.handleBookMark(props.blog)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M17.593 3.32188C18.693 3.44988 19.5 4.39888 19.5 5.50688V20.9999L12 17.2499L4.5 20.9999V5.50688C4.5 4.39888 5.306 3.44988 6.407 3.32188C10.1232 2.89051 13.8768 2.89051 17.593 3.32188Z"
                      stroke="#111111"
                      strokeOpacity="0.6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-2xl">{heading}</h2>

          <div className="flex  gap-3 ">
            {" "}
            <div>#beginners</div>
            <div>#programming</div>
          </div>
          <button
            onClick={() => props.handlereadbtn(props.blog)}
            className="text-[#6047EC] text-start"
          >
            Mark as read
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayData;
