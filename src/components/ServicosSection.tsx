import { motion } from "framer-motion";
import { Leaf, Apple, HeartPulse } from "lucide-react";

const services = [
  { icon: Leaf, title: "Reeducação Alimentar", desc: "Transforme seus hábitos alimentares de forma sustentável e prazerosa." },
  { icon: Apple, title: "Nutrição Clínica", desc: "Acompanhamento nutricional para condições específicas de saúde." },
  { icon: HeartPulse, title: "Nutrição Esportiva", desc: "Planejamento alimentar focado em performance e resultados." },
];

const ServicosSection = () => (
  <section id="servicos" className="py-24 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">Serviços</h2>
        <div className="w-16 h-px bg-primary mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-background p-8 text-center rounded-sm border border-border hover:shadow-md transition-shadow"
          >
            <s.icon className="mx-auto mb-4 text-primary" size={32} strokeWidth={1.5} />
            <h3 className="font-heading text-xl font-medium text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
