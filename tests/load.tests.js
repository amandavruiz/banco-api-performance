import { sleep, check } from 'k6'
import { obterToken } from '../helpers/autenticacao.js'

export const options = {
    stages: [
        { duration: '30s', target: 50 },
        { duration: '50s', target: 50 },
        { duration: '30s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
    const { status, token } = obterToken()

    check({ status, token }, {
        'Status deve ser 200': (r)=> r.status === 200,
        'Token deve ser uma string': (r) => typeof r.token === 'string',
    })
    sleep(1)
}