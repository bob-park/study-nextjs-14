import SearchZone from '../_component/SearchZone';
import TrandSection from '../_component/TrandSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center relative px-4">
      <div className="w-full">
        <SearchZone />
      </div>
      <div className="w-full">
        <TrandSection />
      </div>
    </main>
  );
}
