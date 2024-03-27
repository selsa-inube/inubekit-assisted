import { AutoRc } from "auto";

export default function rc(): AutoRc {
  return {
    plugins: ["released", "npm", "magic-zero"],
    labels: [
      {
        name: "blog-post",
        changelogTitle: "📚 Blog Post",
        releaseType: "none",
        major: "major",
        minor: "minor",
      },
    ],
  };
}
