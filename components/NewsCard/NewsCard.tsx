import React from 'react';
import * as S from './NewsCard.Elements';

const NewsCard = ({ id, title, image }) => {
	return (
		<S.Wrapper>
			<S.Image src={image} alt={title} />
			<S.Title>{title}</S.Title>
		</S.Wrapper>
	);
};

export default NewsCard;
