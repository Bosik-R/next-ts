import React from 'react'
import { Props } from '../../pages/news/[newsId]'
import * as S from './NewsDetailsCard.Elements';

const NewsDetailsCard: React.FC<Props> = ({newsData}) => {
  const { title, image, description, url} = newsData;

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.DetailsImage src={image} alt={title}/>
      <S.Content>{description}</S.Content>
      <S.LinkWrapper>
        <S.LinkText>original text:</S.LinkText>
        <S.Link href={url}>{url}</S.Link>
      </S.LinkWrapper>
    </S.Wrapper>
  )
}

export default NewsDetailsCard;
