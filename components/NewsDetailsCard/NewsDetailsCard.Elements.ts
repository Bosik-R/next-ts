import styled from 'styled-components';
import { ChevronDoubleRight } from '@styled-icons/bootstrap/ChevronDoubleRight';
import { ChevronDoubleLeft } from '@styled-icons/bootstrap/ChevronDoubleLeft';

export const Wrapper = styled.article`
	max-width: 64rem;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h2`
	padding: 0.7rem;
	margin-bottom: 3rem;
	border-bottom: 0.2rem solid #140051;

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	align-items: stretch;
	margin-bottom: 2rem;
	gap: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const ContentCard = styled.div`
	max-width: 500px;
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 0.75rem;
	overflow: hidden;
	align-self: stretch;
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.43);
	font-size: 0; // set on parent element to fix the 4px gap between div and img that represents whitespace for img
`;

export const DetailsImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const Description = styled.p`
	text-indent: 1rem;
	text-align: justify;
	text-justify: inter-word;
	padding: 1rem;
	margin: 0;
	font-size: 1rem;
`;

export const Author = styled.span`
	margin-right: 1rem;
`;

export const LinkWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1rem;
	padding: 1rem;
`;

export const IconLeft = styled(ChevronDoubleRight)`
	height: 1rem;
	color: #00ce00;
`;

export const IconRight = styled(ChevronDoubleLeft)`
	height: 1rem;
	color: #00ce00;
`;

export const Link = styled.a`
	padding: 0 0.5rem 0.2rem 0.5rem;
	text-align: center;

	&:hover {
		color: #00ce00;
	}
`;
