import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OurWork } from "@/components/OurWork";
import { Impact } from "@/components/Impact";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Impact />
      <OurWork />   
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}
