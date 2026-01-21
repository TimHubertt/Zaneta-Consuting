import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Whether you're seeking new opportunities or looking for exceptional talent, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Submit Your CV
            </Button>
            <Button style={{color: "white" }} variant="accentOutline" size="lg">
              Company Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
