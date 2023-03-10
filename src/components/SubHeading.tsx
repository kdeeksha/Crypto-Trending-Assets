import styled from 'styled-components';

const FlexBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2.5rem;
	color: #ECF0FF;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin:0 0 0 1rem;
`;

type Props = {
	title: string,
	icon: string
}

function SubHeading({ title = '', icon = '' }: Props) {
	return <FlexBox>
		<img alt="tending" src={icon} width="16px" height="16px" />
		<Title>{title}</Title>
	</FlexBox>
}

export default SubHeading;