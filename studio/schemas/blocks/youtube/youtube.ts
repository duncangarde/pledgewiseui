import { defineField, defineType } from "sanity";
import { SquarePlay } from "lucide-react";
import { YouTubePreview } from "../../previews/youtube-preview";

export default defineType({
  name: "youtube",
  type: "object",
  title: "YouTube",
  description: "Embed a YouTube video on the page.",
  icon: SquarePlay,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
      title: "Color Variant",
      description: "Select a background color variant",
    }),
    defineField({
      name: "videoId",
      title: "YouTube Video ID",
      type: "string",
      description:
        "The ID of the YouTube video (e.g., 'dQw4w9WgXcQ' from https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Admin Label",
      type: "string",
      description: "Optional label for admin identification",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 2,
      description: "Optional caption shown below the video",
    }),
    defineField({
      name: "autoplay",
      title: "Autoplay",
      type: "boolean",
      initialValue: false,
      description: "Start playing the video automatically when the page loads",
    }),
  ],
  preview: {
    select: {
      title: "label",
      videoId: "videoId",
    },
    prepare({ title, videoId }) {
      return {
        title: title || "YouTube Video",
        subtitle: videoId ? `ID: ${videoId}` : undefined,
        media: SquarePlay,
      };
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
