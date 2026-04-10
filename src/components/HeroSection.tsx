import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-nutrition.jpg";
import profileImg from "@/assets/perfil.jpeg";

const HeroSection = () => (
  <section id="home" className="relative flex min-h-[88vh] items-center pt-20">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Nutricao saudavel" className="h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/75" />
    </div>

    <div className="container relative z-10 py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
        >
          <h1 className="mb-1 font-heading text-5xl font-light leading-tight text-foreground md:text-7xl">
            Victoria <span className="font-medium text-primary">Affeldt</span>
          </h1>
          <p className="mb-8 mx-auto w-fit text-left font-medium text-lg uppercase tracking-[0.30em] text-muted-foreground lg:mx-1">
            Nutricionista
          </p>
          <p className="mb-8 max-w-md font-medium text-base leading-relaxed text-foreground/80 lg:max-w-xl lg:text-lg">
            Cuidando da sua saude com planejamento nutricional personalizado, acompanhamento continuo e resultados reais.
          </p>
  <Button variant="hero" size="lg" asChild>
          <a href="https://wa.me/5551999282808" target="_blank" rel="noopener noreferrer">
            Agendar Consulta
          </a>
        </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[17rem] sm:max-w-[21rem] lg:max-w-[24rem] xl:max-w-[26rem]">
            <div className="pointer-events-none absolute -left-8 top-10 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-6 h-36 w-36 rounded-full bg-accent/30 blur-3xl" />
           

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-primary/25 bg-card shadow-[0_34px_90px_-32px_rgba(15,23,42,0.95)]">
              <img
                src={profileImg}
                alt="Retrato profissional da nutricionista Victoria Affeldt"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>

            <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-white/40" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
