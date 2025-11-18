import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section id="women" className="min-h-screen w-full bg-white text-primary-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About Our Sports Community
          </h1>
          <p className="text-lg leading-relaxed text-primary-600">
            We are dedicated to empowering athletes, enthusiasts, and teams
            across the globe. Our platform delivers the latest insights,
            training tips, and resources to help you stay ahead of the game.
          </p>
          <p className="text-lg leading-relaxed text-primary-600">
            Whether you're a seasoned pro or just getting started, our mission
            is to fuel your passion, elevate your skills, and support your
            athletic journey every step of the way.
          </p>

          <button className="flex items-center gap-2 bg-accent-hover text-primary px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-primary-900 transition-all duration-300 w-fit">
            Learn More
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/*   */}
        <div className="relative w-full h-80 md:h-full">
          <div className="absolute inset-0 rounded-2xl bg-gradient from-accent to-accent-hover opacity-20 blur-3xl" />
          <img
            src="/sport.jpg"
            alt="Sports community"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
