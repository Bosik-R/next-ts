import styled from 'styled-components';
import { Image } from '../NewsCard/NewsCard.Elements';

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const DetailsImage = styled.img`
 max-width: 500px;
 width: 100%;
 max-height: 500px;
 height: 100%;
 margin-bottom: 1rem;
 border-radius: 0.75rem;
`;

export const Content = styled.p`
  margin-bottom: 2rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 425px){
    flex-direction: column;
  }
`;

export const LinkText = styled.span`
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  display: inline-block;

  &:hover{
    color: #00ce00;
  }
`;