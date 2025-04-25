import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Our Work",
    links: [
      { title: "Music Production", href: "/work/musicproduction" },
      { title: "Movie Dubbing", href: "/work/moviedubbing" },
      { title: "Sound Design", href: "/work/sounddesign" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
];