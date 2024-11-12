import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const navigate = useNavigate();

  // Function to handle authentication navigation
  const handleLoginNavigation = () => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");

    if (token) {
      // If logged in, redirect to dashboard
      navigate("/admin/dashboard");
    } else {
      // If not logged in, redirect to login
      navigate("/admin/login");
    }
  };

  const handleSignupNavigation = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // If logged in, redirect to dashboard
      navigate("/admin/dashboard");
    } else {
      // If not logged in, redirect to signup
      navigate("/admin/signup");
    }
  };

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div
      className={cn(
        "w-full min-h-screen flex flex-col bg-background",
        className,
      )}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-full">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 p-4">
              <span className="font-bold text-xl text-primary">SafeMax</span>
              <span className="text-muted-foreground text-sm">Security</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-lg font-medium hover:text-primary"
              >
                About
              </a>
              <a
                href="#services"
                className="text-lg font-medium hover:text-primary"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-lg font-medium hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-primary"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="flex items-center space-x-4 p-2">
            <ModeToggle />

            {/* Conditionally render buttons based on login status */}
            {isLoggedIn ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin/dashboard")}
                >
                  Dashboard
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    // Clear token and redirect to home
                    localStorage.removeItem("token");
                    toast.info("Logged out successfully", {
                      description: "You have been logged out of your account.",
                    });
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => {
                    handleLoginNavigation();
                    // Optional: Add a toast for login guidance
                    toast.info("Please log in first", {
                      description: "Access your SafeMax Security dashboard",
                    });
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button onClick={handleSignupNavigation}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="w-full flex-1">{children}</main>
    </div>
  );
}
