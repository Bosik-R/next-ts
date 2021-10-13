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
	background-color: ${({ theme }) => theme.color.primary};
`;

export const TitleShape = styled.div`
	position: relative;
	width: 45%;
	height: 6rem;
	margin: 0;
	background-color: ${({ theme }) => theme.color.secondary};

	&::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 0;
		bottom: 0;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 6rem 9.5rem 0 0;
		border-color: ${({ theme }) => theme.color.secondary} transparent transparent transparent;
	}

	@media (max-width: 430px) {
		width: 22%;
		height: 3rem;

		&::after {
			border-width: 3rem 5rem 0 0;
		}
	}
`;

export const Title = styled.h1`
	position: absolute;
	padding: 0;
	margin: 0;
	top: 0.7rem;
	right: -5rem;
	z-index: 1;
	font-family: 'Press Start 2P', cursive;

	@media (max-width: 768px) {
		font-size: 2.2rem;
		right: -4.5rem;
	}

	@media (max-width: 430px) {
		top: 0.5rem;
		right: -2.3rem;
		font-size: 0.9em;
	}
`;

export const Description = styled.span`
	align-self: flex-end;
	font-size: 1.5rem;
	margin: 0;
	padding: 0 0 0.7rem 4rem;

	@media (max-width: 768px) {
		font-size: 1.4rem;
	}

	@media (max-width: 430px) {
		font-size: 0.9rem;
		padding: 0 0 0.3rem 2.5rem;
	}
`;

export const Breadcrumbs = styled.nav`
	width: 85%;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	line-height: 1.5rem;
	padding: 1rem;
	margin: 1rem 0;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 1rem;

	@media (max-width: 430px) {
		width: 100%;
		border-radius: 0;
		font-size: 1rem;
		line-height: 1rem;
		padding: 0.6rem 0.8rem;
	}
`;

export const HomeLink = styled.a`
	margin-right: 0.75rem;

	&:hover {
		color: ${({ theme }) => theme.color.homeLinkHover};
	}

	@media (max-width: 1024px) {
		font-size: 1.1rem;
	}

	@media (max-width: 425px) {
		font-size: 0.8rem;
	}
`;

export const ChevronIcon = styled(ChevronRight)`
	height: 1.2rem;

	@media (max-width: 430px) {
		height: 0.8rem;
	}
`;

export const ArticleTitle = styled.span`
	margin: 0 0.75rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	@media (max-width: 1024px) {
		font-size: 1.1rem;
	}

	@media (max-width: 425px) {
		font-size: 0.8rem;
	}
`;
