import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your music dreams a reality with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          At Lucky Sound Studios, we’re not just building your online presence — we’re
            branding your legacy. From the underground to the mainstream, we craft elite-level
            sound, visuals, and tech for tomorrow’s legends.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
         Working with Lucky Sound Studios felt like stepping into the future. Sleek, fast, and always
        ahead of the curve. They understood our brand before we finished explaining it.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
