import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-6xl
              rounded-2xl border border-white/10
              bg-white/10 backdrop-blur-xl
              shadow-[0_8px_30px_rgba(0,0,0,0.08)] ">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="h-[100px]">
           <img className="h-full w-auto object-contain"
 src="/assets/images/logo.svg" alt="logo" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              About
            </a>
            <a href="#industries" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Industries
            </a>
            <a href="#why-us" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Why Us
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* <Button variant="accent" size="sm" className="hidden sm:inline-flex">
            Submit CV
          </Button> */}

          <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=info@zaneta.in"
          className="hidden md:block inline-flex text-sm items-center justify-center px-3 py-2 bg-[#F3FFC7] border hover:shadow-[0_0_5px_3px_rgba(243,255,199,0.5)] text-white rounded-lg transition-opacity"
            style={{ color: "black" }}
           target="_blank">Submit CV</a>

        </div>
      </div>
    </header>
  );
};

export default Header;
