'use client';

import { DurationView } from '@/components/DurationView';
import { Input } from '@/components/ui/input';
import { searchAnime } from '@/lib/jikan';
import { TimeString } from '@/model/Duration';
import { JK } from '@/model/Jikan';
import { getDuration } from '@/util/duration';
import { getTimeString } from '@/util/time';
import { AlertTriangle, Search } from 'lucide-react';
import { KeyboardEvent, useRef, useState } from 'react';

export function AnimeSearch() {
  const [duration, setDuration] = useState<TimeString | null | undefined>(null);
  const [animes, setAnimes] = useState<JK[]>([]);
  const query = useRef<HTMLInputElement>(null);

  async function handleSearch() {
    const queryValue: string = query.current?.value as string;
    const { data } = await searchAnime(queryValue);

    setAnimes(data.data);
  }

  async function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.code !== 'Enter') {
      setAnimes([]);
      setDuration(null);
      return;
    }

    await handleSearch();
  }

  async function handleCalculate(selectedAnime: JK) {
    const durationString = selectedAnime.duration;
    const episodes = selectedAnime.episodes;

    const duration = getDuration(durationString, episodes);
    console.log(duration);

    if (duration !== null) {
      const timeString = getTimeString(duration, episodes);
      setDuration(timeString);

      if (query.current) {
        query.current.value = '';
      }
    } else {
      setDuration(undefined);
    }

    setAnimes([]);
  }

  return (
    <section className="flex flex-col py-8 px-5">
      <p className="py-4">Try out the Anime Search</p>
      <div className="w-full relative">
        <Search
          className="w-6 h-6 absolute top-0 bottom-0 my-auto right-3 cursor-pointer"
          onClick={handleSearch}
        />
        <Input type="text" ref={query} onKeyDown={handleEnter} />
      </div>
      {animes.length > 0 && (
        <div className="flex flex-col mt-2 ">
          {animes.map((anime) => (
            <div
              key={anime.mal_id}
              onClick={() => handleCalculate(anime)}
              className="border w-full cursor-pointer">
              <div className="grid grid-cols-5 gap-4 overflow-hidden p-2 ">
                <img
                  alt={anime.title}
                  src={anime.images.webp.image_url}
                  className="w-full h-14 object-cover"
                />
                <h1 className="my-auto col-span-4 text-left text-sm">{anime.title}</h1>
              </div>
            </div>
          ))}
        </div>
      )}

      {duration !== null && duration !== undefined && <DurationView data={duration} />}
      {duration === undefined && (
        <div className="flex flex-col items-center justify-center h-64 gap-2 text-sm opacity-75">
          <AlertTriangle className="w-20 h-20" />
          <div className="flex flex-col items-center">
            <p>Unfinished Anime</p>
            <p>or</p>
            <p>Invalid number of Episodes</p>
          </div>
        </div>
      )}
    </section>
  );
}
