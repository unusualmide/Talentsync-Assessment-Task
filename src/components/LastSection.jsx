function LastSection() {
  return (
    <div className="flex mt-24 ml-20 overflow-hidden">
      <div className=" w-[579px] flex-col items-start gap-10 flex-shrink-0">
        <div className="flex flex-col self-stretch gap-8 flex-start">
        <h3 className="self-stretch text-5xl text-gray/600 font-semibold tracking-[-0.96px]">Ready to clear the path to <span className="block ">perfect communication?</span></h3>
        <div className="flex flex-col gap-5 ">
          <div className="inline-flex gap-3">
            <img src=" /images/check-circle.svg" alt=" check-circle" />
            <p className="text-2xl font-normal text-gray/600">30 days free trial</p>
          </div>
          <div className="inline-flex gap-3">
            <img src=" /images/check-circle.svg" alt=" check-circle" />
            <p className="text-2xl font-normal text-gray/600">Cancel at any time</p>
          </div>
          <div className="inline-flex gap-3">
            <img src=" /images/check-circle.svg" alt=" check-circle" />
            <p className="text-2xl font-normal text-gray/600">Access to all features</p>
          </div>
          <div className="inline-flex gap-3">
            <img src=" /images/check-circle.svg" alt=" check-circle" />
            <p className="text-2xl font-normal text-gray/600">Personalized onboarding</p>
          </div>
        </div>
        <div className="flex gap-2 ">
          <button className=" rounded-[100px] border border-gray/400 flex justify-center items-center px-6 py-3.5 gap-1 text-gray/900 font-base font-semibold box-shadow">
            Talk to sales
          </button>
          <button className=" rounded-[100px] border bg-blue/700 flex justify-center items-center px-6 py-3.5 gap-1 text-white font-base font-semibold box-shadow">
            Start your free trial
          </button>
        </div>
        </div>
      </div>
      <img className="object-contain " src="/images/screen-mockup.png" alt=" screen-mockup" />
    </div>
  )
}

export default LastSection
