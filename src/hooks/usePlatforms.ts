// import { useQuery } from '@tanstack/react-query';
// import genres from '../data/genres';
// import APIClient from '../services/api-clients';

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const apiClient = new APIClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useQuery({
//   queryKey: ['platforms'],
//   queryFn: apiClient.getAll,
//   staleTime: 24 * 60 * 60 * 1000, // 24h
//   initialData: { count: genres.length, results: genres },
// });

// export default usePlatforms;

import platforms from '../data/platforms';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
