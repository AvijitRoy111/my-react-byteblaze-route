import asset from "../../../assets/wave.svg";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div>
      <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]">
        <Hero></Hero>
        <img className="absolute bottom-0 w-full" src={asset} alt="" />
      </div>
    </div>
  );
};

export default Home;
