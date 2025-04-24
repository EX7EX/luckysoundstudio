import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Guided by insights from the discovery phase, we craft a tailored
          roadmap for each project—structured, actionable, and aligned with the
          artist’s vision. Every detail is accounted for to ensure clarity,
          consistency, and creative excellence from start to finish.
        </p>
        <p>
          Each client is paired with a dedicated account manager who serves as a
          strategic partner and communication bridge. They ensure you are heard
          at every stage while keeping the creative and technical teams focused
          on delivering your project with integrity and precision.
        </p>
        <p>
          Our team approaches every request with the belief that if it's worth
          doing, it’s worth doing as if God himself asked us to do it. Your
          sound, your message, and your vision deserve nothing less than our
          full attention, professionalism, and respect.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Lucky Sound treated our music like it was sacred. Their dedication to
        clarity, updates, and excellence felt like working with a divine
        extension of our team.
      </Blockquote>
    </Section>
  );
};

export default Build;
