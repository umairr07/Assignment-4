const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5 ">
        <div className="flex justify-center items-center gap-10 cursor-pointer">
          <h1 className="font-bold text-4xl pb-2">HootSuite</h1>
          <ul className="flex gap-10 text-xl font-bold">
            <li>Platform</li>
            <li>Plans</li>
            <li>Enterprises</li>
            <li>Resources</li>
            <li>Education</li>
          </ul>
        </div>

        <ul className="flex gap-10 text-xl justify-center items-center cursor-pointer">
          <li>Contact Us</li>
          <li>Log In</li>
          <button className="font-bold bg-green-600 text-white p-2">
            Sign Up
          </button>
        </ul>
      </div>
    </>
  );
};

export default Header;
