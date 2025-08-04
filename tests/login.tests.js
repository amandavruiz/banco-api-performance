import http from 'k6/http'
import { sleep, check } from 'k6'
import { obterToken } from '../helpers/autenticacao.js'

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '10s', target: 30 },
        { duration: '20s', target: 30 },
        { duration: '20s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
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