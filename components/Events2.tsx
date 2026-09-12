export default function Events2() {
  return (
    <section id="events" className="bg-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-800">
            Events We Cater For
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            From birthdays to weddings, Bobby&apos;s Super Whip is available for
            events across the West Midlands.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Birthday Parties */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎂 Birthday Parties
            </h3>
            <p className="mt-4 text-slate-600">
              Fresh whippy ice cream, luxury sundaes and premium slush for all ages.
            </p>
          </div>

          {/* Weddings */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              💒 Weddings
            </h3>
            <p className="mt-4 text-slate-600">
              A unique dessert experience that guests of all ages will love.
            </p>
          </div>

          {/* Schools & Nurseries */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏫 Schools &amp; Nurseries
            </h3>
            <p className="mt-4 text-slate-600">
              Perfect for sports days, fun days and school celebrations.
            </p>
          </div>

          {/* Corporate Events */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏢 Corporate Events
            </h3>
            <p className="mt-4 text-slate-600">
              Great for staff appreciation days, family fun days and company celebrations.
            </p>
          </div>

          {/* Fun Fairs */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎡 Fun Fairs
            </h3>
            <p className="mt-4 text-slate-600">
              A great addition to fun fairs and family days, with treats for visitors of all ages.
            </p>
          </div>

          {/* Festivals */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎉 Festivals
            </h3>
            <p className="mt-4 text-slate-600">
              Keep festival crowds refreshed with delicious ice cream, sundaes and premium slush.
            </p>
          </div>

          {/* Charity Events */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              ❤️ Charity Events
            </h3>
            <p className="mt-4 text-slate-600">
              Helping make charity events extra special with a fun dessert experience for everyone.
            </p>
          </div>

          {/* Care Homes */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏡 Care Homes
            </h3>
            <p className="mt-4 text-slate-600">
              Bringing a little extra joy to residents with delicious treats and a memorable experience.
            </p>
          </div>

          {/* Community Events */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎪 Community Events
            </h3>
            <p className="mt-4 text-slate-600">
              Perfect for local community days, fairs and celebrations, bringing something special for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}