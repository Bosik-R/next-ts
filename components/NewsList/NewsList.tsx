import React from 'react';
import styled from 'styled-components';
import NewsCard from '../NewsCard/NewsCard';
import { NewsProps } from '../../types/types';

const Wrapper = styled.section`
	display: flex;
	gap: 2rem;
	justify-content: center;
	flex-wrap: wrap;
`;

const NewsList: React.FC<NewsProps> = ({ news }) => {
	return (
		<Wrapper>
			{news.map((data) => (
				<NewsCard key={data._id} {...data} />
			))}
		</Wrapper>
	);
};

export default NewsList;
