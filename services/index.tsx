import axios from "axios"

export const getAllLocation = (page = 1) => {
  const data = axios
    .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
    .then(res => res.data)

  return data
}

export const getLocation = (number = 1) => {
  const data = axios
    .get(`https://rickandmortyapi.com/api/location/${number}`)
    .then(res => res.data)

  return data
}

export const getCharactersInLocation = (number = 1) => {
  const data = axios
    .get(`https://rickandmortyapi.com/api/character/${number}`)
    .then(res => res.data)

  return data
}
