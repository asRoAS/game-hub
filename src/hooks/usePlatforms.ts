import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-clients';
import platforms from '../data/platforms';
import ms from 'ms';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), // 24h
  // initialData: { count: genres.length, results: genres },
  initialData: platforms,
});

export default usePlatforms;

// import platforms from '../data/platforms';

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// export default usePlatforms;
