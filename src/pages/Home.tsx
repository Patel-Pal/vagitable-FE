import { Button } from "@/components/ui/button";
import { ShoppingBasket, Leaf, TrendingUp, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBasket className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">GreenBasket</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate("/auth")}>
                Login
              </Button>
              <Button onClick={() => navigate("/auth?mode=register")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Fresh From Farm to Your Door</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Fresh Vegetables
              <span className="block text-primary">Delivered Daily</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the farm-fresh quality of organic vegetables delivered straight to your doorstep. 
              Supporting local farmers while nourishing your family.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate("/auth?mode=register")}>
                Start Shopping
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/auth?mode=register&role=supplier")}>
                Become a Supplier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">100% Organic</h3>
              <p className="text-muted-foreground">
                All our vegetables are grown naturally without harmful pesticides or chemicals.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fair Prices</h3>
              <p className="text-muted-foreground">
                Direct from farmers to consumers, ensuring fair prices for everyone involved.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community First</h3>
              <p className="text-muted-foreground">
                Supporting local farmers and building stronger, healthier communities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vegetable Display Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Fresh Vegetables Available Now
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked seasonal vegetables, delivered fresh from local farms every morning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Tomatoes", emoji: "🍅", price: "$3.99", category: "Fresh" },
              { name: "Carrots", emoji: "🥕", price: "$2.49", category: "Root" },
              { name: "Broccoli", emoji: "🥦", price: "$3.49", category: "Green" },
              { name: "Peppers", emoji: "🫑", price: "$4.99", category: "Fresh" },
              { name: "Lettuce", emoji: "🥬", price: "$1.99", category: "Leafy" },
              { name: "Cucumber", emoji: "🥒", price: "$2.99", category: "Fresh" },
              { name: "Eggplant", emoji: "🍆", price: "$3.29", category: "Fresh" },
              { name: "Corn", emoji: "🌽", price: "$4.49", category: "Fresh" },
              { name: "Potato", emoji: "🥔", price: "$2.79", category: "Root" },
              { name: "Onion", emoji: "🧅", price: "$1.89", category: "Root" },
              { name: "Garlic", emoji: "🧄", price: "$5.99", category: "Spice" },
              { name: "Avocado", emoji: "🥑", price: "$6.99", category: "Fresh" },
            ].map((veg, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {veg.emoji}
                </div>
                <div className="space-y-1">
                  <div className="inline-block px-2 py-0.5 bg-primary/10 rounded text-xs font-medium text-primary mb-2">
                    {veg.category}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{veg.name}</h4>
                  <p className="text-primary font-bold">{veg.price}<span className="text-xs text-muted-foreground">/lb</span></p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate("/auth?mode=register")}>
              View All Vegetables
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-hero-gradient rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Go Green?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of happy customers enjoying fresh, organic vegetables</p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/auth?mode=register")}>
              Create Your Account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 GreenBasket. Fresh vegetables delivered with love.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
