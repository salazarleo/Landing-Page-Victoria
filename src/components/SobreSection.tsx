import { motion } from "framer-motion";

const SobreSection = () => (
  <section id="sobre" className="bg-background py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-2 font-heading text-4xl font-light text-foreground md:text-5xl">Sobre Mim</h2>
        <div className="mx-auto mb-8 h-px w-16 bg-primary" />
        <p className="font-medium leading-relaxed text-foreground/80">
          Sou a Victoria Affeldt, nutricionista apaixonada por transformar vidas atraves da alimentacao consciente e
          personalizada. Acredito que cada pessoa e unica e merece um plano alimentar que respeite suas necessidades,
          rotina e objetivos.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SobreSection;
