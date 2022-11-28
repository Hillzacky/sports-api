'use-strict'
class Fifa {
	static host	= `api.fifa.com`
	static ep		= `https://${Fifa.host}/api/v3`

	static seasons(){
		return Fifa.req(`${Fifa.ep}/seasons?language=en`)
	}

	static seasonsDetails(IdCompetition){
		return Fifa.req(`${Fifa.ep}/seasons/${IdCompetition}?language=en`)
	}

	static competitions(){
		return Fifa.req(`${Fifa.ep}/competitions?language=en`)
	}

	static competitionDetails(IdCompetition){
		return Fifa.req(`${Fifa.ep}/competitions/${IdCompetition}?language=en`)
	}

	static match(f = '2022-11-27T00:00:00Z',t = '2022-11-29T23:59:59Z',l = 'en',c = 500){
		return Fifa.req(`${Fifa.ep}/calendar/matches?from=${f}&to=${t}&language=${l}&count=${c}`)
	}

	static req(l){
		let xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) console.log(xhr.responseText)
		}
		xhr.open("GET", l, true)
		xhr.withCredentials = true
		xhr.setRequestHeader("Content-Type", "application/json")
		return xhr.send()
	}
}

