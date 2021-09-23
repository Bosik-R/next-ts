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

	@media (max-width: 430px){
		font-size: 1.5rem;
		line-height: 1.5rem;
	}

`;

export const Navigation = styled.nav`
	display: flex;
	align-items: baseline;
	font-size: 1.5rem;
	line-height: 1.5rem;
	padding: 0;
	margin: 0;

	@media (max-width: 430px){
		font-size: 1rem;
		line-height: 1rem;
	}
`;

export const HomeLink = styled.a`
	margin-right: 0.75rem;

	&:hover {
		color: #00d70b;
	}
`;

export const ChevronIcon = styled(ChevronRight)`
	height: 1.2rem;
`;

export const ArticleTitle = styled.span`
	margin: 0 0.75rem;
`;
