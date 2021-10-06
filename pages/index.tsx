import type { NextPage } from 'next';
import NewsList from '../components/NewsList/NewsList';
import { NewsProps, SingleNewsObjectProps } from '../data';
import { GetStaticProps } from 'next';
import { MongoClient } from 'mongodb';

const Home: NextPage<NewsProps> = ({ news }) => {
	return <NewsList news={news} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const client = await MongoClient.connect(`mongodb+srv://devNews:devNewsPassword@next-ts.ilfar.mongodb.net/devnews?retryWrites=true&w=majority`);
	const db = client.db();

	const newsCollection = db.collection('news');
	const news = await newsCollection.find().toArray();

	const mapedNews = news.map((n) => ({
		id: n._id.toString(),
		title: n.title,
		author: n.author,
		image: n.image,
		description: n.description,
		url: n.url,
	}));

	return {
		props: {
			news: mapedNews,
		},
		revalidate: 3600,
	};
};

export default Home;
