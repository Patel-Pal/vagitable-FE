import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, User, LogOut, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
const mockProducts = [
  { id: 1, name: "Fresh Tomatoes", price: 3.99, supplier: "Green Farms", image: "🍅", category: "Vegetables" },
  { id: 2, name: "Organic Carrots", price: 2.49, supplier: "Sunny Fields", image: "🥕", category: "Root Vegetables" },
  { id: 3, name: "Fresh Spinach", price: 1.99, supplier: "Green Farms", image: "🥬", category: "Leafy Greens" },
  { id: 4, name: "Bell Peppers", price: 4.99, supplier: "Valley Produce", image: "🫑", category: "Vegetables" },
  { id: 5, name: "Broccoli", price: 3.49, supplier: "Sunny Fields", image: "🥦", category: "Cruciferous" },
  { id: 6, name: "Cucumbers", price: 2.99, supplier: "Fresh Harvest", image: "🥒", category: "Vegetables" },
];

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for vegetables..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Fresh Vegetables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {product.supplier}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground">per lb</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 gap-2">
                  <Button className="flex-1" onClick={() => addToCart(product.id)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
