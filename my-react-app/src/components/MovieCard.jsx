import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  image: string;
  title: string;
  rating: string;
  year: string;
  className?: string;
}

const MovieCard = ({ image, title, rating, year, className }: MovieCardProps) => {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]", className)}>
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
          <div>
            <h3 className="font-bold text-lg text-foreground">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary font-semibold">{rating}</span>
              <span>•</span>
              <span>{year}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
              <Play className="mr-2 h-4 w-4" />
              Play
            </Button>
            <Button size="sm" variant="secondary" className="bg-muted hover:bg-muted/80">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
