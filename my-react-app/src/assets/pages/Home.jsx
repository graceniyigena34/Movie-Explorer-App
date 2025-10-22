
import { Play, Info, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/MovieCard";
import heroImage from "@/assets/hero-movie.jpg";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const Home = () => {
  const trendingMovies = [
    { id: 1, image: movie1, title: "Neon Runner", rating: "8.5", year: "2024" },
    { id: 2, image: movie2, title: "Sunset Hearts", rating: "7.8", year: "2024" },
    { id: 3, image: movie3, title: "Mountain Peak", rating: "8.9", year: "2023" },
    { id: 4, image: movie4, title: "Haunted Manor", rating: "7.5", year: "2024" },
    { id: 5, image: movie5, title: "Family Fun", rating: "6.9", year: "2024" },
    { id: 6, image: movie6, title: "Dragon Kingdom", rating: "9.1", year: "2023" },
  ];

  const popularMovies = [
    { id: 7, image: movie3, title: "Epic Quest", rating: "8.7", year: "2023" },
    { id: 8, image: movie1, title: "Cyber City", rating: "8.3", year: "2024" },
    { id: 9, image: movie4, title: "Dark Secrets", rating: "7.9", year: "2024" },
    { id: 10, image: movie6, title: "Magic Realm", rating: "8.8", year: "2023" },
    { id: 11, image: movie2, title: "Love Story", rating: "7.6", year: "2024" },
    { id: 12, image: movie5, title: "Comedy Night", rating: "7.2", year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background via-background/80 to-transparent px-8 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MOVIEFLIX
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search movies..." 
                className="pl-10 w-64 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Featured Movie"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center px-8 md:px-16 max-w-7xl">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary">Featured Movie</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              City Under Siege
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              When a catastrophic explosion rocks the city, an elite team must race against time 
              to prevent total destruction. Action, drama, and suspense collide in this epic thriller.
            </p>
            
            <div className="flex items-center gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Play className="mr-2 h-5 w-5" />
                Watch Now
              </Button>
              <Button size="lg" variant="secondary" className="bg-muted/80 hover:bg-muted backdrop-blur-sm">
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary font-bold">8.7</span>
              <span className="text-muted-foreground">2024</span>
              <span className="px-2 py-0.5 border border-border rounded text-muted-foreground">16+</span>
              <span className="text-muted-foreground">2h 15min</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-8 md:px-16 py-12 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Trending Now</h3>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            See All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="px-8 md:px-16 py-12 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Popular on MovieFlix</h3>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            See All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-12 mt-12 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>© 2024 MovieFlix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
