import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-clients';
import genres from '../data/genres';
import platforms from '../data/platforms';

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
  staleTime: 24 * 60 * 60 * 1000, // 24h
  initialData: { count: platforms.length, results: genres },
});

export default useGenres;
