import { sleep, check } from 'k6'
import { obterToken } from '../helpers/autenticacao.js'

export const options = {
    stages: [
        { duration: '5s', target: 10000 },
        { duration: '5s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        http_req_failed: ['rate<0.05']
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