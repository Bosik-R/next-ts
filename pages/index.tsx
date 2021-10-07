import type { NextPage } from 'next';
import { useEffect } from 'react';
import NewsList from '../components/NewsList/NewsList';
import { NewsProps } from '../interfaces';
import { GetStaticProps } from 'next';
import { MongoClient } from 'mongodb';
import { initialSingleNewsObjectData, useGlobalContext } from '../contextAPI/globalContext';

const Home: NextPage<NewsProps> = ({ news }) => {
	const { setSingleNewsContext } = useGlobalContext();

	useEffect(() => {
		setSingleNewsContext(initialSingleNewsObjectData);
	}, []);

	return <NewsList news={news} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const client = await MongoClient.connect(`mongodb+srv://devNews:devNewsPassword@next-ts.ilfar.mongodb.net/devnews?retryWrites=true&w=majority`);
	const db = client.db();

	const newsCollection = db.collection('news');
	const news = await newsCollection.find().toArray();

	return {
		props: {
			news: news.map((n) => ({ ...n, _id: n._id.toString() })),
		},
		revalidate: 100,
	};
};

export default Home;
