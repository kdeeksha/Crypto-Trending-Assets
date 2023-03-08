import styled from "styled-components";

import type { ReactNode } from "react";

const StyledCard = styled.div`
  border-radius: 1rem;
  border: 1px solid rgba(236, 240, 255, 0.1);
  background: linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%);
  padding:  4.25rem 1.5rem 1.5rem;
`;

type Props = {
	children: ReactNode
}

function AssetCard({ children }: Props) {
	return <StyledCard>
		{children}
	</StyledCard>
}

export default AssetCard;