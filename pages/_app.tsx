import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { SingleNewsProvider } from '../contextAPI/Context';

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
