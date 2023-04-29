import { useQuery } from '@tanstack/react-query';
import apiClients, { FetchResponse } from '../services/api-clients';
import genres from '../data/genres';
import platforms from '../data/platforms';

export interface Genre {
  id: number;
  name: string;
  image_background: string
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClients.get<FetchResponse<Genre>>('/genres')
    .then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  initialData: { count: platforms.length, results: genres },
});

export default useGenres;
