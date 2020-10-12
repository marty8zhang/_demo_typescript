/*
 * An intersection type combines multiple types into one.
 * Intersection types describe the "and (&)" relationship, which is useful for composition;
 * whereas union types describe the "or (|)" relationship, which is useful for generalisation.
 */
interface Response {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & Response;
type ArtistsResponse = ArtistsData & Response;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.success) {
    console.log(response.artists);
    return;
  }

  if (response.error) {
    console.error(response.error.message);
  } else {
    console.error('Unknown error.');
  }
};
