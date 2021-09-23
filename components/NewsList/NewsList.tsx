import React, { useEffect } from 'react';
import styled from 'styled-components';
import NewsCard from '../NewsCard/NewsCard';

const Wrapper = styled.section`
	display: flex;
	gap: 2rem;
	justify-content: left;
	flex-wrap: wrap;
`;

const NewsList = ({ news }) => {
	return (
		<Wrapper>
			{news.map((n) => (
				<NewsCard key={n.id} {...n} />
			))}
		</Wrapper>
	);
};

export default NewsList;
