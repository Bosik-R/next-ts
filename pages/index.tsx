import type { NextPage } from 'next';
import NewsList from '../components/NewsList/NewsList';
import { news } from '../data';

const Home: NextPage = () => {
	return <NewsList news={news} />;
};

export default Home;
