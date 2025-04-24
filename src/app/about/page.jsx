import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Sounds are our passion">
        <p>
          We are a team of passionate sound designers and developers who
          specialize in creating high-quality audio experiences for our
          clients. Our mission is to help brands tell their stories through
          sound, and we take pride in our ability to deliver exceptional results
          that exceed expectations.
          </p>
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
           Lucky Sound Studio was started by Lucky who noticed that professional
            sound design was often out of reach for most brands. He realized
            studios were charging clients more than what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging less and delivering more instead.
          </p>
      
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
