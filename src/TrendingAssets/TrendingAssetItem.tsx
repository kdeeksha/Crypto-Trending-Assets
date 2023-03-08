import styled from "styled-components";
import AssetIcon from "../components/AssetIcon";

import AssetCard from "./components/AssetCard";
import AssetValue from "./components/AssetValue";
import MainAssetIcon from "./components/AssetIcon";
import Label from "./components/Label";
import { ASSET_TYPE, TrendingAssetItem as TrendingAssetItemType } from "../types/Assets";

const StyledPopularPairContainer = styled.div`
  background: #14172B;
  border-radius: 2rem;
	padding: 0.5rem;
	margin: 1.5rem auto 0.5rem;
	display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100px;
`;

const StyledItemContainer = styled.div`
	max-width: 18rem;
	width: 100%;
	position: relative;
`;

type PopularPairsProps = {
	pairs: ASSET_TYPE[]
}

type TrendingAssetItemProps = {
	data: TrendingAssetItemType
}

function PopularPairs({ pairs }: PopularPairsProps) {
	return <StyledPopularPairContainer>
		{pairs.map((type) => <AssetIcon key={type} type={type} />)}
	</StyledPopularPairContainer>
}

function TrendingAssetItem({ data }: TrendingAssetItemProps) {
	const { name, type, currentValue, percentage, tvl, pairs } = data;
	return <StyledItemContainer>
		<MainAssetIcon type={type} />
		<AssetCard>
			<Label label={name} />
			<AssetValue value={currentValue} percentage={percentage} />
			<Label label='Price' />
			<AssetValue value={tvl} />
			<Label label='TVL' />
			<PopularPairs pairs={pairs} />
			<Label label='Popular pairs' />
		</AssetCard>
	</StyledItemContainer>
}

export default TrendingAssetItem;