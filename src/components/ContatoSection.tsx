import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContatoSection = () => (
  <section id="contato" className="py-24 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">Fale Conosco</h2>
        <div className="w-16 h-px bg-primary mx-auto mb-8" />
        <p className="font-body text-foreground/70 leading-relaxed mb-10">
          Pronta para começar sua jornada de transformação? Agende sua consulta e dê o primeiro passo rumo a uma vida mais saudável.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            Agendar Consulta
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ContatoSection;
