import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);
  //   console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first
    ? (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    ) : null;
}

export default GameTrailer;
