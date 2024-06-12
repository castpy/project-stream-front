import MovieTemplate from '@/templates/Movie';
import NotFoundTemplate from '@/templates/NotFound';
import React from 'react'
import { isUuid } from "uuidv4";


const MoviePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      {isUuid(params.id)
        ? <MovieTemplate id={params.id}/>
        : <NotFoundTemplate />}
    </>
  )
}

export default MoviePage