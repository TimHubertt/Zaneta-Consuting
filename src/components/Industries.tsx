import { Monitor, Briefcase, FlaskConical, Building2, Cpu, HeartPulse } from "lucide-react";

const industries = [
  {
    image: "/assets/images/tech.webp",
    title: "Information Technology",
    description: "Software development, cybersecurity, data science, and cloud solutions."
  },
  {
    image: "/assets/images/finance.jpg",
    title: "Non-IT Corporate",
    description: "Finance, HR, marketing, operations, and administrative roles."
  },
  {
    image: "/assets/images/pharma.png",
    title: "Pharmaceutical",
    description: "R&D, clinical trials, regulatory affairs, and quality assurance."
  },
  {
    image: "/assets/images/brain.jpg",
    title: "Healthcare",
    description: "Medical professionals, healthcare administration, and biotech."
  },
  {
    image: "/assets/images/manu.png",
    title: "Manufacturing",
    description: "Engineering, production, supply chain, and quality control."
  },
  {
    image: "/assets/images/tech.png",
    title: "Emerging Tech",
    description: "AI/ML, blockchain, IoT, and next-generation technologies."
  }
];

const Industries = () => {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-md text-foreground">
            Industries We Cover
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {industries.map((industry, index) => (
            <div
                key={index}
                className="group relative flex items-end p-4 min-h-[250px] rounded-lg
                          overflow-hidden transition-all duration-300
                          hover:border-accent/50 hover:shadow-glow"
                style={{
                  backgroundImage: `url(${industry.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Smoky gradient overlay */}
               { <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3
                            bg-gradient-to-t from-black/45 via-black/20 to-transparent"
                />}
  
              {/* <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <industry.icon className="w-6 h-6 text-accent" />
              </div> */}
             
              <h3 
              style={{color: "#f3ffc7"}}
              className="text-xl font-semibold text-foreground mb-3">
                {industry.title}
              </h3>
              {/* <p className="text-foreground/60">
                {industry.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
