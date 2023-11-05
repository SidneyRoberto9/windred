import { JikanSearch } from '@/model/Jikan';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

export async function searchAnime(q: string) {
  return await api.get<JikanSearch>(`/anime?q=${q}&limit=6&sfw`);
}
