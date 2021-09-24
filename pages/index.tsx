import type { NextPage } from 'next';
import NewsList from '../components/NewsList/NewsList';
import { testNews, NewsProps, SingleNewsObjectProps } from '../data';
import { GetStaticProps } from 'next';

const Home: NextPage<NewsProps> = (props) => {

	return <NewsList news={props.news} />;
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			news: testNews,
		},
		revalidate: 3600,
	};
};

export default Home;
