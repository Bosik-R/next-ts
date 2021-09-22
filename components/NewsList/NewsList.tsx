import React, {useEffect} from 'react'
import styled from 'styled-components';
import news from '../../data.json';


// type News = {
//   id: number;
//   title: string;
//   description: string;
//   url: Array<string>;
// }

const Wrapper = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: left;
  flex-wrap: wrap;
`;

const NewsList = () => {

  console.log(news);
  
  // useEffect(() => {
    

  // }, [])

  return (
    <Wrapper>
      
      
    </Wrapper>
  )
}

export default NewsList
