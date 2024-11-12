import image1 from "../assets/project detail/1.jpg";
import image2 from "../assets/project detail/2.jpg";
import image3 from "../assets/project detail/3.jpg";
import image4 from "../assets/project detail/4.jpg";
import image5 from "../assets/project detail/5.jpg";
import image6 from "../assets/project detail/6.jpg";
import image7 from "../assets/project detail/7.jpg";

const Projectdetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero flex items-center text-white m-1 relative">
        <div className="container mx-auto px-6 text-center">
          <img
            src={image1}
            alt="Hero"
            className="mx-auto rounded-xl shadow-lg md:w-[50rem]"
          />
          <div className="flex items-center justify-center gap-3 relative bottom-[3rem] left-[28rem] w-fit">
            <div className="flex flex-col items-start justify-center bg-black w-fit p-4 rounded-lg"><span className="font-bold font-serif">Category: <br /></span><span className="font-thin">Cloud Solution</span></div>
            <div className="flex flex-col items-start justify-center bg-black w-fit p-4 rounded-lg"><span className="font-bold font-serif">Category: <br /></span><span className="font-thin">Cloud Solution</span></div>
            <div className="flex flex-col items-start justify-center bg-black w-fit p-4 rounded-lg"><span className="font-bold font-serif">Category: <br /></span><span className="font-thin">Cloud Solution</span></div>
            <div className="flex flex-col items-start justify-center bg-black w-fit p-4 rounded-lg"><span className="font-bold font-serif">Category: <br /></span><span className="font-thin">Cloud Solution</span></div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description py-12 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">01. The Challenge</h2>
            <p>
              When our power of choice is untrammeled and when nothing prevents
              us from being able to do what we like best, every pleasure is to
              be welcomed and every pain avoided. But in certain circumstances
              and owing to the claims of duty or the obligations of business it
              will frequently occur that pleasures have to be repudiated and
              annoyances accepted. The wise man therefore always holds in these
              matters to this principle of selection: he rejects pleasures to
              secure other greater pleasures, or else he endures pains to avoid
              worse pains.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">02. The Solution</h2>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae Itaque earum rerum hic tenetur a sapiente
              delectus, ut aut reiciendis voluptatibus maiores alias consequatur
              aut perferendis doloribus asperiores repellat. One who avoids a
              pain that produces no resultant pleasure. laborious physical
              exercise. One who avoids a pain that produces no resultant which
              of us ever undertakes laborious Avoids pleasure itself, because it
              is.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">03. The Result</h2>
            <p>
              Because it is pain, but because occasionally circumstances occur
              in which toil and pain can procure him some great pleasure. To
              take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it? But
              who has any right to find fault with a man who chooses to enjoy a
              pleasure that has no annoying consequences, or one who avoids a
              pain that produces no resultant pleasure? "When our power of
              choice is untrammeled and when nothing prevents us from being able
              to do what we like best, every pleasure is to be welcomed and
              every pain avoided. But in certain circumstances and owing to the
              claims of duty or the obligations of business it will frequently
              occur that pleasures have to be repudiated and annoyances
              accepted. The wise man therefore always holds in these matters to
              this principle of selection: he rejects pleasures to secure other
              greater pleasures, or else he endures pains to avoid worse pains.
            </p>
          </div>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-8">Recent Projects</h2>
            <div className="flex w-full justify-center items-center gap-[5rem]">
              <img src={image2} alt="img2" className="w-[16rem] h-[20rem] rounded-lg" />
              <img src={image3} alt="img2" className="w-[16rem] h-[20rem] rounded-lg" />
              <img src={image4} alt="img2" className="w-[17rem] h-[20rem] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-4">
              <img
                src={image5}
                alt="Project 1"
                className="rounded mb-4 w-full"
              />
              <h3 className="text-lg font-semibold">Web UI Design</h3>
              <p className="text-sm text-gray-600">Creative UI Design</p>
            </div>
            <div className=" rounded-md p-4">
              <img
                src={image6}
                alt="Project 2"
                className="rounded mb-4"
              />
              <h3 className="text-lg font-semibold">Digital Strategy</h3>
              <p className="text-sm text-gray-600">Social Media Marketing</p>
            </div>
            <div className="rounded-md p-4">
              <img
                src={image7}
                alt="Project 3"
                className="rounded mb-4 w-full"
              />
              <h3 className="text-lg font-semibold">UI Design</h3>
              <p className="text-sm text-gray-600">
                Creative Rebranding for logo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectdetail;
