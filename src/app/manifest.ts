import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Save The Foster",
    short_name: "Save The Foster",
    description:
      "A Bay Area nonprofit supporting foster youth and humanitarian projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#293778",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/save-the-foster-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
