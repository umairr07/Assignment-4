const Header = () => {
  return (
    <>
      <div className="p-2">
        <p className="text-3xl font-semibold text-[#991F48]">Family Wellness</p>
        <p className="text-">Massage Therapy</p>
      </div>
      <div className="p-2">
        <ul className="flex justify-between bg-[#991F48] text-[#fff] p-2">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>FAQ</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
