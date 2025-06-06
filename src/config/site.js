export function constructMetadata({
  title = "Lucky Sound Studio",
  description = "Lucky Sound Studio is a master professional sound design studio that specializes in creating high-quality audio experiences for brands and People.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@bludbroder",
    },
    icons,
    metadataBase: new URL("https://agency-website-abdullah.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
