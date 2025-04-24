import PageIntro from "@/components/PageIntro";
import React from "react";
import VideoEmbed from "@/components/VideoEmbed";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
const videos = [
  { id: 1, title: "Project Alpha", url: "https://www.youtube.com/embed/abc123" },
  { id: 2, title: "Project Beta", url: "https://www.youtube.com/embed/def456" },
  { id: 3, title: "Project Gamma", url: "https://www.youtube.com/embed/ghi789" },
];

const VideoSection = () => {
  return (
    <section>
      <h2>Our Work in Action</h2>
      <div>
        {videos.map((video) => (
          <VideoEmbed key={video.id} title={video.title} url={video.url} />
        ))}
      </div>
    </section>
  );
};

export { VideoSection };