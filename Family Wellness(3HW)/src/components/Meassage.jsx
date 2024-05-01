function Meassage() {
  return (
    <div className="bg-[#991F48] p-5 m-auto text-[#fff] flex flex-col justify-center items-center">
      <h1 className="text-3xl pt-5">Think Health. Think Massage</h1>
      <p className="pt-5 w-[50%] text-center">
        We are open 9am to 6pm; Monday through Sunday. If you would like to
        schedule an appointment with us, please call at 987-654-3210 today!
      </p>
      <div className="pt-5 flex gap-5">
        <button className="border-white border-2 p-3">
          Learn More About Us
        </button>
        <button className="border-white border-2 p-3">Contact Us Today</button>
      </div>
    </div>
  );
}

export default Meassage;
