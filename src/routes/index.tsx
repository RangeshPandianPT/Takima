import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/takima/Navbar";
import { ScrollProgress } from "@/components/takima/ScrollProgress";
import { Hero } from "@/components/takima/Hero";
import { About } from "@/components/takima/About";
import { SignatureMenu } from "@/components/takima/SignatureMenu";
import { WhyChoose } from "@/components/takima/WhyChoose";
import { Gallery } from "@/components/takima/Gallery";
import { Testimonials } from "@/components/takima/Testimonials";
import { Instagram } from "@/components/takima/Instagram";
import { VisitUs } from "@/components/takima/VisitUs";
import { Contact } from "@/components/takima/Contact";
import { Footer } from "@/components/takima/Footer";
import { WhatsAppFab } from "@/components/takima/WhatsAppFab";

const TITLE = "TAKIMA — The House of Creams | Artisanal Café in Cumbum";
const DESCRIPTION =
  "Cumbum's first artisanal café & creamery. Handcrafted ice creams, waffles, sundaes, premium coffee & signature desserts, served in a luxe, family-friendly space.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "TAKIMA — The House of Creams",
          description: DESCRIPTION,
          servesCuisine: ["Café", "Desserts", "Ice Cream", "Coffee"],
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Road",
            addressLocality: "Cumbum",
            addressRegion: "Tamil Nadu",
            postalCode: "625516",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 10:00-23:00",
          telephone: "+91-0000000000",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <SignatureMenu />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Instagram />
      <VisitUs />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <Toaster position="bottom-center" richColors />
    </main>
  );
}
