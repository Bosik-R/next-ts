import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 18rem;
	height: 21rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	border: none;
	border-radius: 1rem;
	background-color: #ffffff;
	cursor: pointer;
	flex-shrink: 0;
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.43);

	@media (max-width: 425) {
		width: 90%;
	}
`;

export const Title = styled.p`
	font-size: 1.2rem;
	height: 5rem;

	@media (max-width: 430px) {
		font-size: 1rem;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 10rem;
	overflow: hidden;
	margin-bottom: 1rem;
	border-radius: 1rem;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
