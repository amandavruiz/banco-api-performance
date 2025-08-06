import { sleep, check } from 'k6'
import { obterToken } from '../helpers/autenticacao.js'

export const options = {
    stages: [
        { duration: '2500s', target: 10000 }
    ],
    thresholds: {
        http_req_failed: ['rate<0.10']
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