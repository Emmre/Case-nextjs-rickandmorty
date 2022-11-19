import { useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import { useUserAgent } from "next-useragent"
import { FC } from "react"
import { IHomePage } from "types"
import { getAllLocation } from "services"
import { Card, PaginationComp } from "components"
import { useRouter } from "next/router"
import { Fragment } from "react"
import { CardBox, Grid, ContainerBox } from "styles/global"
import Link from "next/link"

const Home: FC<IHomePage> = ({ uaString }) => {
  const [data, setData] = useState([])
  const { isMobile } = useUserAgent(uaString)
  const router = useRouter()
  const { page } = router.query
  const numberPage = Number(page) || 1

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllLocation(numberPage)
      setData(data)
    }
    fetchData()
  }, [page])

  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(`/?page=${value}`)
  }
  const { results = [], info = {} } = data

  return (
    <Fragment>
      <ContainerBox>
        <Card>
          <Grid>
            {results.map(item => (
              <Link href={`location/${item.id}`} key={item.id}>
                <CardBox>
                  <h1>{item.name}</h1>
                  <div>
                    <h2>Type</h2>
                    <span>: {item.type}</span>
                  </div>
                  <div>
                    <h2>Dimension</h2>
                    <span>: {item.dimension}</span>
                  </div>
                  <div>
                    <h2>Resident count</h2>
                    <span>: {item.residents.length}</span>
                  </div>
                </CardBox>
              </Link>
            ))}
          </Grid>
        </Card>
        <PaginationComp
          count={info.pages}
          page={numberPage}
          onChange={(e, pageNumber) => handleChange(e, pageNumber)}
        />
      </ContainerBox>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      uaString: context.req.headers["user-agent"],
    },
  }
}
export default Home
