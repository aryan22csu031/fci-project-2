import img1 from "../assets/aboutus/1.jpg";
import img2 from "../assets/aboutus/7.png";
import tick from "../assets/aboutus/tick.png";
import img3 from "../assets/aboutus/2.jpg";
import img4 from "../assets/aboutus/profiles.png";
import img5 from "../assets/aboutus/3.jpg";
import img6 from "../assets/aboutus/4.jpg";
import img7 from "../assets/aboutus/5.jpg";
import img8 from "../assets/aboutus/6.jpg";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import ll from "../assets/linkedin.png";

const Aboutus = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center m-[3rem]">
        <div className="section-1 flex justify-center p-[3rem] rounded-2xl bg-black text-white relative">
          <div className="flex flex-col gap-2">
            <p className="text-white font-thin">
              Pleasure and so read the was hope.
            </p>
            <h1 className="font-serif font-bold text-5xl">
              Ready to take <br />{" "}
              <span className="text-light-green">your business</span>
              <br /> to the next level?
            </h1>
            <p className="text-white mt-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et
              <br /> massa libero egestas malesuada viverra gravida libero{" "}
              <br /> cursus nulla leo pulvinar.
            </p>
            <div className="flex items-center gap-[1rem] mt-[2rem]">
              <img src={img2} alt="profile" className="w-[5rem] rounded-full" />
              <div className="flex flex-col">
                <h1 className="font-serif font-bold">Rated 4.9/5 stars</h1>
                <p className="text-white">★★★★★</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={img1}
              className="lg:w-[26rem] lg:h-[28rem] rounded-xl z-10 absolute top-[5.5rem] left-[5rem] sm:h-[20rem]"
              alt="img1"
            />
            <img
              src={img1}
              className="lg:w-[26rem] lg:h-[28rem] rounded-xl z-9 absolute top-[4rem] left-[3rem] sm:h-[20rem] opacity-40"
              alt="img1"
            />
            <img
              src={img1}
              className="lg:w-[26rem] lg:h-[28rem] rounded-xl z-8 top-[1.5rem] left-[1rem] sm:h-[20rem] opacity-30 relative"
              alt="img1"
            />
          </div>
        </div>

        <div className="flex gap-[4rem] mt-[6rem]">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="font-serif font-semibold text-3xl">200+</h1>
            <p className="font-bold">We'r a family</p>
            <p className="text-center font-thin">
              Speedily say has suitable disposal add boy. <br /> On fourth doubt
              miles of child. Exercise joy <br /> man children rejoiced.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="font-serif font-semibold text-3xl">99%</h1>
            <p className="font-bold">Graphic Design</p>
            <p className="text-center font-thin">
              Perceived end knowledge certainly day <br /> sweetness why
              cordially. Ask a quick six <br /> seven offer see among.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="font-serif font-semibold text-3xl">1.5M+</h1>
            <p className="font-bold">Digital Marketing</p>
            <p className="text-center font-thin">
              Rooms oh fully taken by worse do. Points <br /> afraid but may end
              law lasted. Was out <br /> laughter raptures returned outweigh.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[3rem] p-[5rem] gap-[3rem] bg-black">
          <div className="flex flex-col gap-2">
            <h1 className="text-light-green font-serif font-bold">Our Mission</h1>
            <p className="font-serif font-bold text-white text-4xl">
              Boost your with <br /> your business.
            </p>
            <p className="font-thin text-white">
              He moonlights difficult engrossed it, sportsmen. Interested has{" "}
              <br /> all Devonshire difficulty gay assistance joy.
            </p>
            <div className="flex relative lg:gap-[8rem] mt-3 sm:gap-[6rem]">
              <ul className="flex flex-col list-none gap-[1rem] text-white">
                <li className="flex items-center gap-2 text-sm">
                  <img src={tick} alt="tick" className="w-[1.2rem]" /> Moonlight
                  newspaper up its <br /> enjoyment
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <img src={tick} alt="tick" className="w-[1.2rem]" /> She new
                  course gets living.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <img src={tick} alt="tick" className="w-[1.2rem]" /> She new
                  course gets living.
                </li>
              </ul>
              <ul className="flex flex-col flex-wrap list-none gap-[1rem] text-white">
                <li className="flex items-center gap-2 text-sm">
                  <img src={tick} alt="tick" className="w-[1.2rem]" />
                  Rooms oh fully taken by <br /> worse.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <img src={tick} alt="tick" className="w-[1.2rem]" />
                  Percieved end certainly day.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <img src={tick} alt="tick" className="w-[1.2rem]" />
                  Preferences any astonished br unreserved Mrs.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <div className="flex flex-col gap-[2rem]">
              <img
                src={img3}
                alt="img3"
                className="overflow-hidden lg:w-[15rem] lg:h-[20rem] opacity-40 rounded-lg sm:w-[13rem] sm:h-[15rem] sm:mb-[3rem]"
              />
              <div className="flex gap-6 relative left-[2rem]">
                <div className="flex flex-col justify-center items-center gap-[1rem] text-white">
                  <h1 className="font-serif font-bold text-4xl">10K</h1>
                  <p className="text-center font-thin text-white">
                    Greate conversations <br /> per month
                  </p>
                </div>
                <div className="bg-white w-[0.1rem] h-[6rem] relative bottom-[1rem]"></div>
                <div className="flex flex-col gap-[1rem] text-white justify-center items-center relative bottom-[-2rem]">
                  <h1 className="font-serif font-bold text-4xl">95+</h1>
                  <p className="text-center font-thin text-white">
                    Project <br /> Complete
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 relative top-[3rem] right-[3.5rem]">
              <img src={img4} alt="img4" className="w-[8rem]" />
              <img
                src={img5}
                alt="img5"
                className="w-[10rem] rounded-lg mt-[1rem] border-2 border-white"
              />
              <div className="flex gap-2 mt-[1rem]">
                <img
                  src={fb}
                  alt="facebook"
                  className="w-[3rem] cursor-pointer"
                />
                <img
                  src={insta}
                  alt="instagram"
                  className="w-[3rem] cursor-pointer"
                />
                <img
                  src={ll}
                  alt="linkedin"
                  className="w-[3rem] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="team flex flex-col gap-[3rem] justify-center text-center">
  <h1 className="text-light-green font-serif font-bold text-[2rem]">
    Meet the team
  </h1>
  <p className="font-serif text-xl">Your best partner in business.</p>
  <div className="team-section flex gap-[2rem] justify-center mt-[2rem]">
    <img
      src={img6}
      alt="team member 1"
      className="w-[12rem] rounded-full"  // Increased size
    />
    <img
      src={img7}
      alt="team member 2"
      className="w-[12rem] rounded-full"  // Increased size
    />
    <img
      src={img8}
      alt="team member 3"
      className="w-[12rem] rounded-full"  // Increased size
    />
  </div>
</div>
      </div>
    </>
  );
};

export default Aboutus;
