import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const Wrapper = styled.header`
	color: ${({ theme }) => theme.color.fontLight};
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const TitleWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

export const Title = styled.h1`
	width: 50%;
	margin: 0;
	padding: 0.5rem 3rem 2rem 1rem;
	background-color: red;
	text-align: right;
	clip-path: polygon(0 0, 100% 0, calc(100% - 10vh) 100%, 0 100%);

	@media (max-width: 768px) {
		font-size: 1.5rem;
		line-height: 1.5rem;
	}

	@media (max-width: 430px) {
		font-size: 1.5rem;
		line-height: 1.5rem;
		padding: 0.2rem 3.5rem 1.5rem 0.3rem;
	}
`;

export const Description = styled.p`
	width: calc(50% + 10vh);
	align-self: stretch;
	font-size: 1.5rem;
	background-color: ${({ theme }) => theme.color.primary};
	margin: 0;
	margin-left: -10vh;
	padding: 2.5rem 1rem 0.5rem 3rem;
	vertical-align: text-bottom;

	@media (max-width: 768px) {
		font-size: 1.2em;
		padding: 1.5rem 1rem 0.5rem 3rem;
	}

	@media (max-width: 510px) {
		font-size: 0.7em;
		padding: 1.5rem 1rem 0.2rem 3.5rem;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	line-height: 1.5rem;
	padding: 1rem 0;
	margin: 1rem 0;
	width: 90%;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 1rem;

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
