import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths, GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { SingleNewsObjectProps } from '../../../data';
import { testNews } from '../../../data';

const NewsDetails: NextPage = () => {
	return <div>newsId</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		fallback: false,
		paths: testNews.map((page) => {
			return { params: { newsId: page.id } };
		}),
	};
};

interface Params extends ParsedUrlQuery {
	newsId: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
	const params = context.params as Params;

	return {
		props: {
			newsData: {
				id: params.newsId,
			},
		},
	};
};

export default NewsDetails;
