import React from "react";

const Page2 = () => {
  return (
    <div className="page2 min-h-[44vh] flex flex-col">
      <p className="text-[1.875vw] text-[#64CCC5] font-bold font-['Times_New_Roman'] text-center mt-[6vw] mb-[1.5vw]">
        Our Services
      </p>
      <h1 className="text-[3.75vw] font-bold font-['Times_New_Roman'] text-center">
        High-impact services
      </h1>
      <h1 className="text-[3.75vw] font-bold font-['Times_New_Roman'] text-center">
        for your business
      </h1>

      <div className="cards mt-[4vw] gap-[6rem] flex flex-col flex-wrap mb-[4vw]">
        <div className="line1 flex gap-[2rem] justify-center ml-[5vw] mr-[5vw]">
          <div className="card1 bg-[#000000] w-[26vw] h-[24vw] text-white rounded-3xl p-10">
            <div className="icon bg-[#FFFFFF] rounded-full flex justify-center items-center w-24 h-24 mb-[3vw]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4151 26.6413L2 30L5.35874 21.5849M10.4151 26.6413L27.9018 9.15454M10.4151 26.6413L9.74234 22.2566L5.35874 21.5849M5.35874 21.5849L22.8455 4.09819M27.9018 9.15454L22.8455 4.09819M27.9018 9.15454L29.4718 7.58452C30.8681 6.18825 30.8681 3.92445 29.4718 2.52817V2.52817C28.0756 1.1319 25.8118 1.1319 24.4155 2.52817L22.8455 4.09819"
                  stroke="#292556"
                  stroke-width="2.36842"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              Content Marketing
            </h1>
            <p className="text-white text-[0.938vw]">
              Our team creates engaging and shareable content that resonates
              with your audience, drives organic traffic.
            </p>
          </div>

          <div className="card2 bg-[#F4F4F4] w-[26vw] h-[24vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-24 h-24 mb-[3vw]">
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3919 6.43243L8.62929 8.21207C7.83414 8.42132 7.43656 8.52594 7.13458 8.77003C7.03533 8.85025 6.94484 8.94074 6.86462 9.03999C6.62053 9.34197 6.51591 9.73954 6.30666 10.5347L2.48853 25.0436C1.51297 28.7507 1.02518 30.6043 1.79096 31.7812C2.03212 32.1518 2.34818 32.4679 2.7188 32.709C3.8957 33.4748 5.74927 32.987 9.45641 32.0115L23.9653 28.1933C24.7605 27.9841 25.158 27.8795 25.46 27.6354C25.5593 27.5552 25.6497 27.4647 25.73 27.3654C25.9741 27.0634 26.0787 26.6659 26.2879 25.8707L28.0676 19.1081M15.3919 6.43243L28.0676 19.1081M15.3919 6.43243L18.5195 3.30479C19.4798 2.34453 19.9599 1.8644 20.5411 1.77236C20.7287 1.74263 20.9199 1.74263 21.1076 1.77236C21.6887 1.8644 22.1689 2.34453 23.1291 3.30479L31.1952 11.3709C32.1555 12.3311 32.6356 12.8113 32.7276 13.3924C32.7574 13.5801 32.7574 13.7713 32.7276 13.9589C32.6356 14.5401 32.1555 15.0202 31.1952 15.9805L28.0676 19.1081"
                  stroke="#FBFBFB"
                  stroke-width="1.7633"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9018 21.6063C11.5892 20.2937 11.5892 18.1655 12.9018 16.8529C14.2144 15.5403 16.3426 15.5403 17.6552 16.8529C18.9678 18.1655 18.9678 20.2937 17.6552 21.6063C16.3426 22.9189 14.2144 22.9189 12.9018 21.6063ZM12.9018 21.6063L8.14844 26.3597"
                  stroke="#FBFBFB"
                  stroke-width="2.71622"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              Graphic Design
            </h1>
            <p className="text-[0.938vw]">
              Unlock the power of visual storytelling with our expert graphic
              design services tailored to elevate your brand and captivate.
            </p>
          </div>

          <div className="card3 bg-[#F4F4F4] w-[26vw] h-[24vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-24 h-24 mb-[3vw]">
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.601 9.51757C14.3 11.1509 14.0145 14.2764 14.0145 15.9376C14.0145 17.5987 14.0899 20.7778 14.601 22.3576M14.601 9.51757L17.9382 6.59357C22.0888 2.95681 24.1642 1.13843 25.9371 1.49158C26.4886 1.60143 27.0074 1.83664 27.4534 2.17903C28.8874 3.27978 28.8874 6.03904 28.8874 11.5576V20.2794C28.8874 25.7168 28.8874 28.4356 27.4668 29.8587C26.9834 30.3097 26.4534 30.2328 25.9932 29.7497C25.4267 29.2071 23.9847 27.8851 22.3155 26.5388C21.7722 26.1116 21.0518 25.724 20.3257 25.6727C19.5996 25.6215 18.9072 25.9077 18.3921 26.2426C18.1174 26.4569 17.8486 26.7358 17.5778 27.0292M14.601 9.51757L17.9382 12.5254M14.601 9.51757L12.5357 12.5254M17.9382 12.5254L20.3257 25.6727"
                  stroke="#FBFBFB"
                  stroke-width="1.7633"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              Website Development
            </h1>
            <p className="text-[0.938vw]">
              We create user-friendly, responsive, and high-performance
              websites that not only look great but also drive conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
