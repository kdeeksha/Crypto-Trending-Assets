import styled from "styled-components";
import { getFormattedPercentage } from "../Fixtures";

const StyledDiv = styled.div`
	background: #14172B;
  border-radius: 1rem;
	border: 1px solid rgba(236, 240, 255, 0.1);
	padding: 0.5rem;
	display: flex;
	justify-content: center;
	position: relative
`;

const StyledValue = styled.p`
	font-weight: 600;
	font-size: 1rem;
	text-align: center;
	color: #ECF0FF;
	opacity: 0.9;
	margin:0;
`;

const StyledPercentage = styled.span`
	font-size: 0.75rem;
	font-weight: 600;
	margin:0;
	position: absolute;
	right: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
	color: ${(props: any) => props.value[0] === '-' ? '#FF4D4D' : '#00FFA3'};
`;

type Props = {
	value: string,
	percentage?: string
}

function AssetValue({ value, percentage }: Props) {
	const formattedPercentage = percentage && getFormattedPercentage(percentage);
	return <StyledDiv>
		<StyledValue>{value}</StyledValue>
		{
			formattedPercentage ?
				<StyledPercentage value={formattedPercentage}>{formattedPercentage}</StyledPercentage>
				: null
		}
	</StyledDiv>
}

export default AssetValue;