import React from 'react';
import Head from 'next/head';

const HeadContent: React.FC = () => {
	return (
		<Head>
			<title>DevNews</title>
			<meta name='description' content='News for developers' />
			<link rel='icon' href='/favicon/favicon.ico' />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
			<link
				href='https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap'
				rel='stylesheet'></link>
		</Head>
	);
};

export default HeadContent;
