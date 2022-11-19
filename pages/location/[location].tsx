import { GetServerSideProps } from "next"
import { useUserAgent } from "next-useragent"
import { Button, ImageCard } from "components"
import { FC, Fragment, useEffect, useState } from "react"
import { IHomePage } from "types"
import { getCharactersInLocation, getLocation } from "services"
import { FilterStyled, ContainerBox, LocationBox } from "styles/global"

const Location: FC<IHomePage> = ({ uaString, data }) => {
  const [characters, setCharacters] = useState([])
  const [activeStatus, setActiveStatus] = useState("")

  const regex = /\d+/g
  const { residents, id } = data
  const characterNo = residents.map((item: any) => item.match(regex).join(""))

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharactersInLocation(characterNo)
      setCharacters(data)
    }
    fetchCharacters()
  }, [])

  const CharacterStatus = () => {
    const uniqueStatus = [
      ...new Set(characters?.map((item: any) => item.status)),
    ]

    return (
      <Fragment>
        {uniqueStatus.map((item: any) => (
          <Button
            className={activeStatus === item ? "buttons active" : "buttons"}
            key={item}
            status={item}
            onClick={() =>
              activeStatus === item
                ? setActiveStatus("")
                : setActiveStatus(item)
            }
          >
            {item}
          </Button>
        ))}
      </Fragment>
    )
  }

  return (
    <ContainerBox>
      {residents.length >= 2 && (
        <Fragment>
          <FilterStyled>Filter by status:</FilterStyled>
          <CharacterStatus />
        </Fragment>
      )}
      <LocationBox>
        {residents.length >= 2 ? (
          characters
            ?.filter(
              source => source.status === activeStatus || activeStatus === ""
            )
            ?.map((item: any) => (
              <ImageCard key={item} item={item} locate={id} vertical />
            ))
        ) : residents.length >= 1 ? (
          <ImageCard item={characters} locate={id} vertical />
        ) : (
          <h1>No characters found</h1>
        )}
      </LocationBox>
    </ContainerBox>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { location } = context.query
  const numberPage = Number(location) || 1
  const data = await getLocation(numberPage)
  return {
    props: {
      uaString: context.req.headers["user-agent"],
      data,
    },
  }
}
export default Location
