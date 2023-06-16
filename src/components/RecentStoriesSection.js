import KyotoContainer from "./KyotoContainer";

const RecentStoriesSection = () => {
  return (
    <div className="self-stretch h-[40.25rem] flex flex-col items-center justify-start gap-[0.63rem] text-center text-[2rem] text-black font-roboto">
      <div className="self-stretch flex flex-col items-center justify-start">
        <b className="self-stretch relative leading-[3.68rem]">
          Recent Stories
        </b>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.31rem] text-left lg:flex-col">
        <a
          className="[text-decoration:none] self-stretch flex-1 rounded-[10.52px] bg-whitesmoke flex flex-col pt-[0rem] px-[1.31rem] pb-[1.31rem] items-start justify-end gap-[1.31rem] text-[inherit] lg:flex-[unset] lg:self-stretch"
          href="#"
        >
          <img
            className="self-stretch flex-1 relative rounded-[5.26px] max-w-full overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
            alt=""
            src="/unsplashrezbvcvaspi@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[2.73rem]">
              Mission Switzerland
            </b>
            <div className="self-stretch relative text-[1.21rem] leading-[1.97rem] text-slategray">
              <span>
                Marvel on the beauty of the iconic Matterhorn. Find the best
                places to stay that has the best views of this peak...
              </span>
              <span className="text-black">view full story</span>
            </div>
          </div>
        </a>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.94rem] text-[1.82rem] lg:flex-[unset] lg:self-stretch">
          <div className="self-stretch rounded-[10.52px] bg-whitesmoke overflow-hidden flex flex-row py-[1rem] px-[1.38rem] items-start justify-start gap-[1.5rem] md:flex-col">
            <img
              className="self-stretch relative rounded-[5.26px] max-h-full w-[14.06rem] object-cover md:w-full"
              alt=""
              src="/tuscany-card-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
              <b className="self-stretch relative leading-[2.73rem]">
                Project Tuscany
              </b>
              <div className="self-stretch relative text-[1.21rem] leading-[1.97rem] text-slategray">
                <span>
                  The amazing Tuscany is home to famous Renaissance art and
                  architecture and a vast scenic...
                </span>
                <span className="text-black">view full story</span>
              </div>
            </div>
          </div>
          <KyotoContainer
            destinationDescription="/image-6@2x.png"
            destinationTitle="Kyoto Drift"
            kyotoDescription="Kyoto is well known for its temples, gardens, Shinto shrines and wooden houses. It’s time to..."
          />
          <KyotoContainer
            destinationDescription="/image-5@2x.png"
            destinationTitle="Now Way to Norway"
            kyotoDescription="Featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for..."
          />
        </div>
      </div>
    </div>
  );
};

export default RecentStoriesSection;
