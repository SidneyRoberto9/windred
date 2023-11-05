import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Info() {
  return (
    <section className="flex flex-col justify-between">
      <div className="flex flex-col py-8 px-5">
        <h1 className="font-bold text-6xl">WINDRED</h1>
        <p className="opacity-75 px-2 text-xl">Anime Length Calculator</p>

        <div className="py-10 px-2 flex flex-col gap-4 text-md">
          <p>
            Search for your anime quickly and conveniently using our platform. Discover the exact
            duration of each series with ease. This project harnesses the power of the
            <strong>
              <a href="https://docs.api.jikan.moe/" target="_blank">
                {' '}
                Jikan Api
              </a>
            </strong>
            .
          </p>

          <p>
            Effortlessly find out how much time you'll need to dedicate to your favorite shows. Our
            platform, powered by the{' '}
            <strong>
              <a href="https://docs.api.jikan.moe/" target="_blank">
                Jikan Api
              </a>
            </strong>
            , ensures swift access to accurate details about the duration of each anime series,
            making your anime-watching experience even more convenient.
          </p>
        </div>
        <Button className="w-36 m-2" asChild>
          <Link href={'https://docs.api.jikan.moe/'} target="_blank">
            Go to Jikan
          </Link>
        </Button>
      </div>
    </section>
  );
}
