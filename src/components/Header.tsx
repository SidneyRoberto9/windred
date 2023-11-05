import { GithubButton } from '@/components/GithubButton';
import { ThemeButton } from '@/components/ThemeButton';

export function Header() {
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="font-bold text-2xl">
        <h1>WINDRED</h1>
      </div>

      <div className="flex items-center justify-center gap-4">
        <ThemeButton />
        <GithubButton />
      </div>
    </header>
  );
}
