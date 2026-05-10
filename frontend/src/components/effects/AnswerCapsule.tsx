import { Sparkles } from "lucide-react";
import { useEffect } from "react";
import { BeamCard } from "@/components/effects/BeamCard";

interface AnswerCapsuleProps {
  question: string;
  answer: string;
  emitFaqJsonLd?: boolean;
  jsonLdId?: string;
  className?: string;
}

export function AnswerCapsule({
  question,
  answer,
  emitFaqJsonLd = true,
  jsonLdId,
  className,
}: AnswerCapsuleProps) {
  useEffect(() => {
    if (!emitFaqJsonLd) return;
    const id = jsonLdId || `answer-capsule-${question.slice(0, 60)}`;
    const existing = document.head.querySelector(
      `script[data-answer-capsule="${id}"]`
    );
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-answer-capsule", id);
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      const tag = document.head.querySelector(
        `script[data-answer-capsule="${id}"]`
      );
      if (tag) tag.remove();
    };
  }, [question, answer, emitFaqJsonLd, jsonLdId]);

  return (
    <BeamCard cyan className={className}>
      <aside
        className="relative rounded-xl bg-black/85 px-5 py-4 sm:px-6 sm:py-5 pxc-halo-pulse"
        data-testid="answer-capsule"
        itemScope
        itemType="https://schema.org/Question"
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-3.5 w-3.5 text-[#47d8ff]" />
          <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#47d8ff]">
            Direct Answer
          </span>
        </div>
        <h3
          className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug"
          itemProp="name"
        >
          {question}
        </h3>
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <p
            className="text-xs sm:text-sm text-[#AEA1EA] leading-snug line-clamp-3"
            itemProp="text"
          >
            {answer}
          </p>
        </div>
      </aside>
    </BeamCard>
  );
}
