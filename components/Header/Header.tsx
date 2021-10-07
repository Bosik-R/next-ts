import React from 'react';
import * as S from './Header.Elements';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useGlobalContext, GlobalContextProps } from '../../contextAPI/globalContext';

const Header: React.FC<GlobalContextProps> = () => {
	const { singleNewsContext } = useGlobalContext();
	const router = useRouter();
	const artId = router.query.newsId;
	console.log(artId);

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
