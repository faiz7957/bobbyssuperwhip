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

        <div className="grid gap-8 md:grid-cols-2">
          {/* Birthday Parties */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎂 Birthday Parties
            </h3>
            <p className="mt-4 text-slate-600">
              Fresh whippy ice cream, luxury sundaes and premium slush for all ages.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Weddings */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              💒 Weddings
            </h3>
            <p className="mt-4 text-slate-600">
              A unique dessert experience that guests of all ages will love.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Schools & Nurseries */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏫 Schools &amp; Nurseries
            </h3>
            <p className="mt-4 text-slate-600">
              Perfect for sports days, fun days and school celebrations.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Corporate Events */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏢 Corporate Events
            </h3>
            <p className="mt-4 text-slate-600">
              Great for staff appreciation days, family fun days and company celebrations.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Fun Fairs */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎡 Fun Fairs
            </h3>
            <p className="mt-4 text-slate-600">
              A great addition to fun fairs and family days, with treats for visitors of all ages.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Festivals */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎉 Festivals
            </h3>
            <p className="mt-4 text-slate-600">
              Keep festival crowds refreshed with delicious ice cream, sundaes and premium slush.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Charity Events */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              ❤️ Charity Events
            </h3>
            <p className="mt-4 text-slate-600">
              Helping make charity events extra special with a fun dessert experience for everyone.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>

          {/* Care Homes */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏡 Care Homes
            </h3>
            <p className="mt-4 text-slate-600">
              Bringing a little extra joy to residents with delicious treats and a memorable experience.
            </p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white hover:bg-sky-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}