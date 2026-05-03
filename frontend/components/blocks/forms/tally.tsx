"use client";

import { useEffect } from "react";
import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERY_RESULT } from "@/sanity.types";

type TallyProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["blocks"]>[number],
  { _type: "tally" }
>;

export default function Tally({
  padding,
  colorVariant,
  formId,
  label,
}: TallyProps) {
  useEffect(() => {
    if (!formId) return;

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  if (!formId) return null;

  return (
    <SectionContainer color={colorVariant} padding={padding}>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <iframe
            data-tally-src={`https://tally.so/embed/${formId}?hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            loading="lazy"
            width="100%"
            height="415"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title={label || "Tally Form"}
          />
        </div>
      </div>
    </SectionContainer>
  );
}