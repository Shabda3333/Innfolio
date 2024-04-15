import InnfolioLogo from "../assets/innfolio.svg";

const ThirdLayout = ({ children }) => {
  return (
    <div className="bg-[#141414] w-full h-[2000px] overflow-hidden pb-10">
      <div className="relative">
        <div className="top-gradient w-[58rem] h-[58rem] absolute top-[-610px] left-[-270px] rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
        <div className="bottom-gradient w-[58rem] h-[58rem] rotate-[56.83deg] absolute bottom-[-2000px] right-[-530px] rounded-full gradient-one z-10 blur-[150px] opacity-40"></div>
        <img
          src={InnfolioLogo}
          alt="logo"
          className="absolute top-[3.625rem] left-[7.5rem] bottom-[3.625rem]"
        />
      </div>
      {children}
    </div>
  );
};

export default ThirdLayout;
