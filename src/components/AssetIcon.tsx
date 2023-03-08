import { ASSET_TYPE } from "../types/Assets";

type Props = {
	type: ASSET_TYPE,
	width?: string,
	height?: string
}

function AssetIcon({ type, width = "22px", height = "22px" }: Props) {
	const imgAttributes = {
		width,
		height
	};

	switch (type) {
		case ASSET_TYPE.BITCOIN:
			return <img alt="bitcoin" src={process.env.PUBLIC_URL + '/images/bitcoin.svg'} {...imgAttributes} />;
		case ASSET_TYPE.ETHEREUM:
			return <img alt="ethereum" src={process.env.PUBLIC_URL + '/images/ethereum.svg'} {...imgAttributes} />;
		case ASSET_TYPE.BINANCE:
			return <img alt="binance" src={process.env.PUBLIC_URL + '/images/binance.svg'} {...imgAttributes} />;
		case ASSET_TYPE.SOLANA:
			return <img alt="solana" src={process.env.PUBLIC_URL + '/images/solana.svg'} {...imgAttributes} />;
		case ASSET_TYPE.SHIBA:
			return <img alt="shiba" src={process.env.PUBLIC_URL + '/images/shiba.svg'} {...imgAttributes} />;
		default: return null;
	}
}

export default AssetIcon;