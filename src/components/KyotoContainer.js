const KyotoContainer = ({
  destinationDescription,
  destinationTitle,
  kyotoDescription,
}) => {
  return (
    <div className="self-stretch rounded-[10.52px] bg-whitesmoke overflow-hidden flex flex-row py-[1rem] px-[1.38rem] items-start justify-start gap-[1.5rem] text-left text-[2rem] text-black font-roboto md:flex-col">
      <img
        className="self-stretch relative rounded-[5.26px] max-h-full w-[14rem] object-cover md:w-full"
        alt=""
        src={destinationDescription}
      />
      <div className="flex-1 flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
        <b className="self-stretch relative leading-[2.73rem]">
          {destinationTitle}
        </b>
        <div className="self-stretch relative text-[1.21rem] leading-[1.97rem] text-slategray">
          <span>{kyotoDescription}</span>
          <span className="text-black">view full story</span>
        </div>
      </div>
    </div>
  );
};

export default KyotoContainer;
