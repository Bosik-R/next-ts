import React from 'react';
import * as S from './Header.Elements';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { testNews } from '../../data';

const Header = () => {
	const router = useRouter();
	const artId = router.query.newsId;

	let title = '';

	if (artId) {
		const filtered = testNews.filter((news) => news.id === artId.toString());
		title = filtered[0].title;
	}

	return (
		<S.Wrapper>
			<S.Title>DevNews the best source of information</S.Title>
			<S.Navigation>
				<Link href='/' passHref>
					<S.HomeLink>News</S.HomeLink>
				</Link>
				<S.ChevronIcon />
				<S.ArticleTitle>{artId ? title : ''}</S.ArticleTitle>
			</S.Navigation>
		</S.Wrapper>
	);
};

export default Header;
