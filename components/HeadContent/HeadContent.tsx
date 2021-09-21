import React from 'react';
import Head from 'next/head';

const HeadContent: React.FC = () => {
	return (
		<Head>
			<title>DevNews</title>
			<meta name='description' content='News for developers' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

export default HeadContent;
