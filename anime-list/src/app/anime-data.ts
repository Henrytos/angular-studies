export interface AnimeData {
  title: string,
  duration: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  popularity: number;
  rank: number;
  rating: string;
  score: number;
}
