const KabelengaContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1.19rem] text-center text-[1rem] text-black font-roboto">
      <div className="self-stretch bg-white shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] h-[5.63rem] flex flex-row py-[0.13rem] px-[5rem] box-border items-center justify-center lg:pl-[5rem] lg:pr-[5rem] lg:box-border md:pl-[2.5rem] md:pr-[2.5rem] md:box-border sm:pl-[1.5rem] sm:pr-[1.5rem] sm:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <button className="cursor-pointer [border:none] py-[1.38rem] px-[0rem] bg-[transparent] overflow-hidden flex flex-row items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[2.94rem] h-[2.31rem]"
              alt=""
              src="/vector.svg"
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.5rem] font-bold font-roboto text-black text-center inline-block w-[8.44rem] shrink-0">
              Kabelenga
            </button>
          </button>
          <div className="flex flex-row items-center justify-end gap-[1.13rem]">
            <div className="flex flex-row items-center justify-center gap-[0.63rem] md:hidden">
              <div className="flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[1.56rem] h-[1.22rem]"
                  alt=""
                  src="/vector1.svg"
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1rem] font-roboto text-darkslategray text-center inline-block">
                  Home
                </button>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[1.37rem] h-[1.37rem]"
                  alt=""
                  src="/vector2.svg"
                />
                <div className="relative">Posts</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[1.37rem] h-[1.56rem]"
                  alt=""
                  src="/vector3.svg"
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1rem] font-roboto text-black text-center inline-block">
                  Notifications
                </button>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[2.88rem] h-[2.88rem] hidden md:flex">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded" />
              <img
                className="absolute top-[1.06rem] left-[0.82rem] w-[1.24rem] h-[0.75rem]"
                alt=""
                src="/hamburger.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-col py-[3.13rem] px-[0.94rem] items-center justify-center gap-[1.5rem] text-[1.5rem] md:pl-[0.94rem] md:pr-[0.94rem] md:box-border sm:pl-[0.94rem] sm:pr-[0.94rem] sm:box-border">
        <div className="self-stretch relative">Kabelenga</div>
        <b className="self-stretch relative text-[3rem]">
          Telling Stories Without End
        </b>
      </div>
    </div>
  );
};

export default KabelengaContainer;
