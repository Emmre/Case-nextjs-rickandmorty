import Link from "next/link"
import React, { FC, Fragment } from "react"
import {
  CharacterDetailStyled,
  ImageBox,
  ImageCardStyled,
  InfoBox,
  LinkStyled,
  StatusBox,
} from "./styled"

interface IImageCard {
  item: any
  characterDetail?: boolean
  locate?: any
  vertical?: boolean
  horizontal?: boolean
}

const ListCard = ({ item, locate, characterDetail }: any) => {
  return (
    <LinkStyled
      href={`/character/${item.id}-${locate}`}
      className={`${characterDetail ? "disabled" : "list-card"}`}
    >
      <div className='list-card'>
        <div className='img-box'>
          <img src={item.image} alt={item.name} />
        </div>
        <div className='info-box'>
          <h1 className="title">{item.name}</h1>
          <h2 className="species">
            {item.status} - {item?.species}
          </h2>
          <h3 className="type">
            {item?.name} - {item?.origin?.name}
          </h3>
        </div>
      </div>
    </LinkStyled>
  )
}

const VerticalCard = ({ item, locate, characterDetail }: any) => {
  return (
    <LinkStyled
      status={item.status}
      href={`/character/${item.id}-${locate} `}
      className={`${characterDetail ? "disabled" : ""}`}
      isCharacterDetail={characterDetail}
    >
      <div className='vertical-card'>
        <div className='img-box'>
          <img src={item.image} alt={item.name} />
        </div>
        <div className='info-box'>
          <h1 className='title'>{item.name}</h1>
          <div className='status'>
            <p className='dot'></p>
            <h2 className='species'>
              {item.status} - {item?.species}
            </h2>
            {characterDetail && (
              <h2 className='type'>
                {item?.type} - {item?.gender}
              </h2>
            )}
          </div>
          {characterDetail && (
            <h3 className='location'>{item?.origin?.name}</h3>
          )}
        </div>
      </div>
    </LinkStyled>
  )
}

const ImageCard: FC<IImageCard> = ({
  item,
  characterDetail,
  locate,
  vertical,
  horizontal,
}) => {
  return (
    <Fragment>
      {vertical && (
        <VerticalCard
          item={item}
          locate={locate}
          characterDetail={characterDetail}
        />
      )}
      {horizontal && (
        <ListCard
          item={item}
          locate={locate}
          characterDetail={characterDetail}
        />
      )}
    </Fragment>
  )
}

export default ImageCard
