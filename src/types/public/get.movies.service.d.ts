interface Movie {
  id: string;
  image: string;
  title: string;
  customer: {
    name: string;
  }
}

export interface MoviesServiceResponse {
  category: string;
  movies: Movie[];
}
