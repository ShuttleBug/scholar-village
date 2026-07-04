export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-amber-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black">Scholar Village</div>
        <div className="hidden gap-6 text-sm font-semibold md:flex">
          <a>Adopt The Classroom</a>
          <a>For Teachers</a>
          <a>For Donors</a>
          <a>Scholarships</a>
          <a>Sponsors</a>
        </div>
        <button className="rounded-full bg-amber-400 px-5 py-2 font-bold text-slate-950">
          Donate
        </button>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            Community-powered education
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            It takes a village to build a scholar.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Scholar Village connects classrooms, families, donors, local
            businesses, and sponsors into one platform built to support students
            from school supplies to scholarships.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-950">
              Adopt The Classroom
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 font-bold">
              Become a Sponsor
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
          <h2 className="text-2xl font-black">Sprint 1 Platform Areas</h2>

          <div className="mt-6 grid gap-4">
            {[
              ["Adopt The Classroom", "Fund supplies, projects, and classroom needs."],
              ["Teacher Portal", "Let teachers submit classroom support requests."],
              ["Donor Dashboard", "Show donors where their money goes."],
              ["Scholarship Pathways", "Help students move from support to opportunity."],
              ["Sponsor Hub", "Give businesses a visible way to support schools."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5 text-slate-950">
                <h3 className="font-black">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
            <p className="text-4xl font-black text-amber-300">$0</p>
            <p className="mt-2 text-slate-200">Platform fees for schools during launch.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
            <p className="text-4xl font-black text-amber-300">100%</p>
            <p className="mt-2 text-slate-200">Mission-first design around classroom impact.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
            <p className="text-4xl font-black text-amber-300">1 Village</p>
            <p className="mt-2 text-slate-200">Teachers, donors, students, sponsors, and families.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


