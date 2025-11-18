import Image from "next/image";
import {
  CheckBadgeIcon,
  ArrowUpIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const benefitsData = [
  {
    icon: CheckBadgeIcon,
    title: "Expert Coaching",
    description:
      "Access personalized training plans and direct guidance from certified fitness professionals to maximize your results.",
  },
  {
    icon: ArrowUpIcon,
    title: "Achieve Peak Performance",
    description:
      "Our comprehensive programs are designed to enhance your stamina, strength, and overall athletic capability quickly and safely.",
  },
  {
    icon: BoltIcon,
    title: "Flexible Anywhere Training",
    description:
      "Work out on your own schedule with our vast library of on-demand sessions, perfect for a busy and dynamic lifestyle.",
  },
];

const Benefits = () => {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-black"
      id="benefits"
    >
      {/*  */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/benefits/bg.png"
          alt="Dark green abstract background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient from-black/30 via-black/30 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-white">
        {/*  */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 drop-shadow-xl">
            <Image
              src="/img/benefits/logo.png"
              alt="Company Logo"
              width={85}
              height={55}
            />
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-lime-400 drop-shadow-lg">
            Discover Your Potential
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your health and fitness journey with a program built on
            results, innovation, and community.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10"
            >
              <benefit.icon className="mx-auto h-14 w-14 text-lime-400 mb-6 drop-shadow" />

              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-lime-300 transition">
                {benefit.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="mt-28">
          <div className="relative">
            {/*  */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/img/benefits/s1.png"
                alt="Fitness group image"
                width={1400}
                height={700}
                layout="responsive"
                className="w-full h-auto"
                quality={95}
              />
            </div>

            {/* Glow */}
            <div className="absolute -inset-6 bg-lime-500/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
