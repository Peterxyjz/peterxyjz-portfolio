import {
  HomeHeader,
  HeroSection,
  StatsSection,
  AboutSection,
  BlogSection,
  ToolsSection,
  ContactSection,
  Footer,
} from "@/components/homepage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeHeader />
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <BlogSection />
          <ToolsSection />
          <ContactSection />
        </div>
      </main>

      <footer className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
