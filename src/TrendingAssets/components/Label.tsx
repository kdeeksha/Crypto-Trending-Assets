import styled from 'styled-components';

const StyledLabel = styled.p`
	font-weight: 600;
	font-size: 0.75rem;
	text-align: center;
	color: #737BAE;
	opacity: 0.9;
`;

type Props = {
	label: string
}

function Label({ label }: Props) {
	return <StyledLabel>{label}</StyledLabel>
}

export default Label;