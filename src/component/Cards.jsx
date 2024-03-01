import React from "react";

const Cards = () => {
  return (
    <>
      <span className="flex w-full flex-col mt-72 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-black text-8xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
          Price
        </div>{" "}
        <div className="self-stretch mt-28 px-px max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <span className="bg-black flex grow flex-col items-center w-full pl-14 pr-20 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-white text-5xl font-bold whitespace-nowrap mt-6 max-md:text-4xl">
                  Basic Plan
                </div>{" "}
                <div className="text-white text-2xl whitespace-nowrap mt-12 max-md:mt-10">
                  Lorem Ipsum{" "}
                </div>{" "}
                <div className="text-white text-4xl font-bold whitespace-nowrap mt-14 max-md:mt-10">
                  Rs. xx,xxx
                </div>{" "}
                <span className="flex gap-5 mt-20 self-start items-start max-md:mt-10">
                  <div className="flex w-[25px] shrink-0 h-[25px] flex-col rounded-[50%]" />{" "}
                  <div className="text-white text-3xl grow shrink basis-auto">
                    Lorem Ipsum{" "}
                  </div>
                </span>{" "}
                <span className="flex gap-5 mt-10 self-start items-start">
                  <div className="flex w-[25px] shrink-0 h-[25px] flex-col rounded-[50%]" />{" "}
                  <div className="text-white text-3xl self-stretch grow shrink basis-auto">
                    Lorem Ipsum{" "}
                  </div>
                </span>{" "}
                <span className="flex gap-5 mt-9 self-start items-start">
                  <div className="flex w-[25px] shrink-0 h-[25px] flex-col rounded-[50%]" />{" "}
                  <div className="text-white text-3xl grow shrink basis-auto">
                    Lorem Ipsum{" "}
                  </div>
                </span>{" "}
                <span className="flex gap-5 mt-10 self-start items-start">
                  <div className="flex w-[25px] shrink-0 h-6 flex-col rounded-[50%]" />{" "}
                  <div className="text-white text-3xl self-stretch grow shrink basis-auto">
                    Lorem Ipsum{" "}
                  </div>
                </span>{" "}
                <span className="text-white text-base font-bold whitespace-nowrap bg-blue-600 justify-center items-stretch mt-24 mb-2.5 px-14 py-5 rounded-[30px] max-md:mt-10 max-md:px-5">
                  BUY NOW
                </span>
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-4xl font-bold whitespace-nowrap bg-zinc-300 grow justify-center items-center w-full pt-80 pb-80 px-16 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-10">
                Standard Plan
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-4xl font-bold whitespace-nowrap bg-zinc-300 grow justify-center items-center w-full pt-80 pb-80 px-16 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-10">
                Premium Plan
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="text-amber-300 text-6xl font-extrabold self-stretch max-w-[1591px] mt-80 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          <span className="text-blue-600">Clients give us </span>
          <br />
          <span className="text-cyan-900">manyreviews for</span>
          <span className="text-amber-300"> the Services.</span>
        </div>{" "}
        <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0">
              <span className="shadow-md flex grow flex-col w-full pl-12 pr-20 py-12 rounded-[30px] items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-white text-6xl font-extrabold mt-2 max-md:max-w-full max-md:text-4xl">
                  Lorem Ipsum
                </div>{" "}
                <div className="text-white text-5xl font-extrabold max-w-[525px] mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  Lorem Ipsum is simply <br />
                  dummytextof the printing
                  <br /> and typesetting
                </div>{" "}
                <div className="flex w-[525px] max-w-full items-stretch gap-3.5 mt-20 mb-4 pr-20 max-md:flex-wrap max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16309e189d496bae02fe875c535b928ff1027774a19ed056b0814e3a2a31958?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.06] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a2ffcbd3c4b8ecb3294e6e98eb80f14f3e67224497aedeb82254bdcb5ab55e2?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b385087ac62befe8d28a5f2c282e0d3ebe6425370b739e6901c84c6e4d781edc?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.06] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ab262e0e7dcf3aab974559223013af1c717cd6b643d9021c6e00e6c530515e7?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/36fa0f4028a94416a957f49f0fb7ef1b99740ba6411ee2f5e29c61c42190b0d1?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />
                </div>
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
              <span className="shadow-md bg-gray-900 flex grow flex-col w-full pl-14 pr-20 py-12 rounded-[30px] items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-white text-5xl font-extrabold mt-2.5 max-md:text-4xl">
                  Lorem Ipsum
                </div>{" "}
                <div className="text-white text-3xl font-extrabold max-w-[403px] mt-14 max-md:mt-10">
                  Lorem Ipsum is simply <br />
                  dummytextof the printing
                  <br /> and typesetting
                </div>{" "}
                <div className="flex w-[403px] max-w-full items-stretch gap-2.5 mt-12 mb-44 pr-20 max-md:my-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce9d16cc08db7412065406e1637c5fe51b943b627d9119d6c348253aed3eb00?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.07] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7971e1c1fcde41c1d5c0a23327d58da535849794c17cc67af50acb6075d664f5?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.07] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46fbab0a766a6e0fff06340969f9b0cbc369bacefd3036ebf57882083899bfd6?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.05] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72e3eb93c0db4cd4dd2b05477eaac4b64610f46d1724bb3067e935bab4d6878?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.1] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0027f1bf9f0a9a246a6436ebce98cb4ad430411615e4bf5dac59ec155a92d3?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.07] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <div className="bg-orange-600 flex flex-col justify-center items-center px-16 py-12 rounded-[30px] max-md:max-w-full max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5ac34a392b2123ea3d2f9ad8e9ad1a6894a3c49efe3e214a112584313f7691f?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.01] object-contain object-center w-[386px] overflow-hidden max-w-full mt-16 mb-16 max-md:my-10"
                  />
                </div>{" "}
                <span className="flex flex-col mt-10 pl-12 pr-20 py-12 rounded-[30px] items-start max-md:max-w-full max-md:px-5">
                  <div className="text-white text-6xl font-extrabold whitespace-nowrap mt-1.5 max-md:text-4xl">
                    Lorem Ipsum
                  </div>{" "}
                  <div className="text-white text-2xl font-extrabold max-w-[402px] mt-14 max-md:mt-10">
                    Lorem Ipsum is simply <br />
                    dummytextof the printing
                    <br /> and typesetting
                  </div>{" "}
                  <div className="flex w-[402px] max-w-full items-stretch gap-2 mt-8 mb-60 pr-20 max-md:mb-10 max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0c03a3d60161106957b38eaea7ace933b418829bcd00f4b9e3128ebe1eff4c?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                      className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/432d020a870902bad11b68b0da9463cb59e888252b399273e3a7e412c9798ffd?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                      className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb515cfb1fed3bbac45ec3735af1d77108f30c5d0e935b546e94e167e568e963?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                      className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/464193cf1f6cb341f20a0025ed7288b5f25c6de4c4b27d720faf8473697247b6?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                      className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f50e540262000d0867129a73d0a7ebab37d09ce8dab53cd66352d627ff82c40?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                      className="aspect-[1.08] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </span>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-green-950 flex grow flex-col w-full pl-10 pt-8 rounded-[30px] items-start max-md:max-w-full max-md:mt-10 max-md:pl-5">
                <div className="flex w-[296px] max-w-full items-stretch gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec521e7c8dcd73d309a8e908bcc8e60172111f068b71f5ed2294a155ebba4c3?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.06] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/18bb388af6bf686fa16bcd39373a79fec22606c32f6fd059d61dcc42175a1515?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.09] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87d88cb4212d995ce9871f5bab79f7632db8f2a65b9e6c026c3ccbf27f2d6328?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.06] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fbc3d03481fa5c89ab0586e301adb4abc75756eec767f4cd67bfe96c4028682?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.09] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7becfeb68b4eeed0cb584dadd1839ab8e31b48ff04439e959fefcec8a5ff5aff?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                    className="aspect-[1.06] object-contain object-center w-full fill-amber-300 overflow-hidden shrink-0 flex-1"
                  />
                </div>{" "}
                <div className="z-[1] mb-0 mt-16 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
                      <div className="text-white text-5xl font-extrabold z-[1] mt-[756px] max-md:max-w-full max-md:text-4xl max-md:mt-10">
                        Lorem Ipsum is simply <br />
                        dummytextof the printing
                        <br /> and typesetting
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex-col text-white text-6xl font-extrabold relative whitespace-nowrap shadow-sm overflow-hidden min-h-[1293px] grow justify-center items-center pt-[1090px] pb-28 px-16 max-md:text-4xl max-md:max-w-full max-md:px-5 max-md:py-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75b94add8357f2058077da39071626e18a19af7b9a8d9ed7bd137d2ce236b97?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />{" "}
                        Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>{" "}
      </span>{" "}
    </>
  );
};

export default Cards;
