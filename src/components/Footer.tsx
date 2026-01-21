const Footer = () => {
  return (
    <footer className="py-16 bg-secondary relative overflow-hidden border-t border-border/30">
      {/* Abstract line art */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 150 Q 360 50 720 150 T 1440 150" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" />
          <path d="M0 200 Q 360 100 720 200 T 1440 200" stroke="hsl(var(--accent))" strokeWidth="0.3" fill="none" />
        </svg>
      </div>

      <div className="container px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              <img src="src\assets\images\logo.svg" alt="logo" />
            </h3>
            <p className="text-foreground/60">
              Connecting talent with opportunity.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-foreground/60 mb-2">Get in touch</p>
            <a 
              href="mailto:info@zanetaconsulting.com" 
              className="text-accent hover:text-accent/80 transition-colors font-medium text-lg"
            >
              hello@zanetaconsulting.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Zaneta Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
