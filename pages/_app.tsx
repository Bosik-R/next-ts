import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { SingleNewsProvider } from '../contextAPI/ContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SingleNewsProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SingleNewsProvider>
	);
}
export default MyApp;
