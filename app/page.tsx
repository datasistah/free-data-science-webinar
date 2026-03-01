import SubstackEmbed from "./components/substackembed";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ec8fd0]" />
      <span>{children}</span>
    </li>
  );
}

function DotBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#ec8fd0]" />
      <span>{children}</span>
    </li>
  );
}

function SubscribeCard() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-sm shadow-black/20 backdrop-blur">
      <h2 className="text-xl font-bold text-[#ec8fd0]">Get instant access</h2>
      <p className="mt-2 text-sm text-slate-300">
        Enter your email to subscribe on Substack and get the full training recording.
      </p>

      {/* Clear newsletter notice (the piece you said you missed) */}
      <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950/50 p-4">
        <p className="text-sm font-semibold text-slate-100">
          You’ll also be joining my Substack newsletter.
        </p>
        <p className="mt-1 text-sm text-slate-300">
          That’s where I send practical data science career tips, templates, and new free trainings.
          Unsubscribe anytime.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
        <div className="text-sm text-slate-300">
          <p className="font-semibold">Subscribe below</p>
          <p className="mt-1">
            Get the recording now and future training updates in your inbox.
          </p>
        </div>

        <div className="mt-4">
          <SubstackEmbed />
        </div>
      </div>

      <div className="mt-5 text-xs text-slate-400">No spam. Unsubscribe anytime.</div>

      <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950/50 p-4">
        <p className="text-xs font-semibold text-slate-200">Quick note</p>
        <p className="mt-1 text-xs text-slate-400">
          If the email lands in spam or promotions, move it to your primary inbox so you don’t miss future templates and trainings.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-3">
            <img
              src="/images/datasis_sitepic2.png"
              alt="Data Sistah icon"
              className="h-10 w-10 rounded-xl border border-[#ec8fd0]/50 object-cover"
            />
            <div>
              <p className="text-sm font-semibold leading-none">Data Sistah</p>
              <p className="text-xs text-slate-300">Free training + Substack newsletter</p>
            </div>
          </div>

          <a
            href="https://datasistah.substack.com/subscribe"
            className="rounded-xl bg-[#ec8fd0] px-4 py-2 text-sm font-semibold text-[#0f172a] transition hover:brightness-95"
          >
            Get instant access
          </a>
        </header>

        {/* Hero + Sticky subscribe */}
        <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          {/* Left */}
          <div>
            <p className="inline-flex items-center rounded-full border border-[#ec8fd0]/40 bg-[#ec8fd0]/10 px-3 py-1 text-xs font-semibold text-[#f8b7df]">
              Free training recording
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Breaking the Data Science Barrier
            </h1>

            <p className="mt-4 text-lg text-slate-300">
              I left a 20-year teaching career in my 40s to become a data scientist.
              This training is what I wish someone had told me when I started.
            </p>

            {/* What you will learn */}
            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-slate-100">In this training, you’ll learn:</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <DotBullet>How I failed my first data science interview and turned it into a job offer.</DotBullet>
                <DotBullet>What hiring managers actually look for in projects and resumes.</DotBullet>
                <DotBullet>How to build proof when you don’t have “experience.”</DotBullet>
                <DotBullet>The simple strategy that helps you stop guessing and start getting interviews.</DotBullet>
              </ul>
            </div>

            {/* Who it is for */}
            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-slate-100">This is for you if:</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <Bullet>You’re serious about becoming a data scientist and want to do it the right way.</Bullet>
                <Bullet>You’re a student, career changer, or early professional trying to stand out.</Bullet>
                <Bullet>You’ve learned skills but struggle to position yourself clearly.</Bullet>
                <Bullet>You’re tired of guessing and want a focused strategy.</Bullet>
                <Bullet>You want proof, not just certificates.</Bullet>
              </ul>
            </div>

            {/* Mobile-only subscribe */}
            <div id="subscribe" className="mt-8 lg:hidden">
              <SubscribeCard />
            </div>

            {/* Newsletter benefits */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold">When you subscribe, you also get my newsletter.</p>
            <p className="mt-1 text-sm text-slate-300">
                Practical data science career strategy from someone actively building in the field.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <Bullet>How to structure your resume so hiring managers see real value.</Bullet>
                <Bullet>Project strategy that turns learning into proof.</Bullet>
                <Bullet>Clear breakdowns of what companies are actually looking for.</Bullet>
                <Bullet>Invites to live Q&A roundtables and future trainings.</Bullet>
            </ul>

              <a
                href="https://datasistah.substack.com/subscribe"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#ec8fd0] px-4 py-2 text-sm font-semibold text-[#0f172a] transition hover:brightness-95 sm:w-auto"
              >
                Get the recording
              </a>

              <p className="mt-3 text-xs text-slate-400">
                After you subscribe, check your inbox for the welcome email with the recording link.
              </p>
            </div>
          </div>

          {/* Right: sticky subscribe on desktop */}
          <div className="lg:sticky lg:top-8">
            <div className="hidden lg:block">
              <SubscribeCard />
            </div>

           
          </div>
        </section>
        {/* Coaching Section - Full Width Premium */}
        <div className="mt-24 border-t border-slate-800 pt-16">
        <div className="rounded-3xl bg-[#0b1220] p-10 shadow-xl shadow-black/30 text-center">
            <h3 className="text-2xl font-bold text-[#ec8fd0]">
            Need personalized 1:1 support?
            </h3>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            If you want direct feedback on your resume, project strategy,
            or job search plan, I offer personalized coaching for serious
            career switchers.
            </p>

            <a
            href="https://www.data-sistah.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#ec8fd0] px-8 py-3 text-sm font-semibold text-[#0f172a] transition hover:brightness-95"
            >
            Explore 1:1 Coaching
            </a>

            <p className="mt-4 text-xs text-slate-500">
            For those ready to move faster with clear direction.
            </p>
        </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-700 pt-8 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Tiffany "Data Sistah" Teasley. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}