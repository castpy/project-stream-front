interface List {
  id: string
  image: string
  title: string
  customer: {
    name: string
  }
}

export interface ListMovieProps {
  categorie: string
  movies: List[]
}