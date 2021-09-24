import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import NewsDetailsCard from '../../../components/NewsDetailsCard/NewsDetailsCard';
import { NewsProps, testNews } from '../../../data';

const NewsDetails: NextPage<NewsProps> = (props) => {
	
	return <NewsDetailsCard news={props.news}/>;
};

export const getStaticPaths: GetStaticPaths = async () => {
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
	const paramsId = context.params as Params;

	const newsData = testNews.filter(news => news.id === paramsId.newsId);

	return {
		props: {
			news: {...newsData[0]}
		},
	};
};

export default NewsDetails;
