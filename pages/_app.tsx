import React, { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { GlobalContext, initialSingleNewsObjectData } from '../contextAPI/globalContext';
import { SingleNewsObjectProps } from '../interfaces';

function MyApp({ Component, pageProps }: AppProps) {
	const [singleNewsContext, setSingleNewsContext] = useState<SingleNewsObjectProps>(initialSingleNewsObjectData);
	return (
		<GlobalContext.Provider value={{ singleNewsContext, setSingleNewsContext }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalContext.Provider>
	);
}
export default MyApp;
