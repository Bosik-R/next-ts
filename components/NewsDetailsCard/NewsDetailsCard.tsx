import React, { useEffect } from 'react';
import {
	useSingleNewsContext,
	initialSingleNewsObjectData,
} from '../../contextAPI/ContextProvider';
import { SingleNewsObjectProps } from '../../types/types';
import * as S from './NewsDetailsCard.Elements';
import Link from 'next/link';

interface Props {
	singleNews: SingleNewsObjectProps;
}
const NewsDetailsCard: React.FC<Props> = ({ singleNews }) => {
	const { title, image, description, url, author } = singleNews;
	const { setSingleNewsContext } = useSingleNewsContext();

	useEffect(() => {
		setSingleNewsContext(singleNews);
		return () => {
			setSingleNewsContext(initialSingleNewsObjectData);
		};
	}, []);

	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<S.ContentWrapper>
				<S.ImageWrapper>
					<S.DetailsImage src={image} alt={title} />
				</S.ImageWrapper>
				<S.ContentCard>
					<S.Description>{description}</S.Description>
					<S.Author>author: {author}</S.Author>
					<S.LinksWrapper>
						<Link href='/' passHref>
							<S.GoBackLink>Go Back</S.GoBackLink>
						</Link>
						<S.OryArtLink href={url} target='_blank'>
							original article
						</S.OryArtLink>
					</S.LinksWrapper>
				</S.ContentCard>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};

export default NewsDetailsCard;
