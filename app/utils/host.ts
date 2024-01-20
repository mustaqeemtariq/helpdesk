let fallbackHost: string | undefined = 'localhost:8080'
let host = fallbackHost

let schemeForHttp = 'https://'

if (host === 'localhost:8080') {
	schemeForHttp = 'http://'
}

export const apiHost = schemeForHttp + host
