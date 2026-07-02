import Hero from "./components/Hero";
import Quote from "./components/Quote";
import TopoBackground from "./components/TopoBackground";
import Institutional from "./components/Institutional";
import Methodology from "./components/Methodology";
import SafetyProtocols from "./components/SafetyProtocols";
import Programs from "./components/Programs";
import TrailSection from "./components/TrailSection";
import GuideSchool from "./components/GuideSchool";
import Team from "./components/Team";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <TopoBackground />
      <Hero />
      <Institutional />
      <Quote />
      <Methodology />
      <SafetyProtocols />
      <Programs />
      <Team />
      <TrailSection />
      <GuideSchool />
      <FinalCTA />
    </>
  );
}
