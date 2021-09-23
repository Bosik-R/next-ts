import type { NextPage } from 'next';
import NewsList from '../components/NewsList/NewsList';
import { news, NewsProps } from '../data';

const Home: NextPage<NewsProps> = () => {
	return <NewsList news={news} />;
};

export default Home;
