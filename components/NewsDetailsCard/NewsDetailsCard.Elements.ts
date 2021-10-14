import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
	max-width: 65rem;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 0.7rem;
`;

export const Title = styled.h2`
	padding: 0.7rem;
	margin-bottom: 3rem;
	border-bottom: 0.2rem solid ${({ theme }) => theme.color.primary};

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

const sharedWrapperStyles = css`
	max-width: 31.25rem;
	width: 100%;
	border-radius: 0.75rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadowPrimary};
`;

export const ImageWrapper = styled.div`
	${sharedWrapperStyles};
	font-size: 0; // set on parent element to fix the 4px gap between div and img that represents whitespace for img

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}
`;

export const ContentCard = styled.div`
	${sharedWrapperStyles}
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
`;

export const Author = styled.p`
	margin: 0;
	padding: 1rem;
`;

export const LinksWrapper = styled.div`
	display: flex;
	align-items: space-around;
	width: 100%;
	padding: 1.5rem;

	@media (max-width: 430px) {
		flex-direction: column;
		align-items: center;
	}
`;

const sharedLinkStyles = css`
	position: relative;
	padding: 0.4rem 1rem;
	border-radius: 3rem;
	border: 1px solid ${({ theme }) => theme.color.border};
	background-color: transparent;
	transition: color 300ms ease;
	font-size: 1rem;

	@media (max-width: 430px) {
		width: 8.75rem;
		text-align: center;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		background-color: ${({ theme }) => theme.color.buttonHover};
		box-shadow: 0 0 1rem 0.125rem rgba(0, 100, 0, 1);
		opacity: 0;
		transition: opacity 500ms ease;
		z-index: -1;
	}

	&:hover {
		color: ${({ theme }) => theme.color.fontLight};

		&::after {
			opacity: 1;
		}
	}
`;
export const GoBackLink = styled.button`
	${sharedLinkStyles}
	margin-right: 1.5rem;
	cursor: pointer;

	@media (max-width: 430px) {
		margin: 0;
		margin-bottom: 1rem;
	}
`;

export const OryArtLink = styled.a`
	${sharedLinkStyles}
`;
