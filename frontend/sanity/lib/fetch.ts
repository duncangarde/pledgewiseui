import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY, PAGES_SLUGS_QUERY } from "@/sanity/queries/page";
import { NAVIGATION_QUERY } from "@/sanity/queries/navigation";
import { SETTINGS_QUERY } from "@/sanity/queries/settings";
import {
  POST_QUERY,
  POSTS_QUERY,
  POSTS_SLUGS_QUERY,
} from "@/sanity/queries/post";
import {
  PAGE_QUERY_RESULT,
  PAGES_SLUGS_QUERY_RESULT,
  POST_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  POSTS_SLUGS_QUERY_RESULT,
  NAVIGATION_QUERY_RESULT,
  SETTINGS_QUERY_RESULT,
} from "@/sanity.types";

export const fetchSanityPageBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<PAGE_QUERY_RESULT> => {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
    tags: ["sanity"],
  });

  return data as PAGE_QUERY_RESULT;
};

export const fetchSanityPagesStaticParams =
  async (): Promise<PAGES_SLUGS_QUERY_RESULT> => {
    const { data } = await sanityFetch({
      query: PAGES_SLUGS_QUERY,
      perspective: "published",
      stega: false,
      tags: ["sanity"],
    });

    return data as PAGES_SLUGS_QUERY_RESULT;
  };

export const fetchSanityPosts = async (): Promise<POSTS_QUERY_RESULT> => {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
    tags: ["sanity"],
  });

  return data as POSTS_QUERY_RESULT;
};

export const fetchSanityPostBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<POST_QUERY_RESULT> => {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    tags: ["sanity"],
  });

  return data as POST_QUERY_RESULT;
};

export const fetchSanityPostsStaticParams =
  async (): Promise<POSTS_SLUGS_QUERY_RESULT> => {
    const { data } = await sanityFetch({
      query: POSTS_SLUGS_QUERY,
      perspective: "published",
      stega: false,
      tags: ["sanity"],
    });

    return data as POSTS_SLUGS_QUERY_RESULT;
  };

export const fetchSanityNavigation =
  async (): Promise<NAVIGATION_QUERY_RESULT> => {
    const { data } = await sanityFetch({
      query: NAVIGATION_QUERY,
      tags: ["sanity"],
    });

    return data as NAVIGATION_QUERY_RESULT;
  };

export const fetchSanitySettings = async (): Promise<SETTINGS_QUERY_RESULT> => {
  const { data } = await sanityFetch({
    query: SETTINGS_QUERY,
    tags: ["sanity"],
  });

  return data as SETTINGS_QUERY_RESULT;
};
