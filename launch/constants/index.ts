// export const NETWORK = import.meta.env.VITE_APP_NETWORK ?? "testnet";
export const NETWORK = process.env.NEXT_PUBLIC_NETWORK ?? "testnet";
export const MODULE_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS;
export const CREATOR_ADDRESS = process.env.NEXT_PUBLIC_COLLECTION_CREATOR_ADDRESS;
export const COLLECTION_ADDRESS = process.env.NEXT_PUBLIC_COLLECTION_ADDRESS;
export const IS_DEV = Boolean(process.env.NEXT_PUBLIC_DEV);
export const IS_PROD = Boolean(process.env.NEXT_PUBLIC_PROD);
export const APTOS_API_KEY = process.env.NEXT_PUBLIC_APTOS_API_KEY;
