import React from 'react';
import HeadContent from '../HeadContent/HeadContent';
import Header from '../Header/Header';
import * as S from './Layout.Elements';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<S.Wrapper>
			<HeadContent />
			<Header />
			<S.Content>{children}</S.Content>
		</S.Wrapper>
	);
};

export default Layout;
