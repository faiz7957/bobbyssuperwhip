export default function Treats() {
  const treats = [
    {
      icon: "🍦",
      title: "Whippy Ice Cream",
      text: "Fresh, creamy whippy ice cream served in cones, tubs and loaded with your favourite toppings.",
    },
    {
      icon: "🥤",
      title: "Premium Slush",
      text: "Refreshing premium slush in delicious flavours, perfect for keeping cool on warm days.",
    },
    {
      icon: "🍨",
      title: "Luxury Sundaes",
      text: "Indulgent sundaes with sauces, flakes, sprinkles and tasty extras.",
    },
    {
      icon: "🍫",
      title: "Luxury Toppings & Sauces",
      text: "Finish your ice cream with delicious sauces, flakes, sprinkles and a wide choice of tasty toppings.",
    },
  ];

  return (
    <section id="treats" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-800">Our Delicious Treats</h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            Quality desserts and refreshing drinks served from Bobby&apos;s Super Whip.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {treats.map((item) => (
            <div key={item.title} className="rounded-3xl bg-sky-50 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-bold text-sky-700">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
