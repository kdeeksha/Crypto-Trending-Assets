import { ASSET_TYPE } from "../types/Assets";

export const trendingAssetList = [
    {
        type: ASSET_TYPE.BITCOIN,
        name: 'Bitcoin (BTC)',
        currentValue: '$31,812.80',
        percentage: '10',
        tvl: '$60,000',
        pairs: [ASSET_TYPE.SOLANA, ASSET_TYPE.ETHEREUM, ASSET_TYPE.BINANCE]
    },
    {
        type: ASSET_TYPE.SOLANA,
        name: 'Solana (SOL)',
        currentValue: '$32.83',
        percentage: '-12.32',
        tvl: '$60,000',
        pairs: [ASSET_TYPE.BITCOIN, ASSET_TYPE.ETHEREUM, ASSET_TYPE.BINANCE]
    },
    {
        type: ASSET_TYPE.ETHEREUM,
        name: 'Ethereum (ETH)',
        currentValue: '$1466.45',
        percentage: '-11.93',
        tvl: '$60,000',
        pairs: [ASSET_TYPE.SOLANA, ASSET_TYPE.BITCOIN, ASSET_TYPE.BINANCE]
    },
    {
        type: ASSET_TYPE.BINANCE,
        name: 'Binance USD (BUSD)',
        currentValue: '$1.00',
        percentage: '0.26',
        tvl: '$60,000',
        pairs: [ASSET_TYPE.SOLANA, ASSET_TYPE.ETHEREUM, ASSET_TYPE.BINANCE]
    },
    {
        type: ASSET_TYPE.SHIBA,
        name: 'Shiba Inu (SHIB)',
        currentValue: '$0.00000001948',
        percentage: '-8.1',
        tvl: '$60,000',
        pairs: [ASSET_TYPE.SOLANA, ASSET_TYPE.ETHEREUM, ASSET_TYPE.BINANCE]
    }
];

export const getFormattedPercentage = (value: string):string => {
    return value?.[0] !== '-' ? `+${value}%` : `${value}%`;
}