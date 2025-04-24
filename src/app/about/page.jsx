import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About Us" title="Sound is Our Passion">
        <p>
          We are a team of dedicated sound designers and developers committed to delivering
          exceptional audio experiences. Our goal is to help brands communicate their identity
          and emotion through sound, bringing their stories to life.
        </p>
        <p>
          Collaboration is at the core of our process. We center our clients in everything we do,
          ensuring a partnership that consistently produces results beyond expectations.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Lucky Sound Studio was founded by Lucky with a mission to make professional-grade
            sound design more accessible. Recognizing that many studios overcharge for services,
            we’ve built a model that delivers high value at a fair cost—providing premium results
            without premium price tags.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Team members" />
          <StatListItem value="52" label="Satisfied clients" />
          <StatListItem value="$25M" label="Invoiced project value" />
        </StatList>
      </Container>

      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
