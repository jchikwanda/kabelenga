import KabelengaContainer from "../components/KabelengaContainer";
import StoriesContainer from "../components/StoriesContainer";
import FooterContainer from "../components/FooterContainer";

const Main = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[100%!important] flex flex-col items-start justify-start text-center text-[2rem] text-black font-roboto">
      <KabelengaContainer />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch bg-white flex flex-col items-center justify-start">
          <b className="self-stretch relative leading-[3.68rem]">All Stories</b>
        </div>
        <StoriesContainer
          rectangle478="/rectangle-478@2x.png"
          thriller="Thriller"
          strangeWall="Strange Wall"
          rectangle4781="/rectangle-4781@2x.png"
          action="Action"
          aircraft9000="Aircraft 9000"
          rectangle4782="/rectangle-4782@2x.png"
          romance="Romance"
          tillWeAge="Till We Age"
        />
        <StoriesContainer
          rectangle478="/rectangle-4783@2x.png"
          thriller="adventure"
          strangeWall="Toy Car"
          rectangle4781="/rectangle-4784@2x.png"
          action="Horror"
          aircraft9000="No Escape"
          rectangle4782="/rectangle-4785@2x.png"
          romance="Romance"
          tillWeAge="Till My Last Breath"
        />
        <StoriesContainer
          rectangle478="/rectangle-4786@2x.png"
          thriller="Thriller"
          strangeWall="No Need for Speed"
          rectangle4781="/rectangle-4787@2x.png"
          action="scifi"
          aircraft9000="The Stranger"
          rectangle4782="/rectangle-4788@2x.png"
          romance="scifi"
          tillWeAge="Kid AI"
        />
      </div>
      <FooterContainer />
    </div>
  );
};

export default Main;
