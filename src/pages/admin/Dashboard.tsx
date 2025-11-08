import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Package, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Suppliers", value: "45", icon: Users, color: "text-primary", trend: "+12%" },
    { title: "Total Customers", value: "1,234", icon: Users, color: "text-secondary", trend: "+8%" },
    { title: "Total Products", value: "324", icon: Package, color: "text-primary", trend: "+15%" },
    { title: "Total Orders", value: "856", icon: ShoppingCart, color: "text-secondary", trend: "+23%" },
    { title: "Total Revenue", value: "$45,678", icon: DollarSign, color: "text-primary", trend: "+18%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage GreenBasket platform</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span>{stat.trend}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="cursor-pointer hover:shadow-card-hover transition-shadow" onClick={() => navigate("/admin/suppliers")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Suppliers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Manage supplier accounts and approvals</p>
              <Button variant="link" className="px-0 mt-2">View All →</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-card-hover transition-shadow" onClick={() => navigate("/admin/customers")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Customers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">View and manage customer accounts</p>
              <Button variant="link" className="px-0 mt-2">View All →</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-card-hover transition-shadow" onClick={() => navigate("/admin/products")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Manage all products and listings</p>
              <Button variant="link" className="px-0 mt-2">View All →</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-card-hover transition-shadow" onClick={() => navigate("/admin/orders")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-secondary" />
                Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Monitor all platform orders</p>
              <Button variant="link" className="px-0 mt-2">View All →</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
