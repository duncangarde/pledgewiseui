import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERY_RESULT } from "@/sanity.types";

type YouTubeProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["blocks"]>[number],
  { _type: "youtube" }
>;

export default function YouTube({
  padding,
  colorVariant,
  videoId,
  label,
  caption,
  autoplay,
}: YouTubeProps) {
  if (!videoId) return null;

  const params = new URLSearchParams();
  if (autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "1");
  }
  params.set("rel", "0");
  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <SectionContainer color={colorVariant} padding={padding}>
      <div className="mx-auto w-full max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            src={src}
            title={label || "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        {caption && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {caption}
          </p>
        )}
      </div>
    </SectionContainer>
  );
}
