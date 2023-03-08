import React from "react";
import styled from "styled-components";

import SubHeading from "../components/SubHeading";
import TrendingAssetList from "./TrendingAssetList";

import { trendingAssetList } from "./Fixtures";

const StyledDiv = styled.div`
	max-width: 125rem;
	margin: auto;
	padding: 2.5rem 1.75rem;
	min-height: 100vh;
	height: 100%;
	background-color: #14172B;
`;

function TrendingAssets() {
	return <StyledDiv>
		<SubHeading
			title="Trending Assets"
			icon={process.env.PUBLIC_URL + '/images/activity.svg'}
		/>
		<TrendingAssetList list={trendingAssetList} />
	</StyledDiv>
}

export default TrendingAssets;