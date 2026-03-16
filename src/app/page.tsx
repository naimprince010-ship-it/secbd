import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { mockData } from "@/data/mockData";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const data = mockData;

  // Fetch settings from Supabase
  const { data: settings } = await supabase
    .from('site_settings')
    .select('*')
    .eq('id', 1)
    .single();

  const contactData = settings || {
    address: data.siteSettings.contactAddress,
    phone: data.siteSettings.contactPhone,
    email: data.siteSettings.contactEmail
  };

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
        address={contactData.address}
        phone={contactData.phone}
        email={contactData.email}
      />
      <Footer />
    </main>
  );
}

