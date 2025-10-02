import { WeightClass } from "@/data/champions";
import { ChampionCard } from "./ChampionCard";
import { Card } from "@/components/ui/card";

interface WeightClassCardProps {
  weightClass: WeightClass;
}

export const WeightClassCard = ({ weightClass }: WeightClassCardProps) => {
  return (
    <Card className="gradient-card p-6 border-border/50 shadow-card animate-fade-in">
      <div className="space-y-6">
        <div className="text-center border-b border-border/30 pb-4">
          <h2 className="text-2xl font-bold text-gradient mb-1">{weightClass.name}</h2>
          <p className="text-sm text-muted-foreground">{weightClass.weight}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* WBA */}
          {weightClass.wba && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                <img
                  src="/images/wba-logo.png"
                  alt="WBA"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="font-bold text-sm">WBA</h3>
              </div>
              <div className="space-y-2">
                {weightClass.wba.map((champion, idx) => (
                  <ChampionCard
                    key={`wba-${idx}`}
                    champion={champion}
                    organization="WBA"
                  />
                ))}
              </div>
            </div>
          )}

          {/* WBC */}
          {weightClass.wbc && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                <img
                  src="/images/wbc-logo.png"
                  alt="WBC"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="font-bold text-sm">WBC</h3>
              </div>
              <div className="space-y-2">
                {weightClass.wbc.map((champion, idx) => (
                  <ChampionCard
                    key={`wbc-${idx}`}
                    champion={champion}
                    organization="WBC"
                  />
                ))}
              </div>
            </div>
          )}

          {/* IBF */}
          {weightClass.ibf && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                <img
                  src="/images/ibf-logo.png"
                  alt="IBF"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="font-bold text-sm">IBF</h3>
              </div>
              <div className="space-y-2">
                {weightClass.ibf.map((champion, idx) => (
                  <ChampionCard
                    key={`ibf-${idx}`}
                    champion={champion}
                    organization="IBF"
                  />
                ))}
              </div>
            </div>
          )}

          {/* WBO */}
          {weightClass.wbo && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                <img
                  src="/images/wbo-logo.png"
                  alt="WBO"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="font-bold text-sm">WBO</h3>
              </div>
              <div className="space-y-2">
                {weightClass.wbo.map((champion, idx) => (
                  <ChampionCard
                    key={`wbo-${idx}`}
                    champion={champion}
                    organization="WBO"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
