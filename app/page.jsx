import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Institutional from "./components/Institutional";
import Methodology from "./components/Methodology";
import SafetyProtocols from "./components/SafetyProtocols";
import Programs from "./components/Programs";
import GuideSchool from "./components/GuideSchool";
import Team from "./components/Team";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Institutional />
      <Methodology />
      <SafetyProtocols />
      <Programs />
      <GuideSchool />
      <Team />
      <FinalCTA />
    </>
  );
}
