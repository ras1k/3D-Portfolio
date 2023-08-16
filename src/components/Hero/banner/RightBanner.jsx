import { bannerImg } from "../../../assets";

const RightBanner = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <img
        className=" w-[900px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[400px] h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#915eff3b] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner