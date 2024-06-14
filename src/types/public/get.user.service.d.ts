export interface GetUserService {
  customer: {
    name: string;
    avatar: string;
    youtube: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
  movies: {
    category: string;
    movies: {
      id: string;
      image: string;
      title: string;
      customer: {
        name: string;
      };
    }[];
  }[];
}
