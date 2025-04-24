import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help artists and storytellers bring sound to life."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From composition and recording to post-production and dubbing, we offer a full suite of services designed to amplify your voice and elevate your vision. Whether you're shaping a single or scoring a film, we partner with you to deliver timeless sonic excellence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Music Production">
              We specialize in end-to-end music production — from writing and composition to arrangement, live tracking, digital synthesis, and final mastering — tailored to fit your sonic identity.
            </ListItem>
            <ListItem title="Vocal Recording & Engineering">
              Our acoustically treated vocal rooms and industry-standard mics ensure your voice is captured with unmatched clarity, presence, and emotion. Vocal comping, tuning, and editing are handled with the utmost care.
            </ListItem>
            <ListItem title="Mixing & Mastering">
              Every mix tells a story. We blend analog warmth with digital precision to give your tracks dimension, punch, and polish — ready for any stage, speaker, or stream.
            </ListItem>
            <ListItem title="Sound Design & Scoring">
              From ambient textures to orchestral arrangements, we craft bespoke soundscapes and original scores for film, television, games, and immersive media.
            </ListItem>
            <ListItem title="Movie Dubbing & ADR">
              We provide full dubbing and ADR services for filmmakers, voice actors, and studios. Our multi-language support and sync-accurate workflows ensure seamless localization without compromising artistic integrity.
            </ListItem>
            <ListItem title="Post-Production & Audio Restoration">
              Whether it's cleaning dialogue, removing unwanted noise, or reviving vintage recordings, we restore and enhance audio with precision and respect for the original material.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
