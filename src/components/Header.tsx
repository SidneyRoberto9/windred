import { GithubButton } from '@/components/GithubButton';
import { ThemeButton } from '@/components/ThemeButton';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sm:px-0 px-4 py-4 flex items-center justify-between">
      <Link
        href={'/'}
        prefetch={false}
        className="bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-2xl">
        <h1 className="p-2 px-3 font-bold text-xl select-none">W</h1>
      </Link>

      <div className="flex items-center justify-center gap-4">
        <ThemeButton />
        <GithubButton />
      </div>
    </header>
  );
}
