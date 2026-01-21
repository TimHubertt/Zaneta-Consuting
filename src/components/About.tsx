const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Abstract accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="200" r="150" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          <circle cx="350" cy="500" r="200" stroke="hsl(var(--accent))" strokeWidth="0.3" />
          <path d="M200 0 Q 400 400 200 800" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

        <div className="container">
        <h2 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Us
          </h2>
          </div>
      <div className="container grid grid-cols-1 md:grid-cols-[2fr_1fr] px-6 relative z-10">
        <div className="max-w-3xl ">
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Strategic Partner in Talent Acquisition
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-6">
            Zaneta Consulting is a premier recruitment consultancy dedicated to bridging the gap 
            between exceptional talent and forward-thinking organizations. With deep expertise 
            across multiple industries, we understand the unique challenges each sector faces.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Our approach combines industry knowledge with personalized service, ensuring 
            that every placement is a perfect match. We don't just fill positions—we build 
            lasting partnerships that drive success.
          </p>
        </div>
          
           {/* <img  src="src/assets/images/about.webp" alt="people walking around" /> */}

           <video className="mt-4" autoPlay loop muted>
            <source src="/assets/images/about-us.mp4" type="video/mp4" />
           </video>
        
      </div>
    </section>
  );
};

export default About;
