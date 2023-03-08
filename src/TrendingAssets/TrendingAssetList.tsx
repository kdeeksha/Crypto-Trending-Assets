import TrendingAssetItem from "./TrendingAssetItem";

import styled from 'styled-components';

import { TrendingAssetItem as TrendingAssetItemType } from "../types/Assets";

const Grid = styled.div`
	display: flex;
	grid-gap: 5rem 2.5rem;
	flex-wrap: wrap;
	margin-top: 5rem;
`;

type Props = {
	list: TrendingAssetItemType[]
}

function TrendingAssetList({ list }: Props) {
	return <Grid>
		{list.map((asset: TrendingAssetItemType) => <TrendingAssetItem data={asset} key={asset.type} />)}
	</Grid>
}
export default TrendingAssetList;