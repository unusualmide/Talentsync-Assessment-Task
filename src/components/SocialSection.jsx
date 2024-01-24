function SocialSection() {
  return (
    <div className=" bg-gray/50 py-12 flex items-center self-stretch px-20 justify-between">
      <p className=" text-gray/500 font-normal text-base">© 2023 ClearLink. All rights reserved.</p>
      <div className=" flex gap-6">
        <img src="/images/linkedin.svg" alt=" linkedin" />
        <img src="/images/twitter.svg" alt=" twitter" />
        <img src="/images/facebook.svg" alt=" facebook" />
        <img src="/images/instagram.svg" alt=" instagram" />
        <img src="/images/github.svg" alt=" github" />
        <img src="/images/youtube.svg" alt=" youtube" />
      </div>
    </div>
  )
}

export default SocialSection
