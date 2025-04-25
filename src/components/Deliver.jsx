import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Midway through the production process, we conduct a detailed review 
          of the original creative direction and align every layer of the mix 
          with the evolving needs of the project. This allows us to elevate the 
          final result, ensuring the music speaks with clarity, depth, and soul.
        </p>
        <p>
          Our engineers and producers pour their energy into every track, 
          shaping each element with precision and reverence. Whether we're 
          refining a live recording, building cinematic sound design, or 
          mastering the final mix, we treat each project like a sacred 
          commission — something worth doing well, or not at all.
        </p>
        <p>
          When we deliver, we deliver with honor. The core tracks arrive fully 
          mastered, ready for release. Any supporting stems, alternate versions, 
          or live session mixes are finalized shortly after through our{" "}
          <strong className="font-semibold text-neutral-950">ongoing care</strong>{" "}
          and support package — designed to grow with your artistry.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Mix & Master">
          Every element is leveled, spatially adjusted, and polished for clarity, 
          power, and emotional impact — ready for streaming, sync, or stage.
        </ListItem>
        <ListItem title="Delivery Formats">
          We provide high-resolution WAVs, performance stems, and radio edits 
          tailored to your distribution plan — from vinyl to Spotify.
        </ListItem>
        <ListItem title="Ongoing Support">
          We're here long after delivery. Whether it's remastering, alternate 
          versions, or support for live performances, you’ll never be alone 
          in your sound journey.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
