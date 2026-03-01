// app/components/substackembed.tsx
"use client";

export default function SubstackEmbed() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-white">
        <iframe
          src="https://datasistah.substack.com/embed"
          className="w-full h-[420px] sm:h-[440px]"
          title="Substack subscribe"
          frameBorder="0"
          scrolling="no"
        />
      </div>

      <p className="mt-3 text-xs text-slate-400">
        If you don’t see the welcome email, check spam or promotions.
      </p>
    </div>
  );
}
