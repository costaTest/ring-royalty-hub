import { weightClasses } from "@/data/champions";
import { WeightClassCard } from "@/components/WeightClassCard";
import heroImage from "@/assets/hero-boxing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen gradient-dark">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 35, 46, 0.85), rgba(31, 35, 46, 0.95)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-fade-in leading-tight">
              World Boxing Champions
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 animate-slide-up">
              Current titleholders across all weight divisions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-4">
                <img src="/images/wba-logo.jpg" alt="WBA" className="h-12 w-12 object-contain" />
                <img src="/images/wbc-logo.jpg" alt="WBC" className="h-12 w-12 object-contain" />
                <img src="/images/ibf-logo.jpg" alt="IBF" className="h-12 w-12 object-contain" />
                <img src="/images/wbo-logo.jpg" alt="WBO" className="h-12 w-12 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weight Classes Section */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">All Weight Divisions</h2>
          <p className="text-muted-foreground">
            Explore champions across {weightClasses.length} weight classes
          </p>
        </div>

        <div className="space-y-8">
          {weightClasses.map((weightClass, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <WeightClassCard weightClass={weightClass} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-border/30">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Data sourced from{" "}
            <a
              href="https://en.wikipedia.org/wiki/List_of_current_world_boxing_champions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Wikipedia
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Champion information is updated regularly. Click boxer names to view their Wikipedia
            profiles.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
