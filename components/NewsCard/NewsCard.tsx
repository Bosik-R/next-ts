import React from 'react';
import * as S from './NewsCard.Elements';
import { useRouter } from 'next/dist/client/router';
import { SingleNewsObjectProps } from '../../data';

const NewsCard: React.FC<SingleNewsObjectProps> = ({ id, title, image }) => {
	const router = useRouter();

	const showNewsDetails = () => {
		router.push(`/news/${id}`);
	};

	return (
		<S.Wrapper onClick={showNewsDetails}>
			<S.Title>{title}</S.Title>
			<S.ImageWrapper>
				<S.Image src={image} alt={title} />
			</S.ImageWrapper>
		</S.Wrapper>
	);
};

export default NewsCard;
