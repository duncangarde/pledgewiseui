import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const tallyQuery = groq`
  _type == "tally" => {
    _type,
    _key,
    padding,
    colorVariant,
    formId,
    label,
  }
`;