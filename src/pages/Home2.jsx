import img1 from "../assets/homepage/2.jpg";
import bulb from "../assets/homepage/bulb.png";
import message from "../assets/homepage/message.png";
import ticks from "../assets/homepage/ticks.png";
import settings from "../assets/homepage/settings.png";
import right from "../assets/homepage/right-arrow.png";
import ImageTile from "../components/ImageTile";
import image1 from "../assets/homepage/3.jpg";
import image2 from "../assets/homepage/4.jpg";
import image3 from "../assets/homepage/5.jpg";
import image4 from "../assets/homepage/6.jpg";
import ceo from "../assets/homepage/7.png";

const Home2 = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* about us section */}
      <div className="flex justify-evenly p-[6rem] bg-black items-center relative">
        <div className="relative z-10">
          <img
            src={img1}
            alt="main image"
            className="w-[30rem] absolute top-[-1.2rem] left-[-1.5rem] z-0 opacity-[60%] brightness-75 rounded-xl sm:left-[-3.5rem]"
          />
          <img
            src={img1}
            alt="main image"
            className="w-[30rem] absolute top-[-2.2rem] left-[-2.5rem] z-1 opacity-[60%] brightness-75 rounded-xl sm:left-[-4.5rem]"
          />
          <img
            src={img1}
            alt="main image"
            className="w-[30rem] relative z-2 rounded-xl sm:left-[-1.5rem]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-light-green font-bold text-xl">
            About us
          </h1>
          <h1 className="text-white font-serif font-semibold text-[44px]">
            The core mission <br /> behind all our <br /> work
          </h1>
          <p className="text-white font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus <br />{" "}
            ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <div className="flex gap-[2rem] mt-3">
            <div className="flex flex-col justify-center gap-1">
              <div className="flex gap-1">
                <h1 className="font-serif font-semibold text-light-green text-3xl">
                  330
                </h1>
                <h1 className="font-serif font-semibold text-light-green text-xl">
                  +
                </h1>
              </div>
              <p className="text-white font-thin">Companies helped</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <div className="flex gap-1">
                <h1 className="font-serif font-semibold text-light-green text-3xl">
                  230
                </h1>
                <h1 className="font-serif font-semibold text-light-green text-xl">
                  +
                </h1>
              </div>
              <p className="text-white font-thin">Revenue generated</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <input
              type="text"
              className="bg-white rounded-full p-3 w-[14rem] h-[3rem] text-end"
            />
            <h1 className="absolute text-black md:right-[26rem] md:top-[32.1rem] text-[17px] sm:top-[44.8rem] sm:right-[9rem]">
              Start your Free Trial
            </h1>
            <button className="bg-black flex justify-center items-center rounded-full relative bottom-[3rem] left-2 w-[2rem] h-[2rem] p-2 text-white">
              {">"}
            </button>
          </div>
        </div>
      </div>
      {/* Process section */}
      <div className="flex flex-col gap-[1rem] justify-center items-center py-[5rem]">
        <h1 className="font-serif text-light-green text-xl font-semibold">
          Process
        </h1>
        <p className="text-center font-serif text-5xl font-semibold">
          Process that moves <br /> things forward
        </p>
        <div className="flex gap-[2rem] items-center p-2 sm:flex-wrap sm:justify-center">
          <div className="border-2 rounded-xl p-[1.5rem]">
            <div className="flex flex-col gap-2">
              <div className="flex gap-[1rem] justify-center items-center">
                <div className="bg-black rounded-full flex w-[3rem] h-[3rem] items-center justify-center">
                  <img src={bulb} alt="vector" className="scale-50" />
                </div>
                <h1 className="text-xl font-serif font-bold">Ideate</h1>
              </div>
              <p className="font-thin">
                The ideation process is <br /> a crucial phase in the <br />{" "}
                design process where <br /> creative thinking and <br />
                brainstorming
              </p>
            </div>
          </div>
          <img src={right} alt="right arrow" />
          <div className="border-2 rounded-xl p-[1.5rem]">
            <div className="flex flex-col gap-2">
              <div className="flex gap-[1rem] justify-center items-center">
                <div className="bg-black rounded-full flex w-[3rem] h-[3rem] items-center justify-center">
                  <img src={message} alt="vector" className="scale-50" />
                </div>
                <h1 className="text-xl font-serif font-bold">Research</h1>
              </div>
              <p className="font-thin">
                Research is a critical <br /> component of the design <br />{" "}
                process, helping <br /> designers understand <br /> the problem
              </p>
            </div>
          </div>
          <img src={right} alt="right arrow" />
          <div className="border-2 rounded-xl p-[1.5rem]">
            <div className="flex flex-col gap-2">
              <div className="flex gap-[1rem] justify-center items-center">
                <div className="bg-black rounded-full flex w-[3rem] h-[3rem] items-center justify-center">
                  <img src={settings} alt="vector" className="scale-50" />
                </div>
                <h1 className="text-xl font-serif font-bold">Create</h1>
              </div>
              <p className="font-thin">
                Designing a process <br /> involves several key <br /> steps to
                ensure clarity, <br /> efficiency, successful <br />{" "}
                implementation
              </p>
            </div>
          </div>
          <img src={right} alt="right arrow" />
          <div className="border-2 rounded-xl p-[1.5rem]">
            <div className="flex flex-col gap-2">
              <div className="flex gap-[1rem] justify-center items-center">
                <div className="bg-black rounded-full flex w-[3rem] h-[3rem] items-center justify-center">
                  <img src={ticks} alt="vector" className="scale-50" />
                </div>
                <h1 className="text-xl font-serif font-bold">Testing</h1>
              </div>
              <p className="font-thin">
                Testing is a crucial phase <br /> in the design process to{" "}
                <br /> ensure that the product <br /> or system meets the <br />{" "}
                specified requirements
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* showcase section */}
      <div className="flex flex-col justify-center items-center gap-[5rem] py-[1rem] sm:px-4">
        <h1 className="font-serif font-semibold text-5xl">Recent Showcases</h1>
        <div className="flex gap-[7rem] items-center justify-center">
          <div className="flex flex-col gap-[3rem]">
            <ImageTile
              url={image1}
              title={"Creative UI design"}
              discription={"Creative UI design"}
            />
            <ImageTile
              url={image3}
              title={"UI design"}
              discription={"Creative Rebranding for logo"}
            />
          </div>
          <div className="flex flex-col gap-[3rem] relative pt-[10rem]">
            <ImageTile
              url={image2}
              title={"Creative UI design"}
              discription={"Creative UI design"}
            />
            <ImageTile
              url={image4}
              title={"UI design"}
              discription={"Creative Rebranding for logo"}
            />
          </div>
        </div>
      </div>
      {/* CEO section */}
      <div className="flex flex-col justify-center items-center p-[3rem]">
        <div className="flex flex-col justify-center items-center p-[2rem] bg-light-gray rounded-xl">
          <img src={ceo} alt="img" className="rounded-full w-[5rem]" />
          <p className="font-serif font-bold my-4 sm:text-center">
            “Be genuine in your assessment, and provide constructive feedback to
            benefit both potential <br /> customers and the company providing
            the product or service.”
          </p>
          <h1 className="font-serif font-bold">Jacqueline Miller</h1>
          <p className="font-thin mb-[1rem]">CEO of an eduport</p>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">
              <h1>{"<"}</h1>
            </div>
            <div className="rounded-full w-8 h-8 flex items-center justify-center border-[1px] border-black">
              <h1>{">"}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
