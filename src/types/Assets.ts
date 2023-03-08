export enum ASSET_TYPE {
	BITCOIN = 'BIT',
	BINANCE = 'BIN',
	ETHEREUM = 'ETH',
	SOLANA = 'SOL',
	SHIBA = 'SHI'
}

export type TrendingAssetItem = {
	type: ASSET_TYPE,
	name: string,
	currentValue: string,
	percentage: string,
	tvl: string,
	pairs: ASSET_TYPE[]
}