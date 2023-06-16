const StoriesContainer = ({
  rectangle478,
  thriller,
  strangeWall,
  rectangle4781,
  action,
  aircraft9000,
  rectangle4782,
  romance,
  tillWeAge,
}) => {
  return (
    <div className="self-stretch bg-white flex flex-row p-[1.88rem] items-start justify-start gap-[3rem] text-left text-[1rem] text-studio-darkmode-maincta-457eff font-source-code-pro md:flex-col">
      <div className="flex-1 rounded-3xs bg-white box-border h-[20.13rem] overflow-hidden flex flex-col items-start justify-start gap-[0.25rem] border-[0.7px] border-solid border-studio-lightmode-midseparator-dee3eb md:flex-[unset] md:self-stretch">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[15rem] shrink-0 object-cover"
          alt=""
          src={rectangle478}
        />
        <div className="self-stretch flex-1 flex flex-col p-[1rem] items-start justify-between">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="relative uppercase font-semibold">
                  {thriller}
                </div>
              </div>
              <b className="self-stretch relative text-[1.63rem] tracking-[0.02em] leading-[2.13rem] font-roboto text-studio-darkmode-exportbg-1a202e">
                {strangeWall}
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-3xs bg-white box-border h-[20.13rem] overflow-hidden flex flex-col items-start justify-start gap-[0.25rem] border-[0.7px] border-solid border-studio-lightmode-midseparator-dee3eb md:flex-[unset] md:self-stretch">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[15rem] shrink-0 object-cover"
          alt=""
          src={rectangle4781}
        />
        <div className="self-stretch flex-1 flex flex-col p-[1rem] items-start justify-between">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="relative uppercase font-semibold">{action}</div>
              </div>
              <b className="self-stretch relative text-[1.63rem] tracking-[0.02em] leading-[2.13rem] font-roboto text-studio-darkmode-exportbg-1a202e">
                {aircraft9000}
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-3xs bg-white box-border h-[20.13rem] overflow-hidden flex flex-col items-start justify-start gap-[0.25rem] border-[0.7px] border-solid border-studio-lightmode-midseparator-dee3eb md:flex-[unset] md:self-stretch">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[15rem] shrink-0 object-cover"
          alt=""
          src={rectangle4782}
        />
        <div className="self-stretch flex-1 flex flex-col p-[1rem] items-start justify-between">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="relative uppercase font-semibold">
                  {romance}
                </div>
              </div>
              <b className="self-stretch relative text-[1.63rem] tracking-[0.02em] leading-[2.13rem] font-roboto text-studio-darkmode-exportbg-1a202e">
                {tillWeAge}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesContainer;
