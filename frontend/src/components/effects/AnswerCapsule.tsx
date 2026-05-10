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
        className="relative rounded-xl bg-black/85 p-6 sm:p-8 pxc-halo-pulse"
        data-testid="answer-capsule"
        itemScope
        itemType="https://schema.org/Question"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-[#47d8ff]" />
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#47d8ff]">
            Direct Answer
          </span>
        </div>
        <h3
          className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug"
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
            className="text-sm sm:text-base text-[#AEA1EA] leading-relaxed"
            itemProp="text"
          >
            {answer}
          </p>
        </div>
      </aside>
    </BeamCard>
  );
}
