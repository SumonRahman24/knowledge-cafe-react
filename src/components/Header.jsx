const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center pt-3 container m-auto px-20">
        <div>
          <h1 className="font-bold text-3xl">Knowledge Cafe</h1>
        </div>
        <div>
          <img
            className="w-14"
            src="../../public/images/Ellipse 1.png"
            alt="logo image"
          />
        </div>
      </nav>
      <div className="divider container m-auto px-20 mt-4 mb-3"></div>
    </>
  );
};

export default Header;
