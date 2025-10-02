import { Champion } from "@/data/champions";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ChampionCardProps {
  champion: Champion;
  organization: string;
}

export const ChampionCard = ({ champion, organization }: ChampionCardProps) => {
  const getTypeLabel = (type?: string) => {
    if (!type) return null;
    const labels = {
      super: "Super Champion",
      regular: "Regular Champion",
      interim: "Interim Champion",
    };
    return labels[type as keyof typeof labels];
  };

  const getTypeBadgeClass = (type?: string) => {
    if (!type) return "";
    const classes = {
      super: "bg-primary/20 text-primary border-primary/30",
      regular: "bg-secondary/20 text-secondary-foreground border-secondary/30",
      interim: "bg-muted/20 text-muted-foreground border-muted/30",
    };
    return classes[type as keyof typeof classes];
  };

  return (
    <Card className="gradient-card p-4 border-border/50 hover:border-primary/30 transition-all duration-300 group">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <a
              href={champion.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors group-hover:text-primary inline-flex items-center gap-2"
            >
              {champion.name}
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            {champion.type && (
              <span
                className={`inline-block px-2 py-0.5 text-xs rounded border mt-1 ${getTypeBadgeClass(
                  champion.type
                )}`}
              >
                {getTypeLabel(champion.type)}
              </span>
            )}
          </div>
        </div>
        <div className="text-sm space-y-1 text-muted-foreground">
          <p className="font-mono">{champion.record}</p>
          <p className="text-xs">Since {champion.date}</p>
        </div>
      </div>
    </Card>
  );
};
