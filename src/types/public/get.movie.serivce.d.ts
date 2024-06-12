export interface GetMovieServiceResponse {
  image: string;
  title: string;
  category: string[];
  description: string;
  customer: {
    id: string;
    name: string;
    avatar: string;
    youtube: string;
  };
}