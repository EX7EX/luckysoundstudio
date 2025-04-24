import React from "react";
import PageIntro from "@/components/PageIntro";
import VideoEmbed from "@/components/VideoEmbed";

const videos = [
  { id: 1, title: "Project Alpha", videoId: "abc123" },
  { id: 2, title: "Project Beta", videoId: "def456" },
  { id: 3, title: "Project Gamma", videoId: "ghi789" },
];

const VideoSection = () => {
  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold mb-6">Our Work in Action</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id} className="space-y-2">
            <p className="font-medium">{video.title}</p>
            <VideoEmbed videoId={video.videoId} />
          </div>
        ))}
      </div>
    </section>
  );
};

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
      <VideoSection />
    </>
  );
};

export default WorkPage;
