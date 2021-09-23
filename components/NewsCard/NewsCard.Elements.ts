import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border: 1px solid #000c77;
	border-radius: 10px;
	background-color: #ffffff;
	cursor: pointer;
	`;

export const Image = styled.img`
	max-width: 26rem;
	width: 100%;
	max-height: 26rem;
	height: 100%;
	object-fit: cover;
	margin-bottom: 1rem;
	border-radius: 10px;
`;

export const Title = styled.p`
	font-size: 1.2rem;

		@media (max-width: 430px) {
			font-size: 1rem;
	}

`;
