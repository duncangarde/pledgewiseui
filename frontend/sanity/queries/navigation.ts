import { groq } from "next-sanity";

const linkQuery = `
  _key,
  ...,
  "href": select(
    isExternal => href,
    defined(href) && !defined(internalLink) => href,
    @.internalLink->slug.current == "index" => "/",
    @.internalLink->_type == "post" => "/blog/" + @.internalLink->slug.current,
    "/" + @.internalLink->slug.current
  )
`;

export const NAVIGATION_QUERY = groq`
  *[_type == "navigation"]{
    _type,
    _key,
    "links": links[]{${linkQuery}}
  }
`;
