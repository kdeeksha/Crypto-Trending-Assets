import styled from "styled-components";
import AssetIcon from "./AssetIcon";


import { ASSET_TYPE } from "../types/Assets";

type Props = {
	type: ASSET_TYPE
}

const getLinearBackground = (type: ASSET_TYPE) => {
	switch (type) {
		case ASSET_TYPE.ETHEREUM:
			return `linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)`;
		case ASSET_TYPE.SOLANA:
			return `linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)`;
		case ASSET_TYPE.SHIBA:
			return `linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)`;
		case ASSET_TYPE.BINANCE:
		case ASSET_TYPE.BITCOIN:
		default:
			return `linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)`;
	}
}

const StyledDiv = styled.div`
	width: 6.25rem;
	height: 6.25rem;
	border: 1px solid rgba(236, 240, 255, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: ${(props: Props) => getLinearBackground(props.type)}
`;

function AssetIconWithBackdrop({ type }: Props) {
	return <StyledDiv type={type}>
		<AssetIcon type={type} width="50px" height="50px" />
	</StyledDiv>;
}

export default AssetIconWithBackdrop;