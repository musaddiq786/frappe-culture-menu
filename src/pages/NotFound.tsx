import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — Frappes Culture Chiplun</title>
        <meta
          name="description"
          content="This page doesn't exist at Frappes Culture. Head back to the menu to browse our cold coffee, shakes and mojitos."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://frappe-culture.lovable.app/" />
        <meta property="og:title" content="Page Not Found — Frappes Culture Chiplun" />
        <meta
          property="og:description"
          content="This page doesn't exist at Frappes Culture. Head back to the menu."
        />
        <meta property="og:url" content="https://frappe-culture.lovable.app/404" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
