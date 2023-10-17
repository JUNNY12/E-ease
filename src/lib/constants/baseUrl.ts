export const base_URL = process.env.NODE_ENV === 'development' ?
process.env.NEXT_PUBLIC_EXTERNAL_API_URL : 
process.env.NEXT_DEPLOY_EXTERNAL_API_URL;