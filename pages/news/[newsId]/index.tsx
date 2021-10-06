import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import NewsDetailsCard from '../../../components/NewsDetailsCard/NewsDetailsCard';
import { SingleNewsObjectProps, testNews } from '../../../data';
import { MongoClient, ObjectId } from 'mongodb';

interface Props {
	singleNews: SingleNewsObjectProps;
}

const NewsDetails: NextPage<Props> = ({ singleNews }) => {
	console.log(singleNews);
	return <div>hello</div>;
	//return <NewsDetailsCard singleNews={singleNews} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const client = await MongoClient.connect(`mongodb+srv://devNews:devNewsPassword@next-ts.ilfar.mongodb.net/devnews?retryWrites=true&w=majority`);
	const db = client.db();
	const newsCollection = db.collection('news');
	const news = await newsCollection.find().toArray();
	const mapedNews = news.map((n) => {
		return { params: { newsId: n._id.toString() } };
	});

	return {
		fallback: false,
		paths: mapedNews,
	};
};

interface Params extends ParsedUrlQuery {
	newsId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
	const paramsId = context.params as Params;

	const client = await MongoClient.connect(`mongodb+srv://devNews:devNewsPassword@next-ts.ilfar.mongodb.net/devnews?retryWrites=true&w=majority`);
	const db = client.db();
	const newsCollection = db.collection('news');
	const singleNews = await newsCollection.findOne({ _id: new ObjectId(paramsId.newsId) });
	console.log('getStaticProps', singleNews);

	return {
		props: {
			singleNews: { ...singleNews },
		},
	};
};

export default NewsDetails;
