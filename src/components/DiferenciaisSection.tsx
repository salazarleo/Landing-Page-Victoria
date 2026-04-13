import { motion } from "framer-motion";
import { Star, User, MessageCircle, Users, Utensils, Clock3 } from "lucide-react";

const diferenciais = [
  { icon: Star, title: "Exclusividade", desc: "Plano alimentar 100% elaborado conforme suas necessidades." },
  { icon: User, title: "Personalizado", desc: "Planejamento nutricional com base na sua demanda." },
  { icon: MessageCircle, title: "Assistência", desc: "Você tem acompanhamento diário, possibilitando tirar qualquer dúvida de forma imediata." },
  { icon: Users, title: "Cuidado Individual", desc: "Sua alimentação respeita seu corpo, sua rotina, suas preferências e seus objetivos." },
  { icon: Utensils, title: "Plano Alimentar", desc: "É entregue até 4 planos alimentares diferentes, visando ter autonomia e diversidade na alimentação." },
  { icon: Clock3, title: "Reavaliação Contínua", desc: "Ajustes estratégicos no plano ao longo das semanas para manter evolução real e sustentável." },
];

const DiferenciaisSection = () => (
  <section id="diferenciais" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">Diferenciais</h2>
        <div className="w-16 h-px bg-primary mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {diferenciais.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 border border-border rounded-sm hover:border-primary/40 transition-colors group"
          >
            <d.icon className="mb-4 text-primary group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-medium text-foreground mb-2">{d.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSection;
