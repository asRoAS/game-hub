import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Platform } from './usePlatforms';
import APIClient, { FetchResponse } from '../services/api-clients';

export interface Game {
  id: number;
  name: string;
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number;
}

const apiClient = new APIClient<Game>('/games');

// interface FetchGamesResponse {
//   count: number;
//   results: Game[]
// }

// const useGames = (gameQuery: GameQuery) => useData<Game>(
//   '/games',
//   {
//     params: {
//       genres: gameQuery.genre?.id,
//       platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//     },
//   },
//   [gameQuery],
// );

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['/games', gameQuery],
  queryFn: () => apiClient
    .getAll({
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }),
});

export default useGames;
