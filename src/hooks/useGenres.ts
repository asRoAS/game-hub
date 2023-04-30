import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APIClient from '../services/api-clients';

export interface Genre {
  id: number;
  name: string;
  image_background: string
}

const apiClient = new APIClient<Genre>('/genres');

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  // initialData: { count: platforms.length, results: genres, next: null },
  initialData: genres,
});

export default useGenres;
