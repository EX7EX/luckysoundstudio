import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Harmonizing creativity with a passion for sound."
        invert
      >
        <p>
          At Lucky Sound Studios, we are a collective of passionate individuals who share a love for music and creativity.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Dedication" invert>
            Our team is committed to delivering exceptional sound experiences, driven by a shared passion for excellence.
          </GridListItem>
          <GridListItem title="Collaboration" invert></GridListItem>
            We thrive on teamwork, fostering an environment where creativity and ideas flow freely.
          </GridListItem>
          <GridListItem title="Integrity" invert>
            We believe in doing the right thing, ensuring trust and respect in every interaction.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
