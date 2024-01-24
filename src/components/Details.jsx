function Details() {
  return (
    <div className="inline-flex flex-col items-start gap-20 mx-20 my-24 bg-white">
      <div className="flex flex-col items-start gap-5">
        <p className="text-lg font-semibold text-blue/700">
          The ClearLink Advantage
        </p>
        <h2 className="text-5xl font-semibold tracking-[-0.96px] text-gray/800">
          Why choose ClearLink?
        </h2>
        <p className="text-2xl font-normal text-gray/500">
          In a world where connection is everything, ClearLink takes the lead.
          Our
          <span className="block ">
            cutting-edge video conferencing app offers:
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <div className="grid grid-cols-2 items-start justify-start flex-shrink-0 gap-x-5 gap-y-10 w-[800px]">
          <div className="flex flex-col items-start gap-5">
            <img src=" images/video-recorder.svg" alt=" video-recorder" />
            <div className="flex flex-col items-start self-stretch gap-2">
              <h4 className="text-xl font-semibold text-gray/900">
                Crystal-clear HD video
              </h4>
              <p className="text-base font-normal text-gray/600">
                No more pixelation or blurriness – just
                <span className="block">
                  stunning, lifelike clarity that brings your
                </span>
                team closer in meetings.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <img src=" images/recording-01.svg" alt=" recording-1" />
            <div className="flex flex-col items-start self-stretch gap-2">
              <h4 className="text-xl font-semibold text-gray/900">
                Noise-canceling audio
              </h4>
              <p className="text-base font-normal text-gray/600">
                Say goodbye to distractions with our
                <span className="block ">advanced audio tech for crisp,</span> 
                interruption-free conversations.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <img src=" images/calendar.svg" alt="calendar" />
            <div className="flex flex-col items-start self-stretch gap-2">
              <h4 className="text-xl font-semibold text-gray/900">
                Scheduling made easy
              </h4>
              <p className="text-base font-normal text-gray/600">
                Streamline your agenda with ClearLinks
                <span className="block ">intuitive scheduling. Set up meetings,</span>
                <span className="block ">send invitations, and receive reminders in</span> one
                place.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <img src=" images/lock-unlocked-04.svg" alt=" lock-unlocked" />
            <div className="flex flex-col items-start self-stretch gap-2">
              <h4 className="text-xl font-semibold text-gray/900">
              Bank-grade security
              </h4>
              <p className="text-base font-normal text-gray/600">
              Your privacy is our priority with bank-<span className="block ">grade security protocols safeguarding</span> <span className="block ">your meetings and data from unwanted</span> intruders.
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-[400px]"
          src=" /images/Rectangle 1.png"
          alt=" Rectangle 1"
        />
        <img className=" absolute right-[195.415px] top-[1200px] transform  rotate-[10.745deg]" src=" images/Hand-drawn arrow.svg" alt=" Hand-drawn arrow" />
      </div>
    </div>
  );
}

export default Details;
