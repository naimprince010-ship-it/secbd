import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { mockData } from "@/data/mockData";

export default function Home() {
  const data = mockData;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero
        title={data.siteSettings.heroTitle}
        subtitle={data.siteSettings.heroSubtitle}
      />
      <Services data={data.services} />
      <Stats data={data.stats} />
      <Portfolio data={data.portfolio} />
      <Contact
        address={data.siteSettings.contactAddress}
        phone={data.siteSettings.contactPhone}
        email={data.siteSettings.contactEmail}
      />
      <Footer />
    </main>
  );
}
