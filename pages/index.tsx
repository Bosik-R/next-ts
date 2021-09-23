import type { NextPage } from 'next';
import NewsList from '../components/NewsList/NewsList';
import { testNews, NewsProps } from '../data';
import { GetStaticProps } from 'next';

interface Props {
	news: NewsProps;
}

const Home: NextPage<Props> = (props) => {
	console.log(props.news);
	console.log(testNews);

	return <NewsList news={props.news} />;
	//return <>test</>;
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
