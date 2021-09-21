import React from 'react';
import * as S from './Header.Elements';
import Link from 'next/link';

const title: string = ' next.js and typescript how to use it';

const Header = () => {
	return (
		<S.Wrapper>
			<S.Title>DevNew the best source of information</S.Title>
			<S.Navigation>
				<Link href='/' passHref>
					<S.HomeLink>news</S.HomeLink>
				</Link>
				<S.ChevronIcon />
				<S.ArticleTitle>{title}</S.ArticleTitle>
			</S.Navigation>
		</S.Wrapper>
	);
};

export default Header;
