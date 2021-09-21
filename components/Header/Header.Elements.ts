import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const Wrapper = styled.header`
	padding: 1rem 2rem;
	background-color: #140051;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	line-height: 1.5rem;
	padding: 0;
	margin: 0;
`;

export const HomeLink = styled.a`
	text-decoration: none;
	margin-right: 1.2rem;

	&:hover {
		color: #00d70b;
	}
`;

export const ChevronIcon = styled(ChevronRight)`
	height: 1.2rem;
	align-self: flex-end;
`;

export const ArticleTitle = styled.span`
	margin: 0 0.75rem;
`;
