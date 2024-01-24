function Header() {
  return (
    <header className="mx-20 mt-10 mb-24">
      <div className="flex items-center justify-between rounded-[100px] border border-gray/300 bg-gray/100 px-8 py-4">
        <div className="inline-flex gap-2.5 justify-center items-center">
          <img className="block" src="/images/Group.svg" alt="Group" />
          <p className="text-2xl font-semibold leading-normal text-gray/900">
            ClearLink<span className="text-blue/400">.</span>
          </p>
        </div>
        <div className="flex gap-10">
          <div className="inline-flex items-center justify-center gap-1.5">
            <h5 className="text-lg font-semibold text-gray/500">Products</h5>
            <img src="/images/chevron-down.svg" alt="products" />
          </div>
          <div className="inline-flex items-center justify-center gap-1.5">
            <h5 className="text-lg font-semibold text-gray/500">Solutions</h5>
            <img src="/images/chevron-down.svg" alt="Solutions" />
          </div>
          <div className="inline-flex items-center justify-center gap-1.5">
            <h5 className="text-lg font-semibold text-gray/500">Resources</h5>
            <img src="/images/chevron-down.svg" alt="Resources" />
          </div>
          <div className="inline-flex items-center justify-center gap-1.5">
            <h5 className="text-lg font-semibold text-gray/500">Pricing</h5>
          </div>
        </div>
        <div className="flex gap-2 ">
          <button className=" rounded-[100px] border border-gray/400 flex justify-center items-center px-6 py-3.5 gap-1 text-gray/900 font-base font-semibold box-shadow">
            Talk to sales
          </button>
          <button className=" rounded-[100px] border bg-blue/700 flex justify-center items-center px-6 py-3.5 gap-1 text-white font-base font-semibold box-shadow">
            Sign up for free
          </button>
        </div>
      </div>
      <div className="flex pt-40">
        <div className="flex flex-col items-start gap-12">
          <div className="inline-flex flex-col gap-6">
            <h2 className="text-5xl w-[780px] font-semibold leading-[64px] tracking-[-1.28px]  text-gray-800 ">
              Uniting the world,
              <span className="block">one video call at a time</span>
            </h2>
            <h5 className="text-2xl font-normal text-gray/500 text-balance">
              Experience the future of communication with ClearLink – <span className="block">where
              crystal-clear video conferencing meets</span> unparalleled simplicity.
            </h5>
          </div>
          <div className="flex gap-5 ">
          <button className=" rounded-[100px] border bg-blue/700 flex justify-center items-center px-6 py-3.5 gap-1 text-white font-base font-semibold box-shadow">
            Start your free trial
          </button>
          <button className=" rounded-[100px] text-blue/700 flex justify-center items-center px-6 py-3.5 gap-1 font-base font-semibold box-shadow">
            <img className="pr-3" src="/images/Frame 10.svg" alt="Frame 10" />
           Discover AI assistant
          </button>
          </div>
          <div className="flex gap-4 ">
            <div className="flex">
              <img className="z-0 object-contain -mr-3" src="images/Avatar-1.png" alt="Avatar-1"/>
              <img className="z-10 object-contain -mr-3" src="images/Avatar-5.png" alt="Avatar-5"/>
              <img className="z-20 object-contain -mr-3" src="images/Avatar-2.png" alt="Avatar-2"/>
              <img className="z-30 object-contain -mr-3" src="images/Avatar-4.png" alt="Avatar-4"/>
              <img className="z-40 object-contain -mr-3" src="images/Avatar-3.png" alt="Avatar-3"/>
            </div>
            <div className="inline-flex flex-col gap-2.5">
              <div className="flex gap-2">
                <div className="inline-flex gap-1 ">
                <img className="object-contain" src="images/Star.svg" alt="Star" />
                <img className="object-contain" src="images/Star.svg" alt="Star" />
                <img className="object-contain " src="images/Star.svg" alt="Star" />
                <img className="object-contain" src="images/Star.svg" alt="Star" />
                <img className="object-contain " src="images/Star.svg" alt="Star" />
                </div>
                <p className="text-base font-semibold text-gray/700">5.0</p>
              </div>
              <p className="text-base font-medium text-gray-600 ">from 3000+ reviews</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-8 border border-blue/200 rounded-2xl bg-blue/50 box-shadow-2">
          <div className="flex flex-row flex-wrap gap-5 ">
             <div className="w-[100.594px] h-[100.594px] bg-orange-dark/300 rounded-xl shrink-0">
              <img src="images/image 21.png" alt="image 21" />
             </div>
             <div className="w-[100.594px] h-[100.594px] bg-primary/300 rounded-xl shrink-0">
              <img src="images/image 100.png" alt="image 100" />
             </div>
             <div className="w-[100.594px] h-[100.594px] bg-moss/300 rounded-xl shrink-0">
              <img src="images/image 8.png" alt="image 8" />
             </div>
             <div className="w-[100.594px] h-[100.594px] bg-gray-blue/300 rounded-xl shrink-0">
              <img src="images/image 72.png" alt="image 72" />
             </div>
             <div className="w-[100.594px] h-[100.594px] bg-warning/300 rounded-xl shrink-0">
              <img src="images/image 108.png" alt="image 108" />
             </div>
             <div className="w-[100.594px] h-[100.594px] bg-rose/300 rounded-xl shrink-0">
              <img src="images/image 103.png" alt="image 103" />
             </div>
          </div>
          <div className="flex gap-4 flex-start">
              <div className="flex p-3 justify-center items-center gap-2.5 rounded-[100px] border border-blue/100 bg-white box-shadow">
                <img src="/images/microphone-01.svg" alt=" microphone" />
              </div>
              <div className="flex p-3 justify-center items-center gap-2.5 rounded-[100px] border border-blue/100 bg-white box-shadow">
                <img src="/images/video-recorder.svg" alt="video-recorder" />
              </div>
              <div className="flex p-3 justify-center items-center gap-2.5 rounded-[100px] border border-blue/100 bg-white box-shadow">
                <img src="/images/monitor-01.svg" alt=" monitor" />
              </div>
              <div className="flex p-3 justify-center items-center gap-2.5 rounded-[100px] border border-blue/100 bg-white box-shadow">
                <img src="/images/face-smile.svg" alt="face-smile" />
              </div>
              <div className="flex p-3 justify-center items-center gap-2.5 rounded-[100px] border border-blue/100 bg-white box-shadow">
                <img src="/images/message-text-circle-02.svg" alt=" message" />
              </div>
              <div className="flex p-3 justify-center items-center gap-2.5 rounded-[100px] border border-blue/100 bg-white box-shadow">
                <img src="/images/settings-01.svg" alt=" settings" />
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
