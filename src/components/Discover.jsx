import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by listening — deeply and intentionally — to understand the 
          heart of each artist’s sound and the vision behind their work. This 
          is not just pre-production — it’s communion with the soul of the 
          music.
        </p>
        <p>
          Whether you're crafting an EP, scoring a film, or designing an 
          immersive soundscape, we embed ourselves into your creative world. 
          We study your inspirations, reference tracks, and performance style 
          to uncover the textures, rhythms, and atmospheres that best serve 
          your message.
        </p>
        <p>
          At the end of this phase, we deliver a personalized, high-fidelity 
          production blueprint — from instrumentation and arrangement strategy, 
          to timelines and budget. This plan becomes the sacred map we follow 
          through the rest of your sonic journey.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Creative consultation</TagListItem>
        <TagListItem>Genre alignment & vision discovery</TagListItem>
        <TagListItem>Instrumentation planning</TagListItem>
        <TagListItem>Technical feasibility</TagListItem>
        <TagListItem>Arrangement mockups</TagListItem>
        <TagListItem>Production budgeting</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
