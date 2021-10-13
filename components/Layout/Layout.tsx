import React from 'react';
import HeadContent from '../HeadContent/HeadContent';
import Header from '../Header/Header';
import * as S from './Layout.Elements';
import { GlobalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<HeadContent />
			<S.Wrapper>
				<GlobalStyles />
				<Header />
				<S.Content>{children}</S.Content>
			</S.Wrapper>
		</ThemeProvider>
	);
};

export default Layout;
