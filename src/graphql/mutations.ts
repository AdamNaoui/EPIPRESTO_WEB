import {gql} from '@apollo/client'

export const SIGN_UP = gql`
    mutation Mutation($accountInput: VendorAccountInput) {
        vendorSignUp(accountInput: $accountInput) {
            code
            message
        }
    }
`

export const SYNC_SHOPIFY = gql`
    mutation Mutation($shopifyCreds: ShopifyCredentials!) {
        synchronizeShopifyStore(shopifyCreds: $shopifyCreds) {
            code
            message
        }
    }
`

export const SYNC_WOOCOMMERCE = gql`
    mutation Mutation($woocommerceCreds: WoocommerceCredentials!) {
        synchronizeWoocommerceStore(woocommerceCreds: $woocommerceCreds) {
            code
            message
        }
    }
`
export const VERIFY_EMAIL = gql`
    mutation Mutation($token: String!) {
        verifyAccount(token: $token) {
            __typename
            ... on ClientAccountResponse {
                code
                message
                clientAccount {
                    _id
                }
            }
            ... on VendorAccountResponse {
                code
                message
                vendorAccount {
                    _id
                }
            }
            
        }
    }
`
