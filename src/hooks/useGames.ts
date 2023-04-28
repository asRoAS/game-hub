import useData from '../components/useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[]
// }

const useGames = (selectedGenre: Genre | null) => useData<Game>(
  '/games',
  { params: { genrer: selectedGenre?.id } },
  [selectedGenre?.id],
);

export default useGames;
