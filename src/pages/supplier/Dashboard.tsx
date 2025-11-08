import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBasket, Plus, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SupplierDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Products", value: "24", icon: Package, color: "text-primary" },
    { title: "Active Products", value: "18", icon: ShoppingBasket, color: "text-secondary" },
    { title: "Total Orders", value: "156", icon: BarChart, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Supplier Dashboard</h1>
              <p className="text-muted-foreground">Manage your products and orders</p>
            </div>
            <Button onClick={() => navigate("/supplier/add-product")}>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Button onClick={() => navigate("/supplier/products")}>View Products</Button>
            <Button variant="outline" onClick={() => navigate("/supplier/orders")}>View Orders</Button>
            <Button variant="outline" onClick={() => navigate("/supplier/profile")}>Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplierDashboard;
