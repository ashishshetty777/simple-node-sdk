export function validateApiKeys(apiKey, secretApiKey) {
    if (!apiKey || apiKey === '') {
        throw new Error('No apiKey provided! Please provide your api key as an argument when you start this script');
    }
    if (!secretApiKey || secretApiKey === '') {
        throw new Error('No secretApiKey provided! Please provide your secret api key as an argument when you start this script');
    }
}