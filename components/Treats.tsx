export default function Treats() {
      const treats = [
          {
                title: "Whippy Ice Cream",
                      icon: "🍦",
                            text: "Freshly whipped soft ice cream with flakes, sauces and your favourite toppings.",
                                },
                                    {
                                          title: "Luxury Sundaes",
                                                icon: "🍨",
                                                      text: "Beautifully layered sundaes made fresh using premium ingredients.",
                                                          },
                                                              {
                                                                    title: "Premium Slush",
                                                                          icon: "🥤",
                                                                                text: "Ice cold fruit slush available in a range of refreshing flavours.",
                                                                                    },
                                                                                        {
                                                                                              title: "Event Catering",
                                                                                                    icon: "🎉",
                                                                                                          text: "Perfect for weddings, schools, birthdays, corporate events and private parties.",
                                                                                                              },
                                                                                                                ];

                                                                                                                  return (
                                                                                                                      <section className="bg-slate-50 py-24">
                                                                                                                            <div className="mx-auto max-w-7xl px-6">
                                                                                                                                    <div className="mb-16 text-center">
                                                                                                                                              <h2 className="text-5xl font-bold text-slate-800">
                                                                                                                                                          Our Delicious Treats
                                                                                                                                                                    </h2>

                                                                                                                                                                              <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
                                                                                                                                                                                          Whether you're planning a wedding, school event, birthday party or
                                                                                                                                                                                                      corporate function, Bobby's Super Whip has something everyone will
                                                                                                                                                                                                                  love.
                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                                                                                                                                                                                                                                      {treats.map((item) => (
                                                                                                                                                                                                                                                                  <div
                                                                                                                                                                                                                                                                                key={item.title}
                                                                                                                                                                                                                                                                                              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                        <div className="text-6xl">{item.icon}</div>

                                                                                                                                                                                                                                                                                                                                      <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                                                                                                                                                                                                                                                                                                                                                    <p className="mt-4 text-slate-600">{item.text}</p>
                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                              }