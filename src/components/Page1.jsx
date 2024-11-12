/* eslint-disable react/no-unknown-property */
import FreetrialBtn from "./FreetrialBtn";

const Page1 = () => {
	return (
		<div className="page1 bg-black relative h-screen px-60 flex gap-10">
			<div className="absolute top-[11%] -left-[1.9%]">
				<img
					src="../src/assets/homepage/page1.png"
					alt=""
				/>
			</div>
			<div className="left text-white w-1/2 pt-[9vw]">
				<h1 className="text-[3.75vw] font-['Times_New_Roman'] tracking-wide font-black leading-none">
					Ready to take your
				</h1>
				<h1 className="text-[3.75vw] font-['Times_New_Roman'] tracking-wide font-black text-[#64ccc5] leading-none">
					Business Growth
				</h1>
				<h1 className="text-[3.75vw] font-['Times_New_Roman'] tracking-normal font-black leading-none">
					to the next level?
				</h1>
				<p className="mt-4 text-lg w-[80%]">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
					nemo, tempore quidem suscipit eos iste assumenda rerum qui, possimus
					ipsum.
				</p>
				<FreetrialBtn />

				<div className="logos">
					<h1 className="font-['Times_New_Roman'] text-[#64ccc5] mt-40 font-semibold text-[1.25vw]">
						Trusted by Leading Brands
					</h1>
					<div className="flex gap-4 mt-3">
						<div>
							<svg
								width="148"
								height="54"
								viewBox="0 0 148 54"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M53.1919 35.3417C51.5235 35.3417 50.0841 35.0146 48.8083 34.3603C47.5325 33.7061 46.5512 32.7574 45.8642 31.547C45.1772 30.3366 44.8174 28.8973 44.8174 27.2616C44.8174 25.626 45.1772 24.1866 45.8642 22.9763C46.5512 21.7332 47.5325 20.8172 48.8083 20.163C50.0841 19.5087 51.5562 19.1489 53.1919 19.1489C54.3041 19.1489 55.3182 19.2797 56.1687 19.5087C57.052 19.7377 57.8371 20.0975 58.5568 20.5882V23.7941C57.9025 23.2707 57.1501 22.8781 56.3323 22.6491C55.5145 22.3874 54.5658 22.2566 53.4863 22.2566C52.5049 22.2566 51.5889 22.4529 50.8038 22.8781C50.0187 23.2707 49.3972 23.8595 48.9392 24.6119C48.4812 25.3643 48.2522 26.2475 48.2522 27.2616C48.2522 28.2757 48.4485 29.1917 48.8738 29.9441C49.299 30.6965 49.8879 31.2853 50.673 31.7106C51.4581 32.1358 52.3413 32.3321 53.3227 32.3321C54.2387 32.3321 55.0238 32.1686 55.7107 31.8414V28.8319H53.1919V26.3457H58.9493V33.8042C57.5099 34.851 55.5799 35.3417 53.1919 35.3417Z"
									fill="#FBFBFB"
								/>
								<path
									d="M59.7676 24.3829H63.0061V25.9204C63.4314 25.397 64.0202 25.0044 64.8054 24.7427C65.5577 24.4483 66.441 24.3174 67.4224 24.3174V26.869C66.4083 26.869 65.4923 27.0326 64.7072 27.327C63.9221 27.6214 63.3987 28.1121 63.1043 28.7337V35.0145H59.7676V24.3829Z"
									fill="#FBFBFB"
								/>
								<path
									d="M73.8331 35.3417C71.8049 35.3417 70.202 34.851 69.0243 33.8696C67.8466 32.8882 67.2578 31.4816 67.2578 29.7151C67.2578 27.9486 67.7812 26.5747 68.7953 25.5606C69.8421 24.5465 71.3469 24.0231 73.277 24.0231C74.5528 24.0231 75.6323 24.2521 76.5155 24.7428C77.3988 25.2007 78.0857 25.8877 78.5437 26.7055C79.0017 27.5233 79.2307 28.472 79.2307 29.5188V30.86H70.4637C70.6927 32.234 71.9685 32.8882 74.2911 32.8882C74.978 32.8882 75.665 32.8228 76.3847 32.7247C77.1044 32.5938 77.7259 32.4303 78.282 32.234V34.5893C77.7586 34.8183 77.1044 34.9819 76.2865 35.1127C75.4687 35.2763 74.6509 35.3417 73.8331 35.3417ZM76.0903 28.7337C76.0576 28.014 75.7958 27.4906 75.3052 27.0981C74.8145 26.7055 74.1602 26.5092 73.277 26.5092C72.4264 26.5092 71.7722 26.7055 71.2815 27.0981C70.7908 27.4906 70.5291 28.0467 70.4964 28.7337H76.0903Z"
									fill="#FBFBFB"
								/>
								<path
									d="M86.1007 35.3417C84.0725 35.3417 82.4695 34.851 81.2919 33.8696C80.1142 32.8882 79.5254 31.4816 79.5254 29.7151C79.5254 27.9486 80.0488 26.5747 81.0629 25.5606C82.1097 24.5465 83.6145 24.0231 85.5445 24.0231C86.8203 24.0231 87.8999 24.2521 88.7831 24.7428C89.6664 25.2007 90.3533 25.8877 90.8113 26.7055C91.2693 27.5233 91.4983 28.472 91.4983 29.5188V30.86H82.7312C82.9602 32.234 84.236 32.8882 86.5586 32.8882C87.2456 32.8882 87.9326 32.8228 88.6523 32.7247C89.3719 32.5938 89.9935 32.4303 90.5496 32.234V34.5893C90.0262 34.8183 89.3719 34.9819 88.5541 35.1127C87.7363 35.2763 86.9185 35.3417 86.1007 35.3417ZM88.3578 28.7337C88.3251 28.014 88.0634 27.4906 87.5727 27.0981C87.082 26.7055 86.4278 26.5092 85.5445 26.5092C84.694 26.5092 84.0398 26.7055 83.5491 27.0981C83.0584 27.4906 82.7967 28.0467 82.764 28.7337H88.3578Z"
									fill="#FBFBFB"
								/>
								<path
									d="M92.2832 24.3829H95.5218V25.6914C96.0125 25.1352 96.6013 24.7427 97.2555 24.481C97.9425 24.1866 98.6295 24.0557 99.3819 24.0557C100.821 24.0557 101.901 24.4483 102.62 25.2334C103.34 26.0185 103.7 27.0326 103.7 28.3738V35.0145H100.363V28.7337C100.363 27.3597 99.7417 26.6727 98.4659 26.6727C97.9098 26.6727 97.3864 26.8036 96.8957 27.098C96.405 27.3597 95.9797 27.7523 95.6526 28.3084V35.0145H92.3159V24.3829H92.2832Z"
									fill="#FBFBFB"
								/>
								<path
									d="M106.644 22.7472C106.121 22.7472 105.696 22.5836 105.336 22.2238C104.976 21.8967 104.812 21.4387 104.812 20.948C104.812 20.4573 104.976 20.032 105.336 19.6722C105.696 19.3124 106.121 19.1488 106.644 19.1488C107.168 19.1488 107.593 19.3124 107.953 19.6722C108.313 19.9993 108.476 20.4246 108.476 20.948C108.476 21.4714 108.313 21.8967 107.953 22.2238C107.593 22.5836 107.168 22.7472 106.644 22.7472ZM104.943 24.3829H108.313V35.0145H104.943V24.3829Z"
									fill="#FBFBFB"
								/>
								<path
									d="M114.037 35.3417C113.252 35.3417 112.369 35.2436 111.453 35.08C110.537 34.9164 109.85 34.6874 109.327 34.3603V31.7433C109.915 32.1031 110.635 32.3975 111.453 32.5938C112.271 32.8228 113.056 32.9209 113.743 32.9209C114.364 32.9209 114.79 32.8555 115.084 32.7574C115.379 32.6592 115.509 32.463 115.509 32.1686C115.509 31.9396 115.444 31.776 115.28 31.6452C115.117 31.4816 114.855 31.3834 114.528 31.2526C114.201 31.1217 113.645 30.9582 112.892 30.7292C111.976 30.4675 111.289 30.2058 110.766 29.9441C110.275 29.6497 109.883 29.3225 109.621 28.8973C109.359 28.472 109.229 27.9486 109.229 27.2943C109.229 26.1821 109.654 25.3643 110.537 24.8082C111.42 24.2521 112.631 23.9576 114.135 23.9576C114.888 23.9576 115.64 24.0231 116.425 24.1866C117.21 24.3502 117.832 24.5465 118.257 24.7755V27.3271C117.832 27.0326 117.276 26.8037 116.556 26.6401C115.869 26.4765 115.215 26.3784 114.561 26.3784C113.939 26.3784 113.481 26.4438 113.154 26.542C112.827 26.6728 112.663 26.8691 112.663 27.1962C112.663 27.4906 112.827 27.6869 113.121 27.8505C113.448 28.014 114.037 28.1776 114.921 28.4066L115.379 28.5047C116.294 28.7664 117.047 29.0281 117.538 29.3553C118.061 29.6497 118.421 30.0095 118.617 30.4348C118.846 30.86 118.944 31.3834 118.944 32.005C118.944 32.9864 118.519 33.7715 117.668 34.3603C116.851 35.08 115.64 35.3417 114.037 35.3417Z"
									fill="#FBFBFB"
								/>
								<path
									d="M119.729 18.6254H123.066V25.5933C123.557 25.0698 124.146 24.6773 124.767 24.4483C125.389 24.1866 126.076 24.0558 126.795 24.0558C128.235 24.0558 129.314 24.4483 130.034 25.2334C130.754 26.0185 131.114 27.0326 131.114 28.3738V35.0145H127.777V28.7337C127.777 27.3597 127.155 26.6728 125.879 26.6728C125.323 26.6728 124.8 26.8036 124.309 27.098C123.819 27.3597 123.393 27.7523 123.066 28.3084V35.0145H119.729V18.6254Z"
									fill="#FBFBFB"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M33.3677 21.7659C33.3677 24.5792 31.0778 26.8691 28.2645 26.8691C25.4512 26.8691 23.1613 24.5792 23.1613 21.7659C23.1613 18.9526 25.4512 16.6627 28.2645 16.6627C31.0778 16.6627 33.3677 18.9526 33.3677 21.7659ZM16.3898 26.5092C21.9509 26.1494 26.7924 30.3039 27.2504 35.8651C27.2831 36.4539 27.2831 37.01 27.2504 37.5661C21.6892 37.926 16.8477 33.7715 16.3898 28.2103C16.3571 27.6214 16.3571 27.0653 16.3898 26.5092ZM30.8488 37.3699C36.41 36.9119 40.5645 32.0704 40.2047 26.5092C39.6486 26.4765 39.0925 26.4438 38.5036 26.5092C32.9424 26.9672 28.7879 31.8087 29.1478 37.3699C29.7039 37.4026 30.26 37.4026 30.8488 37.3699Z"
									fill="#FBFBFB"
								/>
							</svg>
						</div>
						<div>
							<svg
								width="149"
								height="58"
								viewBox="0 0 149 58"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M51.8681 32.3982H47.4476L46.7293 34.498H44.3809L48.3593 23.3914H50.9564L54.9348 34.498H52.5864L51.8681 32.3982ZM51.2603 30.63L49.6579 25.9885L48.0554 30.63H51.2603Z"
									fill="#FBFBFB"
								/>
								<path
									d="M64.1077 25.7122V34.5256H61.8698V33.4205C61.5935 33.8073 61.2067 34.1112 60.737 34.3322C60.295 34.5533 59.7977 34.6638 59.2451 34.6638C58.5544 34.6638 57.9466 34.5256 57.4216 34.2217C56.8967 33.9178 56.4823 33.5034 56.1784 32.9232C55.8745 32.343 55.7363 31.6799 55.7363 30.8787V25.7122H57.9466V30.5472C57.9466 31.2379 58.1124 31.7904 58.4715 32.1772C58.8307 32.5364 59.3004 32.7298 59.9082 32.7298C60.516 32.7298 61.0133 32.5364 61.3449 32.1772C61.704 31.7904 61.8698 31.2655 61.8698 30.5472V25.7122H64.1077Z"
									fill="#FBFBFB"
								/>
								<path
									d="M68.2512 27.5357V31.7904C68.2512 32.0944 68.3065 32.3154 68.4446 32.4535C68.5828 32.5917 68.8314 32.6469 69.1629 32.6469H70.1852V34.5256H68.7762C66.8974 34.5256 65.9581 33.6139 65.9581 31.7904V27.5357H64.9082V25.7122H65.9581V23.5296H68.196V25.7122H70.1576V27.5357H68.2512Z"
									fill="#FBFBFB"
								/>
								<path
									d="M75.1037 34.6638C74.2472 34.6638 73.5013 34.4704 72.8106 34.1112C72.1199 33.7244 71.5949 33.1995 71.2081 32.5088C70.8213 31.8181 70.6279 31.0169 70.6279 30.1328C70.6279 29.221 70.8213 28.4475 71.2081 27.7567C71.6225 27.066 72.1475 26.5411 72.8382 26.1819C73.5289 25.7951 74.3025 25.6017 75.1313 25.6017C75.9878 25.6017 76.7338 25.7951 77.4245 26.1819C78.1152 26.5411 78.6401 27.0937 79.0545 27.7567C79.469 28.4475 79.6624 29.2487 79.6624 30.1328C79.6624 31.0445 79.469 31.8181 79.0545 32.5088C78.6401 33.1995 78.1152 33.7244 77.3968 34.1112C76.7338 34.4704 75.9602 34.6638 75.1037 34.6638ZM75.1037 32.7298C75.5181 32.7298 75.8773 32.6469 76.2365 32.4535C76.5956 32.2601 76.8719 31.9562 77.0929 31.5694C77.314 31.1826 77.3968 30.713 77.3968 30.1328C77.3968 29.3039 77.1758 28.6685 76.7338 28.1988C76.2917 27.7567 75.7668 27.5081 75.1313 27.5081C74.4959 27.5081 73.9709 27.7291 73.5289 28.1988C73.1145 28.6409 72.8934 29.2763 72.8934 30.1328C72.8934 30.9892 73.0868 31.6247 73.5013 32.0668C73.9433 32.5088 74.4683 32.7298 75.1037 32.7298Z"
									fill="#FBFBFB"
								/>
								<path
									d="M91.6253 25.5741C92.7029 25.5741 93.587 25.9056 94.2224 26.5687C94.8855 27.2318 95.217 28.1435 95.217 29.3315V34.498H93.0068V29.6354C93.0068 28.9447 92.841 28.4198 92.4818 28.0606C92.1227 27.7015 91.653 27.5081 91.0452 27.5081C90.4373 27.5081 89.9677 27.7015 89.6085 28.0606C89.2493 28.4198 89.0835 28.9447 89.0835 29.6354V34.498H86.8457V29.6354C86.8457 28.9447 86.6799 28.4198 86.3207 28.0606C85.9616 27.7015 85.4919 27.5081 84.8841 27.5081C84.2762 27.5081 83.7789 27.7015 83.4198 28.0606C83.0606 28.4198 82.8948 28.9447 82.8948 29.6354V34.498H80.6846V25.7122H82.8948V26.7897C83.1711 26.4306 83.5579 26.1267 84 25.9056C84.442 25.6846 84.9393 25.6017 85.4919 25.6017C86.1826 25.6017 86.7904 25.7399 87.343 26.0438C87.8955 26.3201 88.31 26.7345 88.5862 27.287C88.8625 26.7897 89.2769 26.3753 89.8295 26.0714C90.3821 25.7399 90.9899 25.5741 91.6253 25.5741Z"
									fill="#FBFBFB"
								/>
								<path
									d="M96.1289 30.0775C96.1289 29.1934 96.2947 28.3922 96.6538 27.7015C97.013 27.0108 97.4827 26.4858 98.0905 26.1267C98.6983 25.7675 99.389 25.5741 100.135 25.5741C100.798 25.5741 101.351 25.7122 101.848 25.9609C102.345 26.2372 102.732 26.5687 103.036 26.9555V25.7122H105.274V34.5256H103.036V33.2271C102.76 33.6415 102.345 33.9731 101.848 34.2494C101.351 34.5256 100.77 34.6362 100.107 34.6362C99.3614 34.6362 98.6983 34.4428 98.0629 34.056C97.4551 33.6692 96.9854 33.1442 96.6262 32.4535C96.2947 31.7904 96.1289 30.9892 96.1289 30.0775ZM103.036 30.1051C103.036 29.5526 102.925 29.1105 102.732 28.7237C102.511 28.3369 102.235 28.033 101.876 27.8396C101.516 27.6186 101.13 27.5357 100.715 27.5357C100.301 27.5357 99.914 27.6462 99.5824 27.8396C99.2233 28.033 98.947 28.3369 98.726 28.7237C98.5049 29.1105 98.422 29.5526 98.422 30.0775C98.422 30.6024 98.5326 31.0721 98.726 31.4865C98.947 31.8733 99.2233 32.1772 99.5824 32.3983C99.9416 32.6193 100.328 32.7298 100.715 32.7298C101.13 32.7298 101.516 32.6193 101.876 32.4259C102.235 32.2049 102.511 31.9286 102.732 31.5418C102.953 31.1274 103.036 30.6577 103.036 30.1051Z"
									fill="#FBFBFB"
								/>
								<path
									d="M109.418 27.5357V31.7904C109.418 32.0944 109.473 32.3154 109.612 32.4535C109.75 32.5917 109.998 32.6469 110.33 32.6469H111.352V34.5256H109.943C108.064 34.5256 107.125 33.6139 107.125 31.7904V27.5357H106.075V25.7122H107.125V23.5296H109.363V25.7122H111.325V27.5357H109.418Z"
									fill="#FBFBFB"
								/>
								<path
									d="M113.48 24.6623C113.093 24.6623 112.762 24.5518 112.485 24.3031C112.237 24.0545 112.099 23.7229 112.099 23.3638C112.099 23.0046 112.237 22.6731 112.485 22.452C112.762 22.2034 113.066 22.0652 113.48 22.0652C113.894 22.0652 114.198 22.2034 114.447 22.452C114.723 22.7007 114.834 23.0046 114.834 23.3638C114.834 23.7229 114.696 24.0545 114.447 24.3031C114.198 24.5518 113.867 24.6623 113.48 24.6623ZM114.585 25.7122V34.5256H112.375V25.7122H114.585Z"
									fill="#FBFBFB"
								/>
								<path
									d="M120.055 34.6638C119.198 34.6638 118.452 34.4704 117.762 34.1112C117.071 33.7244 116.546 33.1995 116.159 32.5088C115.773 31.8181 115.579 31.0169 115.579 30.1328C115.579 29.221 115.773 28.4475 116.159 27.7567C116.574 27.066 117.099 26.5411 117.789 26.1819C118.48 25.7951 119.254 25.6017 120.083 25.6017C120.939 25.6017 121.685 25.7951 122.376 26.1819C123.066 26.5411 123.591 27.0937 124.006 27.7567C124.42 28.4475 124.614 29.2487 124.614 30.1328C124.614 31.0445 124.42 31.8181 124.006 32.5088C123.591 33.1995 123.066 33.7244 122.348 34.1112C121.685 34.4704 120.911 34.6638 120.055 34.6638ZM120.055 32.7298C120.469 32.7298 120.828 32.6469 121.188 32.4535C121.547 32.2601 121.823 31.9562 122.044 31.5694C122.265 31.1826 122.348 30.713 122.348 30.1328C122.348 29.3039 122.127 28.6685 121.685 28.1988C121.243 27.7567 120.718 27.5081 120.083 27.5081C119.447 27.5081 118.922 27.7291 118.48 28.1988C118.066 28.6409 117.845 29.2763 117.845 30.1328C117.845 30.9892 118.038 31.6247 118.452 32.0668C118.867 32.5088 119.419 32.7298 120.055 32.7298Z"
									fill="#FBFBFB"
								/>
								<path
									d="M130.498 25.5741C131.548 25.5741 132.405 25.9056 133.04 26.5687C133.676 27.2318 134.007 28.1435 134.007 29.3315V34.498H131.797V29.6354C131.797 28.9447 131.631 28.3922 131.272 28.033C130.913 27.6462 130.443 27.4528 129.835 27.4528C129.227 27.4528 128.73 27.6462 128.371 28.033C128.012 28.3922 127.846 28.9447 127.846 29.6354V34.498H125.636V25.7122H127.846V26.8174C128.15 26.4306 128.509 26.1267 128.979 25.9333C129.448 25.6846 129.946 25.5741 130.498 25.5741Z"
									fill="#FBFBFB"
								/>
								<path
									d="M26.1742 25.4912V22.8113C22.914 22.9218 20.2894 25.6017 20.2894 28.8895V29.3039H14.5703V28.8895C14.5703 22.4521 19.7368 17.2028 26.1465 17.0922V14.1913L35.9546 19.938L26.1742 25.4912Z"
									fill="#FBFBFB"
								/>
								<path
									d="M31.1743 28.8894V29.3038C31.1743 32.5916 28.5772 35.2715 25.2895 35.382V32.7297L15.4814 38.2554L25.2895 44.002V41.1011C31.6992 40.9906 36.8657 35.7412 36.8657 29.3038V28.8894H31.1743Z"
									fill="#FBFBFB"
								/>
							</svg>
						</div>

						<div>
							<svg
								width="148"
								height="64"
								viewBox="0 0 148 64"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M41.0745 40.8602C41.2394 42.7971 40.58 44.8165 39.0964 46.3001C37.6128 47.7836 35.5935 48.4842 33.6566 48.3194C33.4917 46.3825 34.1511 44.3631 35.6347 42.8796C37.1183 41.396 39.1376 40.6954 41.0745 40.8602Z"
									fill="#FBFBFB"
								/>
								<path
									d="M37.5306 38.1404C35.5937 40.2421 32.7502 41.4784 29.7006 41.3136C26.6098 41.19 23.931 39.6652 22.2002 37.4398C24.1371 35.338 26.9806 34.1017 30.0302 34.2665C33.1211 34.3902 35.7998 35.915 37.5306 38.1404Z"
									fill="#FBFBFB"
								/>
								<path
									d="M21.0459 31.4642C21.458 26.6013 23.9307 21.9033 28.2166 18.8125C32.5025 15.7217 37.7363 14.8975 42.4755 16.0514C42.0634 20.9142 39.5908 25.6123 35.3048 28.7031C31.0189 31.7939 25.7851 32.6181 21.0459 31.4642Z"
									fill="#FBFBFB"
								/>
								<path
									d="M100.047 25.4474V28.4146H101.819V43.9511H104.992V28.4558H109.154V25.4886H104.992V22.439C104.992 21.5736 105.075 20.873 105.239 20.3373C105.404 19.8016 105.61 19.4307 105.858 19.2246C106.146 18.9773 106.476 18.8537 106.888 18.8537C107.218 18.8537 107.547 18.9361 107.877 19.0598C108.248 19.1834 108.578 19.4307 108.825 19.884L110.556 17.2877C110.391 17.0404 110.102 16.7932 109.773 16.5459C109.443 16.2986 109.072 16.0926 108.619 15.9689C108.165 15.8041 107.671 15.7217 107.094 15.7217C105.981 15.7217 105.033 15.9689 104.25 16.4223C103.467 16.8756 102.89 17.5762 102.478 18.4828C102.066 19.3894 101.86 20.5846 101.86 22.0269V25.4474H100.047Z"
									fill="#FBFBFB"
								/>
								<path
									d="M50.3057 19.4307V43.9923H64.5646V40.8191H53.685V19.4307H50.3057Z"
									fill="#FBFBFB"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M73.0125 44.3632C74.9494 44.3632 76.639 43.9923 78.0814 43.2093C79.5238 42.4263 80.7189 41.2724 81.6667 39.7064L79.1117 38.0991C78.4523 39.2118 77.6281 40.036 76.6802 40.613C75.7324 41.1487 74.6197 41.396 73.3834 41.396C72.147 41.396 71.0756 41.1487 70.2101 40.613C69.3447 40.0773 68.6853 39.3355 68.232 38.3052C67.9023 37.5634 67.6963 36.6568 67.6139 35.6677H81.9552V35.2968C81.9964 35.0907 81.9964 34.8847 81.9964 34.7198C81.9964 32.7829 81.6667 31.1345 80.9662 29.7333C80.2656 28.3322 79.2765 27.2607 77.999 26.5189C76.7214 25.7359 75.1966 25.365 73.4246 25.365C71.6525 25.365 70.0453 25.7771 68.6853 26.5601C67.3254 27.3431 66.2951 28.4558 65.5121 29.8982C64.7703 31.3406 64.3994 32.989 64.3994 34.8847C64.3994 36.7392 64.7703 38.4288 65.4709 39.83C66.2127 41.2724 67.243 42.3851 68.5205 43.2093C69.798 43.9511 71.3228 44.3632 73.0125 44.3632ZM68.3144 31.1345C68.0672 31.6702 67.8611 32.2884 67.7375 32.9478H78.5347C78.4935 32.0824 78.2462 31.2993 77.8754 30.64C77.4632 29.857 76.8451 29.2388 76.1033 28.7855C75.3203 28.3322 74.4549 28.1261 73.4246 28.1261C72.2295 28.1261 71.158 28.3734 70.2926 28.9091C69.4271 29.4036 68.7678 30.1454 68.3144 31.1345Z"
									fill="#FBFBFB"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M94.8963 33.9781C94.4017 33.6484 93.7836 33.3599 93.0006 33.1126C92.1351 32.7829 91.0224 32.6181 89.7037 32.6181C87.4783 32.6181 85.7062 33.1538 84.4287 34.2253C83.1924 35.2968 82.5742 36.698 82.5742 38.47C82.5742 39.7064 82.8627 40.7778 83.4396 41.6433C84.0166 42.5087 84.7996 43.1681 85.7475 43.6626C86.7365 44.1159 87.7668 44.322 88.8795 44.322C89.8685 44.322 90.8988 44.1571 91.8879 43.7862C92.9181 43.4153 93.7836 42.8384 94.4429 42.0966C94.6078 41.9317 94.7726 41.7257 94.8963 41.5196V43.9511H98.0695V30.8872C98.0695 29.6921 97.781 28.7031 97.1629 27.8788C96.5859 27.0546 95.7617 26.4365 94.649 26.0244C93.5775 25.571 92.3412 25.365 90.94 25.365C89.2504 25.365 87.808 25.6123 86.5717 26.1068C85.3766 26.6013 84.4287 27.0958 83.7693 27.6316L85.2941 29.9806C85.5826 29.7745 85.9947 29.5273 86.4892 29.2388C86.9838 28.9503 87.6019 28.7031 88.3025 28.497C89.0443 28.291 89.8685 28.1673 90.7752 28.1673C91.3109 28.1673 91.8467 28.2085 92.3412 28.3322C92.8357 28.4558 93.289 28.6206 93.6599 28.8267C94.072 29.074 94.3605 29.4036 94.5666 29.8158C94.7726 30.2279 94.8963 30.7224 94.8963 31.3406V33.9781ZM86.2832 36.6568C85.9535 37.1513 85.7887 37.687 85.7887 38.3464C85.7887 39.047 85.9535 39.6239 86.2832 40.1185C86.6129 40.613 87.1074 40.9839 87.6844 41.2724C88.3025 41.5196 88.9619 41.6433 89.7449 41.6433C90.734 41.6433 91.5994 41.4372 92.3412 41.0663C93.1242 40.6542 93.7423 40.1185 94.1957 39.4179C94.6902 38.6761 94.8963 37.8519 94.8963 36.904V36.2034C94.4017 35.9562 93.866 35.7501 93.3715 35.6265C92.3824 35.338 91.3521 35.1732 90.2394 35.1732C89.2092 35.1732 88.3849 35.2968 87.7256 35.5853C87.0662 35.7913 86.5717 36.1622 86.2832 36.6568Z"
									fill="#FBFBFB"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M122.919 43.2092C121.477 43.9922 119.787 44.3631 117.851 44.3631C116.161 44.3631 114.636 43.951 113.317 43.168C112.04 42.3438 111.01 41.2311 110.268 39.7887C109.567 38.3463 109.196 36.6979 109.196 34.8434C109.196 32.9477 109.567 31.2993 110.309 29.8569C111.092 28.4145 112.122 27.3431 113.482 26.5188C114.842 25.7358 116.449 25.3237 118.221 25.3237C120.035 25.3237 121.56 25.6946 122.796 26.4776C124.073 27.2194 125.062 28.2909 125.763 29.6921C126.464 31.0932 126.793 32.7417 126.793 34.6786C126.793 34.8434 126.793 35.0495 126.752 35.2555V35.6264H112.411C112.493 36.6155 112.699 37.5221 113.029 38.2639C113.482 39.253 114.142 40.036 115.007 40.5717C115.872 41.1075 116.944 41.3547 118.18 41.3547C119.417 41.3547 120.529 41.1075 121.477 40.5717C122.425 40.036 123.249 39.1706 123.909 38.0579L126.464 39.6651C125.557 41.2723 124.362 42.4262 122.919 43.2092ZM112.576 32.9477C112.699 32.2884 112.864 31.6702 113.153 31.1345C113.647 30.1454 114.306 29.4036 115.131 28.9091C115.996 28.3733 117.026 28.1261 118.263 28.1261C119.293 28.1261 120.2 28.3321 120.941 28.7854C121.724 29.2388 122.301 29.8569 122.713 30.6399C123.084 31.2993 123.29 32.0823 123.373 32.9477H112.576Z"
									fill="#FBFBFB"
								/>
							</svg>
						</div>
						<div>
							<svg
								width="222"
								height="70"
								viewBox="0 0 222 70"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M50.5629 41.0744C57.4302 37.2215 66.1189 39.6073 70.0561 46.4265L64.1309 49.8474C57.2322 53.8305 48.4089 51.4169 44.498 44.4771L50.5629 41.0744Z"
									fill="#FBFBFB"
								/>
								<path
									d="M48.0514 38.3732C51.9743 31.5785 60.6631 29.2504 67.4578 33.1734L63.9064 39.3251C59.9831 46.1199 51.2947 48.4481 44.5 44.5248L48.0514 38.3732Z"
									fill="#FBFBFB"
								/>
								<path
									d="M44.1924 37.7151C44.1924 29.4742 50.873 22.7936 59.1137 22.7936V29.757C59.1137 37.9977 52.4331 44.6783 44.1924 44.6783V37.7151Z"
									fill="#FBFBFB"
								/>
								<path
									d="M40.6713 37.9988C36.7483 31.204 39.0763 22.5154 45.8714 18.5924L49.4228 24.744C53.3461 31.5389 51.0178 40.2275 44.2231 44.1504L40.6713 37.9988Z"
									fill="#FBFBFB"
								/>
								<path
									d="M44.1922 36.7202C44.1922 29.0289 37.9571 22.7936 30.2656 22.7936V30.7517C30.2656 38.4432 36.5008 44.6783 44.1922 44.6783V36.7202Z"
									fill="#FBFBFB"
								/>
								<path
									d="M41.1937 38.3732C37.2707 31.5785 28.582 29.2504 21.7871 33.1734L25.3387 39.3251C29.2618 46.1199 37.9503 48.4481 44.7451 44.5248L41.1937 38.3732Z"
									fill="#FBFBFB"
								/>
								<path
									d="M38.6814 41.0744C31.8143 37.2215 23.1256 39.6073 19.1885 46.4265L25.1135 49.8474C32.0123 53.8305 40.8357 51.4169 44.7466 44.4771L38.6814 41.0744Z"
									fill="#FBFBFB"
								/>
								<path
									d="M95.3764 28.1487V43.5707H92.2832V33.5397L88.1514 43.5707H85.8093L81.6556 33.5397V43.5707H78.5625V28.1487H82.0756L86.9804 39.6157L91.8855 28.1487H95.3764Z"
									fill="#FBFBFB"
								/>
								<path
									d="M99.1199 29.8721C98.5749 29.8721 98.1181 29.7027 97.7498 29.3639C97.3966 29.0104 97.2197 28.5759 97.2197 28.0604C97.2197 27.5449 97.3966 27.1177 97.7498 26.7789C98.1181 26.4254 98.5749 26.2487 99.1199 26.2487C99.6646 26.2487 100.114 26.4254 100.467 26.7789C100.836 27.1177 101.02 27.5449 101.02 28.0604C101.02 28.5759 100.836 29.0104 100.467 29.3639C100.114 29.7027 99.6646 29.8721 99.1199 29.8721ZM100.644 31.3303V43.5707H97.5511V31.3303H100.644Z"
									fill="#FBFBFB"
								/>
								<path
									d="M109.599 31.1536C111.058 31.1536 112.236 31.6175 113.134 32.5455C114.033 33.4587 114.482 34.7402 114.482 36.3899V43.5707H111.389V36.8099C111.389 35.8375 111.146 35.0937 110.66 34.5782C110.174 34.0479 109.511 33.7828 108.672 33.7828C107.817 33.7828 107.14 34.0479 106.639 34.5782C106.153 35.0937 105.91 35.8375 105.91 36.8099V43.5707H102.816V31.3303H105.91V32.8548C106.322 32.3246 106.845 31.9121 107.478 31.6175C108.127 31.3082 108.833 31.1536 109.599 31.1536Z"
									fill="#FBFBFB"
								/>
								<path
									d="M115.744 37.4063C115.744 36.1689 115.987 35.0716 116.473 34.1142C116.974 33.1567 117.652 32.4203 118.506 31.9047C119.36 31.3892 120.311 31.1314 121.356 31.1314C122.152 31.1314 122.91 31.3082 123.632 31.6617C124.354 32.0005 124.928 32.4571 125.355 33.0315V27.2208H128.493V43.5707H125.355V41.7587C124.972 42.3628 124.435 42.8488 123.742 43.217C123.05 43.5852 122.247 43.7694 121.334 43.7694C120.303 43.7694 119.36 43.5043 118.506 42.9738C117.652 42.4437 116.974 41.7 116.473 40.7426C115.987 39.7702 115.744 38.6583 115.744 37.4063ZM125.377 37.4504C125.377 36.6993 125.23 36.0584 124.935 35.5282C124.641 34.9832 124.243 34.5708 123.742 34.2909C123.241 33.9963 122.704 33.849 122.129 33.849C121.555 33.849 121.025 33.989 120.539 34.2688C120.052 34.5487 119.655 34.9611 119.345 35.5061C119.051 36.0364 118.904 36.6698 118.904 37.4063C118.904 38.1427 119.051 38.7906 119.345 39.3506C119.655 39.8957 120.052 40.3153 120.539 40.6099C121.039 40.9045 121.57 41.0517 122.129 41.0517C122.704 41.0517 123.241 40.9117 123.742 40.6321C124.243 40.3375 124.641 39.9248 124.935 39.3947C125.23 38.8497 125.377 38.2014 125.377 37.4504Z"
									fill="#FBFBFB"
								/>
								<path
									d="M136.242 33.8712H134.099V43.5707H130.961V33.8712H129.569V31.3303H130.961V30.7117C130.961 29.2093 131.388 28.1046 132.242 27.3976C133.097 26.6905 134.386 26.3591 136.109 26.4033V29.0104C135.358 28.9957 134.835 29.1209 134.54 29.386C134.246 29.6512 134.099 30.1299 134.099 30.8222V31.3303H136.242V33.8712Z"
									fill="#FBFBFB"
								/>
								<path
									d="M148.919 31.3303V43.5707H145.804V42.0238C145.406 42.5542 144.883 42.9739 144.235 43.2834C143.601 43.578 142.909 43.7253 142.158 43.7253C141.201 43.7253 140.354 43.5262 139.617 43.1288C138.881 42.7161 138.299 42.1197 137.872 41.3391C137.459 40.5436 137.253 39.6011 137.253 38.511V31.3303H140.346V38.0691C140.346 39.0411 140.589 39.7925 141.075 40.3226C141.562 40.8381 142.224 41.0959 143.064 41.0959C143.918 41.0959 144.588 40.8381 145.074 40.3226C145.56 39.7925 145.804 39.0411 145.804 38.0691V31.3303H148.919Z"
									fill="#FBFBFB"
								/>
								<path
									d="M154.18 27.2208V43.5707H151.087V27.2208H154.18Z"
									fill="#FBFBFB"
								/>
								<path
									d="M163.135 31.1536C164.593 31.1536 165.771 31.6175 166.67 32.5455C167.568 33.4587 168.017 34.7402 168.017 36.3899V43.5707H164.924V36.8099C164.924 35.8375 164.681 35.0937 164.195 34.5782C163.709 34.0479 163.046 33.7828 162.207 33.7828C161.352 33.7828 160.675 34.0479 160.174 34.5782C159.688 35.0937 159.445 35.8375 159.445 36.8099V43.5707H156.352V31.3303H159.445V32.8548C159.857 32.3246 160.38 31.9121 161.013 31.6175C161.662 31.3082 162.369 31.1536 163.135 31.1536Z"
									fill="#FBFBFB"
								/>
								<path
									d="M181.454 37.1854C181.454 37.6273 181.425 38.025 181.366 38.3783H172.418C172.492 39.262 172.801 39.9544 173.346 40.4553C173.891 40.9559 174.561 41.2064 175.356 41.2064C176.505 41.2064 177.323 40.7131 177.809 39.7262H181.145C180.792 40.9045 180.114 41.8765 179.112 42.6425C178.111 43.3939 176.881 43.7694 175.422 43.7694C174.244 43.7694 173.184 43.5116 172.241 42.9961C171.313 42.466 170.584 41.7219 170.054 40.7645C169.538 39.8071 169.28 38.7024 169.28 37.4504C169.28 36.1837 169.538 35.0716 170.054 34.1142C170.569 33.1568 171.291 32.4203 172.219 31.9048C173.147 31.3892 174.215 31.1315 175.422 31.1315C176.586 31.1315 177.624 31.3819 178.538 31.8827C179.466 32.3835 180.18 33.0978 180.681 34.0258C181.197 34.939 181.454 35.9922 181.454 37.1854ZM178.25 36.3015C178.236 35.5061 177.949 34.8728 177.389 34.4014C176.829 33.9154 176.144 33.6723 175.334 33.6723C174.568 33.6723 173.92 33.908 173.39 34.3793C172.874 34.8359 172.558 35.4767 172.44 36.3015H178.25Z"
									fill="#FBFBFB"
								/>
								<path
									d="M187.512 43.7694C186.51 43.7694 185.612 43.5926 184.816 43.2393C184.021 42.8711 183.387 42.3774 182.916 41.7587C182.46 41.14 182.209 40.4553 182.165 39.7039H185.28C185.339 40.1753 185.568 40.5658 185.965 40.875C186.378 41.1845 186.886 41.3391 187.49 41.3391C188.079 41.3391 188.536 41.2213 188.86 40.9854C189.199 40.7499 189.368 40.448 189.368 40.0798C189.368 39.682 189.162 39.3875 188.749 39.1961C188.352 38.9897 187.711 38.7688 186.827 38.5329C185.914 38.3119 185.163 38.0837 184.573 37.8482C183.999 37.6123 183.498 37.2517 183.071 36.7654C182.659 36.2794 182.452 35.624 182.452 34.7991C182.452 34.1216 182.644 33.5029 183.027 32.9432C183.424 32.3835 183.984 31.9416 184.706 31.6175C185.442 31.2935 186.304 31.1315 187.291 31.1315C188.749 31.1315 189.913 31.4997 190.782 32.2362C191.651 32.9579 192.129 33.9375 192.218 35.1747H189.257C189.213 34.6886 189.007 34.3057 188.639 34.0258C188.285 33.7312 187.807 33.5839 187.202 33.5839C186.643 33.5839 186.208 33.6871 185.899 33.8933C185.605 34.0995 185.457 34.3867 185.457 34.7549C185.457 35.1674 185.663 35.484 186.076 35.705C186.488 35.9112 187.129 36.1248 187.998 36.3457C188.882 36.5667 189.611 36.7949 190.185 37.0308C190.76 37.2663 191.253 37.6345 191.666 38.1355C192.093 38.6215 192.314 39.2697 192.329 40.0798C192.329 40.7867 192.129 41.42 191.732 41.9796C191.349 42.5396 190.789 42.9815 190.053 43.3053C189.331 43.6148 188.484 43.7694 187.512 43.7694Z"
									fill="#FBFBFB"
								/>
								<path
									d="M198.668 43.7694C197.666 43.7694 196.768 43.5926 195.973 43.2393C195.177 42.8711 194.544 42.3774 194.073 41.7587C193.616 41.14 193.365 40.4553 193.321 39.7039H196.437C196.496 40.1753 196.724 40.5658 197.122 40.875C197.534 41.1845 198.042 41.3391 198.646 41.3391C199.235 41.3391 199.692 41.2213 200.016 40.9854C200.355 40.7499 200.524 40.448 200.524 40.0798C200.524 39.682 200.318 39.3875 199.905 39.1961C199.508 38.9897 198.867 38.7688 197.983 38.5329C197.07 38.3119 196.319 38.0837 195.73 37.8482C195.155 37.6123 194.654 37.2517 194.227 36.7654C193.815 36.2794 193.609 35.624 193.609 34.7991C193.609 34.1216 193.8 33.5029 194.183 32.9432C194.581 32.3835 195.141 31.9416 195.862 31.6175C196.599 31.2935 197.46 31.1315 198.447 31.1315C199.905 31.1315 201.069 31.4997 201.938 32.2362C202.807 32.9579 203.286 33.9375 203.374 35.1747H200.414C200.369 34.6886 200.163 34.3057 199.795 34.0258C199.442 33.7312 198.963 33.5839 198.359 33.5839C197.799 33.5839 197.365 33.6871 197.055 33.8933C196.761 34.0995 196.613 34.3867 196.613 34.7549C196.613 35.1674 196.819 35.484 197.232 35.705C197.645 35.9112 198.285 36.1248 199.154 36.3457C200.038 36.5667 200.767 36.7949 201.341 37.0308C201.916 37.2663 202.41 37.6345 202.822 38.1355C203.249 38.6215 203.47 39.2697 203.485 40.0798C203.485 40.7867 203.286 41.42 202.888 41.9796C202.505 42.5396 201.946 42.9815 201.209 43.3053C200.487 43.6148 199.64 43.7694 198.668 43.7694Z"
									fill="#FBFBFB"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="right w-1/2 flex items-center justify-start">
				<svg
					width="750"
					height="750"
					viewBox="0 0 750 750"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle
						cx="375"
						cy="375"
						r="374"
						stroke="url(#paint0_linear_121_1315)"
						stroke-opacity="0.4"
						stroke-width="2"
					/>

					<foreignObject
						x="50"
						y="50"
						width="650"
						height="650">
						<svg
							width="650"
							height="650"
							viewBox="0 0 650 650"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle
								cx="325"
								cy="325"
								r="324"
								stroke="url(#paint0_linear_121_1314)"
								stroke-opacity="0.22"
								stroke-width="2"
							/>

							<foreignObject
								x="50"
								y="50"
								width="550"
								height="550">
								<svg
									width="550"
									height="550"
									viewBox="0 0 550 550"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<image
										href="../src/assets/homepage/page1Hero.png"
										width="550"
										height="550"
										alt=""
									/>
								</svg>
							</foreignObject>

							<defs>
								<linearGradient
									id="paint0_linear_121_1314"
									x1="325"
									y1="0"
									x2="325"
									y2="650"
									gradientUnits="userSpaceOnUse">
									<stop
										offset="0.114583"
										stop-color="white"
									/>
									<stop offset="0.5" />
									<stop
										offset="0.942708"
										stop-color="#99EDE5"
									/>
								</linearGradient>
							</defs>
						</svg>
					</foreignObject>

					<defs>
						<linearGradient
							id="paint0_linear_121_1315"
							x1="375"
							y1="0"
							x2="375"
							y2="750"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#FBFBFB" />
							<stop
								offset="0.53125"
								stop-color="#06F8E1"
							/>
							<stop
								offset="1"
								stop-color="#64CCC5"
							/>
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default Page1;