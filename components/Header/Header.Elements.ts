import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const Wrapper = styled.header`
	padding: 1rem 2rem;
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.fontLight};
	display: flex;
	flex-direction: column;
	align-items: stretch;

	@media (max-width: 1024px) {
		padding: 1rem;
	}
`;

export const Title = styled.h1`
	text-align: center;

	@media (max-width: 430px) {
		font-size: 1.5rem;
		line-height: 1.5rem;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	line-height: 1.5rem;
	padding: 0;
	margin: 0;

	@media (max-width: 430px) {
		font-size: 1rem;
		line-height: 1rem;
	}
`;

export const HomeLink = styled.a`
	margin-right: 0.75rem;

	@media (min-width: 1030px) {
		margin-left: 2rem;
	}

	&:hover {
		color: ${({ theme }) => theme.color.homeLinkHover};
	}
`;

export const ChevronIcon = styled(ChevronRight)`
	height: 1.5rem;
	padding-top: 0.3rem;

	@media (max-width: 430px) {
		height: 1rem;
	}
`;

export const ArticleTitle = styled.span`
	margin: 0 0.75rem;
`;
