/* eslint-disable react/no-unknown-property */
import React from "react";

const Page2 = () => {
  return (
    <div className="page2 min-h-screen flex flex-col">
      <p className="text-[1.875vw] text-[#64CCC5] font-bold font-['Times_New_Roman'] text-center mt-[6vw] mb-[1.5vw]">
        Our Services
      </p>
      <h1 className="text-[3.75vw] font-bold font-['Times_New_Roman'] text-center">
        High-impact services
      </h1>
      <h1 className="text-[3.75vw] font-bold font-['Times_New_Roman'] text-center">
        for your business
      </h1>

      <div className="cards mt-[4vw] gap-[6rem] flex flex-col flex-wrap mb-[8vw]">
        <div className="line1 flex justify-between ml-[13.5vw] mr-[13.5vw]">
          <div className="card1 bg-[#000000] w-[22vw] h-[20vw] text-white  rounded-3xl p-10">
            <div className="icon bg-[#FFFFFF] rounded-full flex justify-center items-center w-20 h-20 mb-[3vw]">
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
              with your audience, drives organic traffic
            </p>
          </div>

          <div className="card2 bg-[#F4F4F4] w-[22vw] h-[20vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-20 h-20 mb-[3vw]">
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

          <div className="card3 bg-[#F4F4F4] w-[22vw] h-[20vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-20 h-20 mb-[3vw]">
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.601 9.51757C14.3 11.1509 14.0145 14.2764 14.0145 15.9376C14.0145 17.5987 14.0899 20.7778 14.601 22.3576M14.601 9.51757L17.9382 6.59357C22.0888 2.95681 24.1642 1.13843 25.9371 1.49158C26.4886 1.60143 27.0074 1.83664 27.4534 2.17903C28.8874 3.27978 28.8874 6.03904 28.8874 11.5576V20.2794C28.8874 25.7168 28.8874 28.4356 27.4668 29.5365C27.0249 29.8789 26.5094 30.1162 25.9619 30.2292C24.2018 30.5925 22.1378 28.8257 18.01 25.2922C16.114 23.6692 14.705 22.4588 14.601 22.3576M14.601 9.51757C13.8707 9.46649 10.5902 9.46547 7.43425 9.47771C4.81904 9.48786 3.51144 9.49294 2.57446 10.1439C2.21302 10.3951 1.8971 10.7122 1.64737 11.0746C1 12.0141 1 13.3268 1 15.9522V15.9522C1 18.5899 1 19.9088 1.6513 20.8502C1.90254 21.2133 2.22014 21.5306 2.58354 21.7815C3.52559 22.4318 4.83965 22.4305 7.46777 22.4278C10.6134 22.4246 13.8733 22.4085 14.601 22.3576M4.71886 22.4203L4.67845 31.8253C4.67191 33.346 5.90323 34.582 7.42389 34.5812V34.5812C8.93882 34.5804 10.1665 33.3521 10.1665 31.8371V22.4212M32.6057 8.46567C34.4648 14.0696 34.4648 17.8055 32.6057 23.4095"
                  stroke="#FBFBFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              Digital Marketing
            </h1>
            <p className="text-[0.938vw]">
              Elevate your brand's online presence with our data-driven digital
              marketing strategies. From SEO and content marketing
            </p>
          </div>
        </div>
        <div className="line2 mt-[4vw] flex justify-between ml-[13.5vw] mr-[13.5vw]">
          <div className="card4 bg-[#F4F4F4] w-[22vw] h-[20vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-20 h-20 mb-[3vw]">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3491 12.0179C27.3491 13.826 25.8358 15.2918 23.9691 15.2918C22.1024 15.2918 20.5891 13.826 20.5891 12.0179C20.5891 10.2098 22.1024 8.74397 23.9691 8.74397C25.8358 8.74397 27.3491 10.2098 27.3491 12.0179Z"
                  stroke="#FBFBFB"
                  stroke-width="1.65"
                />
                <path
                  d="M14.7949 12.0179C14.7949 13.826 13.2816 15.2918 11.4149 15.2918C9.54817 15.2918 8.0349 13.826 8.0349 12.0179C8.0349 10.2098 9.54817 8.74397 11.4149 8.74397C13.2816 8.74397 14.7949 10.2098 14.7949 12.0179Z"
                  stroke="#FBFBFB"
                  stroke-width="1.65"
                />
                <path
                  d="M15.7606 23.2428C15.7606 25.0509 14.2473 26.5167 12.3806 26.5167C10.5139 26.5167 9.00061 25.0509 9.00061 23.2428C9.00061 21.4347 10.5139 19.9689 12.3806 19.9689C14.2473 19.9689 15.7606 21.4347 15.7606 23.2428Z"
                  stroke="#FBFBFB"
                  stroke-width="1.65"
                />
                <path
                  d="M33.9966 13.2085C33.7962 4.89327 21.706 -0.311968 12.9008 1.28864C4.09565 2.88925 -0.164172 11.5656 1.27492 19.9689C2.6741 28.1391 11.8977 34 17.692 34C23.4862 34 28.3148 31.1938 24.2409 27.8498C23.1075 26.9716 22.1844 25.8655 21.5353 24.608C20.5616 22.7217 22.3234 20.0288 24.4923 20.2139C28.894 20.5896 34.1529 19.6927 33.9966 13.2085Z"
                  stroke="#FBFBFB"
                  stroke-width="1.65"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              Web Design
            </h1>
            <p className="text-[0.938vw]">
              We specialize in creating visually stunning, user-friendly
              websites that align with your brand identity and deliver an
              exceptional.
            </p>
          </div>

          <div className="card5 bg-[#F4F4F4] w-[22vw] h-[20vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-20 h-20 mb-[3vw]">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2 3.55599C25.9999 4.2634 26.4751 5.14715 26.4753 6.10574C26.4754 7.06432 26.0006 7.94789 25.201 8.65499M29.8045 1C30.9372 2.53656 31.575 4.27127 31.5753 6.10718C31.5757 7.93765 30.9424 9.66726 29.8166 11.2M15 11.2C12.1833 11.2 9.9 8.91665 9.9 6.1C9.9 3.28335 12.1833 1 15 1C17.8167 1 20.1 3.28335 20.1 6.1C20.1 8.91665 17.8167 11.2 15 11.2ZM7.07645 31.6H22.9235C27.1921 31.6 30.0473 27.2065 28.3137 23.3058V23.3058C26.4203 19.0456 22.1955 16.3 17.5334 16.3H12.4666C7.80454 16.3 3.57974 19.0456 1.6863 23.3058V23.3058C-0.047318 27.2065 2.80792 31.6 7.07645 31.6Z"
                  stroke="#FBFBFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              IT Consulting
            </h1>
            <p className="text-[0.938vw]">
              IT consulting, or information technology consulting, refers to the
              practice of providing advisory and implementation services
            </p>
          </div>

          <div className="card6 bg-[#F4F4F4] w-[22vw] h-[20vw] rounded-3xl p-10">
            <div className="icon bg-[#0C0C0C] rounded-full flex justify-center items-center w-20 h-20 mb-[3vw]">
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 16.0521L7.55556 11.0347L9.29937 9.01843C10.1875 7.99159 10.6315 7.47816 11.2012 7.156C11.3894 7.04961 11.5863 6.95956 11.7899 6.88684C12.4062 6.66667 13.085 6.66667 14.4426 6.66667H17M7.43078 3.13952L3.97076 6.81579C2.29366 8.59771 1.45511 9.48867 1.24758 10.5644C1.18013 10.914 1.16245 11.2714 1.19505 11.6259C1.29536 12.7169 2.04185 13.6863 3.53483 15.6251L11.6123 26.1146C13.7973 28.952 14.8898 30.3708 16.3128 30.634C16.7671 30.718 17.2329 30.718 17.6872 30.634C19.1102 30.3708 20.2027 28.952 22.3877 26.1146L30.4652 15.6251C31.9582 13.6863 32.7046 12.7169 32.805 11.6259C32.8375 11.2714 32.8199 10.914 32.7524 10.5644C32.5449 9.48867 31.7063 8.59771 30.0292 6.81579L26.5692 3.13952C25.6885 2.20371 25.2481 1.73581 24.6993 1.44348C24.5178 1.34685 24.3288 1.26519 24.1341 1.19931C23.5451 1 22.9026 1 21.6175 1H12.3825C11.0974 1 10.4549 1 9.86587 1.19931C9.67117 1.26519 9.48217 1.34685 9.30075 1.44348C8.75192 1.73581 8.31154 2.20371 7.43078 3.13952Z"
                  stroke="#FBFBFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-semibold font-['Times_New_Roman'] text-[1.4vw] mb-[0.9vw]">
              Brand Identity
            </h1>
            <p className="text-[0.938vw]">
              It involves creating a unique and recognizable identity that sets
              the brand apart from competitors and resonates with the target
              audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
