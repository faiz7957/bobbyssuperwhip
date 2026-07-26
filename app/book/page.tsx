import Navbar from "@/components/Navbar";

export default function BookPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white pt-28">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Book Bobby&apos;s Super Whip
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-800">
              Make Your Event Extra Special
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
              From birthdays and weddings to schools, nurseries and corporate
              events, we'll bring delicious whippy ice cream and premium slush
              to your event anywhere across the Midlands.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-6 text-3xl font-bold text-slate-800">
                Why Choose Bobby&apos;s?
              </h2>

              <ul className="space-y-5 text-lg text-slate-700">
                <li>🍦 Luxury Whippy Ice Cream</li>
                <li>🥤 Premium Slush Drinks</li>
                <li>🎉 Birthdays &amp; Private Parties</li>
                <li>🏫 Schools &amp; Nurseries</li>
                <li>💍 Weddings</li>
                <li>🏢 Corporate Events</li>
                <li>⭐ Serving the Midlands since 2016</li>
              </ul>

              <div className="mt-10 rounded-2xl bg-sky-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                  What's Included?
                </h3>

                <p className="text-slate-600">
                  Every booking receives a personalised quotation based on your
                  event size and location. We'll help make your event memorable
                  with friendly service and fantastic desserts.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-8 text-3xl font-bold text-slate-800">
                Request a Quote
              </h2>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number (Optional)"
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <select className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none">
                  <option>Event Type</option>
                  <option>Birthday Party</option>
                  <option>Wedding</option>
                  <option>School</option>
                  <option>Nursery</option>
                  <option>Corporate Event</option>
                  <option>Sports Club</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>

                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Venue / Postcode"
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <input
                  type="number"
                  placeholder="Estimated Number of Guests"
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Tell us about your event..."
                  className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-500 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-600 py-4 text-lg font-bold text-white transition hover:bg-sky-700"
                >
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}