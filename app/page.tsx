export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
          Scholar Village
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
          It takes a village to build a scholar.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
          Scholar Village connects classrooms, donors, sponsors, families, and
          community partners into one mission-driven platform built to support
          students from the first school supply to the final scholarship.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a className="rounded-full bg-emerald-700 px-6 py-3 font-bold text-white shadow-lg">
            Adopt The Classroom
          </a>
          <a className="rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 shadow-sm">
            Become a Sponsor
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">For Teachers</h2>
            <p className="mt-2 text-slate-600">
              Request supplies, classroom support, and community-backed resources.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">For Donors</h2>
            <p className="mt-2 text-slate-600">
              Fund real classroom needs and see exactly where your impact goes.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">For Students</h2>
            <p className="mt-2 text-slate-600">
              Build pathways toward scholarships, mentorship, and opportunity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

