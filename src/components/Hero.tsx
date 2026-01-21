import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full rounded-md h-full object-cover top-0 left-0'>
        <source src="public\assets\bg.mp4" type="video/mp4" />
      </video>
{/*       <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="300" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="1300" cy="700" r="400" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
          <path d="M0 450 Q 360 300 720 450 T 1440 450" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.4" fill="none" />
          <path d="M0 500 Q 360 650 720 500 T 1440 500" stroke="hsl(var(--accent))" strokeWidth="0.3" opacity="0.3" fill="none" />
          <line x1="100" y1="0" x2="400" y2="900" stroke="hsl(var(--accent))" strokeWidth="0.3" opacity="0.2" />
          <line x1="1340" y1="0" x2="1040" y2="900" stroke="hsl(var(--accent))" strokeWidth="0.3" opacity="0.2" />
        </svg>
      </div> */}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight tracking-tight">
          Connecting <span className="font-semibold">talent</span> ,
          <br />
          <span className="text-accent">Building <span className="italic font-md" style={{fontFamily: "Newsreader" }}>future.</span></span>
        </h1>
        {/* <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10">
          Trusted consultancy for IT, Non-IT, Pharma, and beyond.
        </p> */}
        <div className="flex justify-center flex-wrap sm:flex-row gap-4 ">

           <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=info@zaneta.in"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#F3FFC7] border hover:shadow-[0_0_10px_3px_rgba(243,255,199,0.5)] text-white rounded-lg transition-opacity"
            style={{ color: "black" }}
           target="_blank">Submit Your CV</a>

          {/* <Button variant="accent" size="lg">
            Submit Your CV
          </Button>
           */}
         {/*  <a 
            href="mailto:info@zaneta.in"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border text-white rounded-lg transition-opacity"
            style={{ color: "white" }}
          >
            Looking To Hire
          </a> */}

          <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=info@zaneta.in"
          className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:shadow-[0_0_10px_3px_rgba(243,255,199,0.5)] border text-white rounded-lg transition-opacity"
            style={{ color: "white" }}
           target="_blank">Looking to Hire</a>

        
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
