import http from 'k6/http'
import { sleep, check } from 'k6'
import { obterToken } from '../helpers/autenticacao.js'
import { pegarBaseUrl } from '../utils/variaveis.js'

export const options = {
    stages: [
        { duration: '10s', target: 10 },
    ],
    thresholds: {
        http_req_duration: ['p(90)<3000','max<5000'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
    const {token} = obterToken()

    const url = pegarBaseUrl() + '/transferencias'

    const payload = JSON.stringify({
        contaOrigem: 1,
        contaDestino: 2,
        valor: 11,
    })

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    const res = http.post(url, payload, params)

    check(res, {
        'Validar que o status é 201': (r) => r.status === 201
    })
    sleep(1)
}