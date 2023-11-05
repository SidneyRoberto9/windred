import { AnimeSearch } from '@/components/AnimeSearch';
import { Info } from '@/components/Info';

export default function Page() {
  return (
    <main className="sm:my-20 my-2 h-[70vh] xl:grid w-full grid-cols-2 flex flex-col xl:divide-x">
      <Info />
      <hr className="xl:hidden h-1 bg-stone-900 dark:bg-stone-100 max-w-4xl w-11/12 m-auto" />
      <AnimeSearch />
    </main>
  );
}
