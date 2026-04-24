import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "./utils/cn";

const flavors = [
  {
    name: "VANILLA",
    slug: "vanilla",
    desc: "PURE BOLD BEAN",
    image: "/container-vanilla.png",
    note: "Bright vanilla bean with a cold, clean finish that hits harder than it looks.",
    profile: "Creamy, floral, direct",
    bestFor: "Late-night reset",
  },
  {
    name: "CARAMEL",
    slug: "caramel",
    desc: "SALTED BLISS",
    image: "/container-caramel.png",
    note: "Burnt sugar depth with a salty edge that keeps the sweetness under control.",
    profile: "Toasted, buttery, sharp",
    bestFor: "Post-dinner flex",
  },
  {
    name: "PISTACHIO",
    slug: "pistachio",
    desc: "ROASTED EARTH",
    image: "/container-pistachio.png",
    note: "Nutty, dry, and earthy with a roasted finish that feels deliberately grown-up.",
    profile: "Savory, rich, grounded",
    bestFor: "Slow afternoons",
  },
  {
    name: "CHOCOLATE",
    slug: "chocolate",
    desc: "DARK INTENSITY",
    image: "/container-chocolate.png",
    note: "A deep cocoa hit with almost-bitter attitude and zero interest in playing safe.",
    profile: "Dense, dark, unapologetic",
    bestFor: "Maximum impact",
  },
  {
    name: "STRAWBERRY",
    slug: "strawberry",
    desc: "WILD HARVEST",
    image: "/container-strawberry.png",
    note: "Fresh berry brightness cut with enough tang to keep things loud, not sugary.",
    profile: "Juicy, tart, electric",
    bestFor: "Daytime energy",
  },
  {
    name: "LIQUORICE",
    slug: "liquorice",
    desc: "DEEP BLACK",
    image: "/container-liquorice.png",
    note: "Herbal, dark, and polarising in the exact way a statement flavor should be.",
    profile: "Smoky, spiced, bold",
    bestFor: "Acquired taste nights",
  },
] as const;

