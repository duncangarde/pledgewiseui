import { defineField, defineType } from "sanity";
import { FileText } from "lucide-react";

export default defineType({
  name: "tally",
  type: "object",
  title: "Form: Tally",
  description:
    "Embed a Tally form by providing the form ID from Tally.so",
  icon: FileText,
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
      name: "formId",
      title: "Tally Form ID",
      type: "string",
      description: "The ID of the Tally form (e.g., 'abc123' from https://tally.so/r/abc123)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Admin Label",
      type: "string",
      description: "Optional label for admin identification",
    }),
  ],
  preview: {
    prepare({ label, formId }) {
      return {
        title: label || "Tally Form",
        subtitle: formId ? `ID: ${formId}` : undefined,
      };
    },
  },
});