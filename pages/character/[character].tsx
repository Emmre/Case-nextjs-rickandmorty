import { GetServerSideProps } from "next"
import { useUserAgent } from "next-useragent"
import { ImageCard } from "components"
import { FC, Fragment, useEffect, useState } from "react"
import { IHomePage } from "types"
import { getCharactersInLocation, getLocation } from "services"
import { CharacterContainer, CharacterBox, FlexBox } from "styles/global"
import { Grid } from "@mui/material"

const Details: FC<IHomePage> = ({
  uaString,
  getCharacterData,
  getLocationData,
}) => {
  const [characters, setCharacters] = useState([])
  const regex = /\d+/g
  const { residents, id } = getLocationData
  const characterNo = residents.map((item: any) => item.match(regex).join(""))

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharactersInLocation(characterNo)
      setCharacters(data)
    }
    fetchCharacters()
  }, [])

  return (
    <CharacterContainer>
      <Grid container spacing={6} columns={{ sm: 4, md: 12 }}>
        <Grid item xs={6} className='big-card'>
          <ImageCard item={getCharacterData} characterDetail vertical />
        </Grid>
        <Grid item xs={6} className='right-card'>
          {characters.length > 2 && (
            <>
              {characters?.map((item: any) => (
                <ImageCard key={item.id} locate={id} item={item} horizontal />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </CharacterContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { character } = context.query
  const getCharacterNo = Number(character?.toString().split("-")[0])
  const getLocationNo = Number(character?.toString().split("-")[1])
  const numberPage = Number(getCharacterNo) || 1
  const getCharacterData = await getCharactersInLocation(numberPage)
  const getLocationData = await getLocation(getLocationNo)
  return {
    props: {
      uaString: context.req.headers["user-agent"],
      getCharacterData,
      getLocationData,
    },
  }
}
export default Details
