const configLocal = JSON.parse(open('../config/configLocal.json'))  

export function pegarBaseUrl() {
    return __ENV.BASE_URL || configLocal.baseURL
}