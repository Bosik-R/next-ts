import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
`;

export const Content = styled.div`
	width: 100%;
	padding: 0 1rem;
	background-color: #e4e4e4;

	@media (min-width: 1024px) {
		width: 90%;
		margin: 0 auto;
	}
`;
