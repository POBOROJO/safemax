import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";
import { DashboardLayout } from "@/components/admin/DashboardLayout";
import { PrivateRoute } from "@/components/auth/PrivateRoute.tsx";
import { SignUpForm } from "@/components/auth/SignUpForm";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="safemax-theme">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />

          {/* Authentication Routes */}
          <Route path="/admin/login" element={<LoginForm />} />
          <Route path="/admin/signup" element={<SignUpForm />} />

          {/* Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              // <PrivateRoute>
              <DashboardLayout />
              // </PrivateRoute>
            }
          />

          {/* Catch-all route to redirect to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
