function Support() {
  return (
    <div className="flex items-start gap-24 mx-20 my-24 bg-white">
      <div className="flex flex-col items-start gap-5 w-[547px]">
        <div className="inline-flex flex-col gap-3 \">
          <p className="self-stretch font-semibold text-blue/700">Support</p>
          <p className="self-stretch text-5xl font-semibold text-gray/800 tracking-[0.96px]">FAQs</p>
        </div>
        <p className="text-xl font-medium text-gray/500">Everything you need to know about the product <span className="">and billing. Can’t find the answer you’re looking</span> for? Please chat to our friendly team.</p>
      </div>
      <div className="flex flex-col items-center flex-shrink-0 gap-1">
        <div className="flex flex-col items-start self-stretch gap-2 p-8 border rounded-2xl border-gray/200 bg-gray/50">
          <div className="inline-flex gap-6">
            <h4 className="self-stretch text-xl font-semibold text-gray/900  w-[565px]">How many participants can join a ClearLink video conference?</h4>
            <img src=" /images/minus-circle.svg" alt=" minus-circle" />
          </div>
          <p className="text-base font-normal text-gray/600 ">ClearLink offers flexible meeting options. Depending on your subscription <span className="block">plan, you can host meetings with varying numbers of participants. Our plans</span> <span className="block ">are designed to accommodate small team collaborations and large-scale</span> webinars, ensuring you have the right fit for your needs.</p>
        </div>
        <div className="inline-flex gap-6 p-8 rounded-2xl">
            <h4 className="self-stretch text-xl font-semibold text-gray/900 w-[565px]">Can i use ClearLink on multiple devices?</h4>
            <img src="/images/plus-circle.svg" alt=" plus-circle" />
          </div>
          <div className="inline-flex gap-6 p-8 rounded-2xl">
            <h4 className="self-stretch text-xl font-semibold text-gray/900 w-[565px]">Is ClearLink compatible with other video conferencing platforms?</h4>
            <img src="/images/plus-circle.svg" alt=" plus-circle" />
          </div>
          <div className="inline-flex gap-6 p-8 rounded-2xl">
            <h4 className="self-stretch text-xl font-semibold text-gray/900 w-[565px]">How does ClearLink ensure the security of my video conferences?</h4>
            <img src="/images/plus-circle.svg" alt=" plus-circle" />
          </div>
          <div className="inline-flex gap-6 p-8 rounded-2xl">
            <h4 className="self-stretch text-xl font-semibold text-gray/900 w-[565px]">Do I need to download any software to use ClearLink?</h4>
            <img src="/images/plus-circle.svg" alt=" plus-circle" />
          </div>
          <div className="inline-flex gap-6 p-8 rounded-2xl">
            <h4 className="self-stretch text-xl font-semibold text-gray/900 w-[565px]">What kind of customer support does ClearLink provide?</h4>
            <img src="/images/plus-circle.svg" alt=" plus-circle" />
          </div>
      </div>
    </div>
  )
}

export default Support
