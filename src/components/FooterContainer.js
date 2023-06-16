const FooterContainer = () => {
  return (
    <div className="self-stretch bg-black flex flex-row py-[2.5rem] px-[5rem] items-start justify-start gap-[5rem] [border-top:1px] [border-top-style:solid] border-t-darkslategray text-left text-[1rem] text-darkgray font-roboto lg:py-[1.5rem] lg:px-[1.25rem] lg:box-border lg:[border-top:1px] lg:[border-top-style:solid] lg:border-t-darkslategray lg:gap-[1.25rem] md:flex-col md:p-[2.5rem] md:box-border md:gap-[1.25rem] md:mt-[1.88rem] sm:py-[1.88rem] sm:px-[1.5rem] sm:box-border">
      <div className="w-[20.75rem] flex flex-col items-start justify-start gap-[1rem] lg:w-[20.56rem]">
        <div className="relative leading-[1.5rem] lg:text-[0.81rem]">
          Kabelenga Inc., 2nd Floor, New York, NY 10016
        </div>
        <img
          className="relative w-[9.9rem] h-[2.29rem]"
          alt=""
          src="/group-56.svg"
        />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[1.25rem] text-white md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[2.5rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.88rem] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-[1.25rem] leading-[1.69rem] font-medium">
            Company
          </div>
          <div className="self-stretch relative">About Us</div>
          <div className="self-stretch relative">News</div>
          <div className="self-stretch relative">Careers</div>
          <div className="self-stretch relative">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.88rem] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-[1.25rem] leading-[1.69rem] font-medium">
            Support
          </div>
          <div className="self-stretch relative">FAQ</div>
          <div className="self-stretch relative">US Office</div>
          <div className="self-stretch relative">Asia Office</div>
          <div className="self-stretch relative">Help Center</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-[1.25rem] leading-[1.69rem] font-medium">
            More
          </div>
          <div className="self-stretch relative">Become a partner</div>
          <div className="self-stretch relative">Partner Support</div>
          <div className="self-stretch relative">Driver Requirements</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-[1.25rem] leading-[1.69rem] font-medium">
            App
          </div>
          <div className="self-stretch relative">Report Bug</div>
          <div className="self-stretch relative">App Helpdesk</div>
          <div className="self-stretch relative">Mobile app links</div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