const App = () => {
  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-white selection:text-black font-inter">
      {/* Brutalist Hero */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden border-b-[20px] border-white p-6 md:p-12"
      >
        <div className="absolute top-6 left-6 z-20 md:top-12 md:left-12">
          <div className="flex items-center gap-2 text-xl font-unbounded font-black text-white">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center">S</div>
            <span>SAMM.</span>
          </div>
        </div>

        <div className="absolute top-6 right-6 z-20 hidden items-center gap-6 text-[11px] font-unbounded font-bold uppercase tracking-[0.3em] md:flex">
          <a className="transition-opacity hover:opacity-60" href="#flavors">
            Flavors
          </a>
          <a className="transition-opacity hover:opacity-60" href="#manifesto">
            Manifesto
          </a>
          <a className="transition-opacity hover:opacity-60" href="#details">
            Detail
          </a>
        </div>

        <div className="absolute top-[35%] left-0 w-full -translate-y-1/2 flex items-center overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            className="flex items-center gap-[10vw] pr-[10vw]"
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center gap-[12vw]">
                <h1 className="text-[35vw] font-unbounded font-[900] leading-[0.7] tracking-[-0.1em] drop-shadow-[20px_20px_0px_rgba(255,255,255,0.05)]">
                  SAMM
                </h1>

                <div className="h-[12vw] w-[12vw] flex-shrink-0 rotate-45 border-[10px] border-white md:border-[20px]" />

                <h1 className="font-['Major_Mono_Display'] text-[35vw] leading-[0.7] tracking-[-0.05em] lowercase">
                  samm
                </h1>

                <div className="text-[20vw] font-thin opacity-20 flex-shrink-0">/</div>

                <h1 className="font-['Cormorant_Garamond'] text-[38vw] font-bold italic leading-[0.7] tracking-[-0.05em]">
                  Samm
                </h1>

                <div className="h-[1px] w-[15vw] flex-shrink-0 bg-white" />

                <h1 className="font-['Lexend_Zetta'] text-[30vw] font-[900] leading-[0.7] tracking-[-0.1em] text-transparent uppercase stroke-text">
                  SAMM
                </h1>

                <div className="h-[12vw] w-[12vw] flex-shrink-0 rounded-full border-[10px] border-white md:border-[20px]" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl space-y-6">
            <p className="font-unbounded font-bold text-2xl md:text-4xl leading-tight tracking-tighter">
              WE DON'T DO SOFT.
              <br />
              WE DO{" "}
              <span className="text-white underline decoration-white decoration-4 underline-offset-8">
                INTENSE
              </span>
              .
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#flavors"
                className="bg-white px-6 py-3 font-unbounded text-sm font-black uppercase tracking-[0.2em] text-black transition-transform hover:scale-105"
              >
                See Flavors
              </a>
              <a
                href="#manifesto"
                className="border border-white px-6 py-3 font-unbounded text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
              >
                Read Manifesto
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <Star key={i} className="w-6 h-6 fill-white text-white" />
              ))}
            </div>
            <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
              Est. 2024 / No BS
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section
        id="manifesto"
        className="grid grid-cols-1 items-center gap-12 bg-[#000] px-6 py-24 md:grid-cols-2 md:px-12"
      >
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-unbounded font-black leading-[0.8] tracking-tighter italic">
            0% SUGAR
            <br />
            100% RAW
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-lg italic">
            Traditional ice cream is dead. We&apos;ve removed the filler and kept the soul.
            No added sugar. No compromise. Just pure, unadulterated flavor power.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border-2 border-dashed border-zinc-800 rotate-3" />
          <img src="/scoops.png" alt="Raw Flavor" className="relative z-10 w-full grayscale contrast-125" />
        </div>
      </section>

      {/* Asymmetric Product Grid */}
      <section id="flavors" className="border-t-2 border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {flavors.map((flavor, i) => (
            <a
              key={flavor.slug}
              href={`#detail-${flavor.slug}`}
              className={cn(
                "group relative flex flex-col overflow-hidden border-zinc-900",
                i % 3 !== 2 ? "md:border-r-2" : "",
                i < 3 ? "border-b-2" : "border-b-2 md:border-b-0",
              )}
            >
              <div className="relative z-10 space-y-2 p-8 transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                <span className="text-[10px] font-black tracking-widest text-zinc-500">0{i + 1}</span>
                <h3 className="text-4xl font-unbounded font-black tracking-tighter group-hover:italic">
                  {flavor.name}
                </h3>
                <p className="text-[10px] font-bold tracking-widest opacity-40">{flavor.desc}</p>
              </div>

              <div className="relative flex-1 min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="h-full w-full scale-90 object-contain grayscale transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-5" />
              </div>

              <div className="flex items-center justify-between border-t border-zinc-900 p-8 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                <span className="font-unbounded text-sm font-black tracking-tighter uppercase">
                  View Detail
                </span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="details" className="border-t-2 border-zinc-900 bg-[#050505] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-[11px] font-unbounded font-bold uppercase tracking-[0.35em] text-zinc-500">
                Product Detail
              </p>
              <h2 className="text-5xl font-unbounded font-black leading-[0.9] tracking-[-0.08em] md:text-7xl">
                PICK YOUR
                <br />
                DAMAGE.
              </h2>
            </div>
            <p className="max-w-md text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              Each tub is built to feel different. Choose by mood, not by habit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {flavors.map((flavor, i) => (
              <article
                key={flavor.slug}
                id={`detail-${flavor.slug}`}
                className="border border-zinc-900 bg-black p-8"
              >
                <div className="mb-8 flex items-start justify-between gap-6 border-b border-zinc-900 pb-6">
                  <div>
                    <p className="mb-3 text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase">
                      0{i + 1} / {flavor.desc}
                    </p>
                    <h3 className="text-4xl font-unbounded font-black tracking-tighter md:text-5xl">
                      {flavor.name}
                    </h3>
                  </div>
                  <img
                    src={flavor.image}
                    alt={`${flavor.name} tub`}
                    className="h-24 w-24 flex-shrink-0 object-contain grayscale"
                  />
                </div>

                <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-300">{flavor.note}</p>

                <div className="grid grid-cols-1 gap-4 text-sm uppercase tracking-[0.18em] text-zinc-400 md:grid-cols-2">
                  <div className="border border-zinc-900 p-4">
                    <p className="mb-2 text-[10px] font-black tracking-[0.3em] text-zinc-500">Profile</p>
                    <p className="font-unbounded text-xs font-bold text-white">{flavor.profile}</p>
                  </div>
                  <div className="border border-zinc-900 p-4">
                    <p className="mb-2 text-[10px] font-black tracking-[0.3em] text-zinc-500">Best For</p>
                    <p className="font-unbounded text-xs font-bold text-white">{flavor.bestFor}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Spotlight */}
      <section className="bg-white text-black py-24 md:py-48 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Star className="w-[80vw] h-[80vw] rotate-12 fill-black" />
        </div>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <h2 className="text-[15vw] lg:text-[10vw] font-unbounded font-black leading-[0.75] tracking-[-0.1em]">
              CRAFTED
              <br />
              FOR THE
              <br />
              FEARLESS.
            </h2>
            <div className="flex flex-col gap-6 font-unbounded">
              <div className="border-l-8 border-black pl-8">
                <p className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase">
                  THE NEW ICE AGE IS HERE.
                </p>
              </div>
              <p className="max-w-md text-sm font-bold leading-relaxed tracking-tighter uppercase">
                We don&apos;t care about trends. We care about impact. SAMM is the
                unapologetic fusion of luxury and raw intensity.
              </p>
            </div>
            <a
              href="#details"
              className="inline-flex bg-black px-12 py-6 font-unbounded text-xl font-black tracking-tighter text-white uppercase transition-transform hover:scale-105"
            >
              Explore Flavors
            </a>
          </div>

          <div className="relative">
            <motion.div
              initial={{ rotate: 10, scale: 0.9 }}
              whileInView={{ rotate: -5, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              className="relative z-10 border-[10px] border-black"
            >
              <img
                src="/container-chocolate.png"
                alt="Chocolate Strong"
                className="w-full shadow-[30px_30px_0px_0px_rgba(0,0,0,1)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-800 bg-black px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-unbounded font-bold uppercase tracking-[0.35em] text-zinc-500">
              Ready To Launch
            </p>
            <h2 className="text-3xl font-unbounded font-black tracking-[-0.06em] md:text-5xl">
              ONE PAGE. SIX FLAVORS.
              <br />
              ZERO SOFT EDGES.
            </h2>
          </div>
          <a
            href="#flavors"
            className="inline-flex items-center gap-3 border border-white px-6 py-4 font-unbounded text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Browse All Flavors
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="border-y-2 border-zinc-800 bg-black py-8 overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex items-center gap-24 pr-24 text-4xl md:text-6xl font-unbounded font-black tracking-[-0.05em]"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className={i % 2 === 0 ? "text-white" : "text-zinc-800"}>
              SAMM RAW POWER
            </span>
          ))}
        </motion.div>
      </div>

      <footer className="bg-black px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="text-[15vw] font-unbounded font-black leading-none tracking-[-0.1em] opacity-10">
            SAMM.
          </div>
          <p className="font-unbounded text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
            Website by SAMM
          </p>
          <a
            href="#top"
            className="text-[11px] font-unbounded font-bold uppercase tracking-[0.35em] text-zinc-400 transition-opacity hover:opacity-60"
          >
            Back To Top
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
