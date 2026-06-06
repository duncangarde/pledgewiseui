import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const youtubeQuery = groq`
  _type == "youtube" => {
    _type,
    _key,
    padding,
    colorVariant,
    videoId,
    label,
    caption,
    autoplay,
  }
`;
