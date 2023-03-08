import styled from "styled-components";

import AssetIconWithBackdrop from "../../components/AssetIconWithBackdrop";

import { ASSET_TYPE } from "../../types/Assets";

const StyledAssetIcon = styled.div`
	position: absolute;
	top: -17%;
	left: 50%;
	transform: translateX(-50%);
	background: #14172B;
	padding: 0.75rem;
	border-radius: 50%;
`;

type Props = {
	type: ASSET_TYPE
}

function AssetIcon({ type }: Props) {
	return <StyledAssetIcon>
		<AssetIconWithBackdrop type={type} />
	</StyledAssetIcon>
}

export default AssetIcon;