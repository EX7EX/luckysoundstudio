import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Rooted in purpose, driven by passion"
      >
        <p>
          Every note we record, every mix we sculpt, and every voice we dub is guided by the values we live by. Our studio isn’t just about sound — it’s about substance, integrity, and a relentless pursuit of excellence. This is what defines Lucky Sound Studio.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precision">
            We treat every waveform and word with care. From mic placement to mixdown, every decision is intentional, serving the art without compromise.
          </GridListItem>
          <GridListItem title="Efficiency">
            Time is sacred. Our workflow is designed to meet deadlines without sacrificing quality, ensuring smooth, focused sessions from start to final master.
          </GridListItem>
          <GridListItem title="Adaptability">
            Whether you're a rising artist or a seasoned filmmaker, we adapt to your creative language, adjusting our tools and approach to serve your vision.
          </GridListItem>
          <GridListItem title="Transparency">
            We build trust through clear communication, honest timelines, and a shared understanding of what it takes to bring each project to life.
          </GridListItem>
          <GridListItem title="Commitment">
            Long-term growth is our aim. We invest in lasting relationships, not just quick turnarounds — because every session is a step toward something greater.
          </GridListItem>
          <GridListItem title="Innovation">
            We embrace the future of sound, fusing analog warmth with digital clarity, and exploring new frontiers in immersive audio, AI-enhanced tools, and cinematic storytelling.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
