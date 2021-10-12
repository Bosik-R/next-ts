import React, { Fragment } from 'react';
import * as S from './Header.Elements';
import Link from 'next/link';
import { useSingleNewsContext } from '../../contextAPI/ContextProvider';

const Header: React.FC = () => {
	const { singleNewsContext } = useSingleNewsContext();

	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.Title>DevNews</S.Title>
				<S.Description>the best source of information</S.Description>
			</S.TitleWrapper>
			<S.Navigation>
				<Link href='/' passHref>
					<S.HomeLink>News</S.HomeLink>
				</Link>
				{singleNewsContext.title.length > 0 && (
					<Fragment>
						<S.ChevronIcon />
						<S.ArticleTitle>{singleNewsContext.title}</S.ArticleTitle>
					</Fragment>
				)}
			</S.Navigation>
		</S.Wrapper>
	);
};

export default Header;
