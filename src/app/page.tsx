import { AnimeSearch } from '@/components/AnimeSearch';
import { Info } from '@/components/Info';

export default function Page() {
  return (
    <main className="my-20 h-[70vh] w-full grid grid-cols-2 divide-x">
      <Info />
      <AnimeSearch />
    </main>
  );
}
