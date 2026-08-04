import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Events2 from "../components/Events2";
import WhyChoose from "../components/WhyChoose";
import ServiceArea from "../components/ServiceArea";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Gallery />
      <Events2 />
      <ServiceArea />
    </>
  );
}