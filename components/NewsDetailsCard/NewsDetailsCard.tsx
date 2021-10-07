import React from 'react';
import { SingleNewsObjectProps } from '../../interfaces';
import * as S from './NewsDetailsCard.Elements';

interface Props {
	singleNews: SingleNewsObjectProps;
}
const NewsDetailsCard: React.FC<Props> = ({ singleNews }) => {
	const { title, image, description, url, author } = singleNews;

	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<S.ContentWrapper>
				<S.ContentCard>
					<S.DetailsImage src={image} alt={title} />
				</S.ContentCard>
				<S.ContentCard>
					<S.Description>{description}</S.Description>
					<S.LinkWrapper>
						<S.Author>author: {author}</S.Author>
						<S.IconLeft />
						<S.Link href={url}>original article</S.Link>
						<S.IconRight />
					</S.LinkWrapper>
				</S.ContentCard>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};

export default NewsDetailsCard;
