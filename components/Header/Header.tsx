import React from 'react';
import * as S from './Header.Elements';
import Link from 'next/link';
import { useSingleNewsContext } from '../../contextAPI/ContextProvider';

const Header: React.FC = () => {
	const { singleNewsContext } = useSingleNewsContext();

	return (
		<S.Wrapper>
			<S.Title>DevNews the best source of information</S.Title>
			<S.Navigation>
				<Link href='/' passHref>
					<S.HomeLink>News</S.HomeLink>
				</Link>
				<S.ChevronIcon />
				<S.ArticleTitle>{singleNewsContext.title}</S.ArticleTitle>
			</S.Navigation>
		</S.Wrapper>
	);
};

export default Header;
