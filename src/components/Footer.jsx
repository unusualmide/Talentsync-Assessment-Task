function Footer() {
  return (
    <div className="flex mx-20 mt-24 mb-12">
        <div className="flex flex-col gap-8 pr-[100px]">
        <div className="inline-flex gap-2.5">
          <img className="block" src="/images/Group.svg" alt="Group" />
          <p className="text-2xl font-semibold leading-normal text-gray/900">
            ClearLink<span className="text-blue/400">.</span>
          </p>
          </div>
          <p className="text-lg font-normal text-gray/600 ">ClearLink is your gateway to effortless, high-<span className="block">quality video conferencing. Join us in shaping</span> the future of communication!</p>
        </div>
        <div className="flex flex-col gap-4 pr-8 w-32">
          <p className="pb-4 text-base font-semibold text-gray/500">Product</p>    
          <a className=" text-gray/600">Overview</a>
          <a className=" text-gray/600">Features</a>
          <a className=" text-gray/600">Solutions</a>
          <a className=" text-gray/600">Tutorials</a>
          <a className=" text-gray/600">Pricing</a>
        </div>
        <div className="flex flex-col gap-4 pr-8 w-32">
          <p className="pb-4 text-base font-semibold text-gray/500">Company</p>    
          <a className=" text-gray/600">About us</a>
          <a className=" text-gray/600">Careers</a>
          <a className=" text-gray/600">Press</a>
          <a className=" text-gray/600">News</a>
          <a className=" text-gray/600">Contact</a>
        </div>
        <div className="flex flex-col gap-4 pr-8 w-32">
          <p className="pb-4 text-base font-semibold text-gray/500">Resources</p>    
          <a className=" text-gray/600">Blog</a>
          <a className=" text-gray/600">Events</a>
          <a className=" text-gray/600">Help centre</a>
          <a className=" text-gray/600">Tutorials</a>
          <a className=" text-gray/600">Support</a>
        </div>
        <div className="flex flex-col gap-4 pr-8 w-32">
          <p className="pb-4 text-base font-semibold text-gray/500">Legal</p>    
          <a className=" text-gray/600">Terms</a>
          <a className=" text-gray/600">Privacy</a>
          <a className=" text-gray/600">Cookies</a>
          <a className=" text-gray/600">Licenses</a>
          <a className=" text-gray/600">Contact</a>
        </div>
        <div className=" flex flex-col gap-4">
          <p className="  text-blue/700 text-base font-semibold ">Get the app</p>
          <div>
            <img src=" /images/app-store.svg" alt=" app-store" />
          </div>
          <div>
            <img className=" w-[135px] h-10" src=" /images/play-store.png" alt=" play-store" />
          </div>
        </div>
    </div>
  )
}

export default Footer
