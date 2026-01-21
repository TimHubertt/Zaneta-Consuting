import { Shield, Award, Eye } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Trust",
    description: "We build relationships founded on integrity, confidentiality, and mutual respect. Your success is our reputation."
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Our recruiters bring deep industry knowledge and years of experience to match the right talent with the right opportunity."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication at every step. No hidden agendas, just honest guidance throughout your journey."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Abstract lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300 L1440 100" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          <path d="M0 350 L1440 150" stroke="hsl(var(--accent))" strokeWidth="0.3" />
          <path d="M0 400 L1440 200" stroke="hsl(var(--accent))" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-card/50 border border-border/30 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
