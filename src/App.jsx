import Details from "./components/Details"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LastSection from "./components/LastSection"
import SocialProof from "./components/SocialProof"
import SocialSection from "./components/SocialSection"
import Support from "./components/Support"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="w-full h-full antialiased ">
      <Header />
      <SocialProof />
      <Details />
      <Testimonials />
      <Support />
      <LastSection />
      <Footer />
      <SocialSection />
    </div>
  )
}

export default App
