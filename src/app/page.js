import AnimatedHeroSection from "@/components/HeroSection";
import AnimatedServiceCards from "@/components/AnimatedServiceCard";
import AnimatedHorizontalLine from "@/components/HorizontalLine";
import EnhancedAnimatedTestimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {" "}
      <AnimatedHeroSection />
      <AnimatedHorizontalLine />
      <AnimatedServiceCards />
      <EnhancedAnimatedTestimonials />
    </>
  );
}
