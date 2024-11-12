import React from "react";

const FreetrialBtn = () => {
	return (
		<div className="flex mt-8 gap-2 items-center bg-white rounded-full px-3 py-2 text-black w-[15vw]">
			<div className="circle bg-black w-7 h-7 rounded-full flex justify-center items-center">
				<svg
					width="7"
					height="12"
					viewBox="0 0 7 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 1L5.66667 5.66667L1 10.3333"
						stroke="#FBFBFB"
						stroke-width="1.55439"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<p className="text-xl ">Start your Free Trial</p>
		</div>
	);
};

export default FreetrialBtn;
