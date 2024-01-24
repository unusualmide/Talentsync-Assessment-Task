function Testimonials() {
  return (
    <div className="flex items-center justify-center px-20 py-24 gap-14 bg-gray/50">
      <div className="flex flex-col items-start gap-12 w-[640px] ">
        <img src=" images/Shopify.svg" alt="Shopify" />
        <div className="inline-flex gap-1 ">
          <img className="object-contain" src="images/Star.svg" alt="Star" />
          <img className="object-contain" src="images/Star.svg" alt="Star" />
          <img className="object-contain " src="images/Star.svg" alt="Star" />
          <img className="object-contain" src="images/Star.svg" alt="Star" />
          <img className="object-contain " src="images/Star.svg" alt="Star" />
        </div>
        <h2 className="self-stretch text-gray/900 text-[40px] font-medium tracking-[-0.88px] ">
          ClearLink has upgraded our <span className="block ">remote meetings. High-quality</span> <span className="block ">video, screen
          sharing, and</span> <span className="block ">top-notch security make it</span> essential for our team.
        </h2>
        <div className="flex">
          <img src="/images/Avatar.png" alt=" Avatar" />
          <div className="inline-flex flex-col gap-[2px] pl-4 pr-3">
            <p className="text-xl font-semibold text-gray/900 ">Sarah Thompson</p>
            <p className="text-lg font-normal text-gray/600 ">Project Manager, Shopify</p>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center justify-center gap-3 bg-arrow  w-14 h-14 rounded-[28px] border border-blue/100">
              <img src=" /images/arrow-left.svg" alt=" arrow-left" />
            </div>
            <div className="flex items-center justify-center gap-3 bg-arrow  w-14 h-14 rounded-[28px] border border-blue/100">
              <img src=" /images/arrow-right.svg" alt=" arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 h-[496px]">
        <div className="inline-flex items-center justify-center gap-4">
        <img className="self-end object-contain" src=" /images/Image-5.png" alt=" image-1" />
        <img className="object-contain " src=" /images/Image-1.png" alt=" image-2" />
        </div>
        <div className="inline-flex items-center justify-center gap-4">
        <img className="self-start object-contain" src=" /images/Image-3.png" alt=" image-3" />
        <img className="object-contain " src=" /images/Image-4.png" alt=" image-4" />
        <img className="self-start object-contain" src=" /images/Image-2.png" alt=" image-5" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
