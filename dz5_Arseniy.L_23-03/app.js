// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const convert = (elem, target, isTrue) => {
//     elem.oninput= () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//             const response = JSON.parse(request.responseText)
//             if (isTrue) {
//                 target.value = (elem.value / response.usd).toFixed(2)
//             } else {
//                 target.value = (elem.value * response.usd).toFixed(2)
//             }
//             elem.value === '' && (target.value = '')
//         }
//     }
// }
//
//
// convert(som, usd, true)
// convert(usd, som, false)


const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target, rate) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.responseText)
            if (elem.value === '') {
                target.value = ''
            } else {
                target.value = (elem.value * response[rate] / response.usd).toFixed(2)
            }
        }
    }
}

convert(som, usd, 'usd')
convert(som, eur, 'eur')
convert(usd, som, 'usd')
convert(eur, som, 'eur')

som.oninput = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const response = JSON.parse(request.responseText)
        if (som.value === '') {
            usd.value = ''
            eur.value = ''
        } else {
            usd.value = (som.value / response.usd).toFixed(2)
            eur.value = (som.value / response.eur).toFixed(2)
        }
    }
}

usd.oninput = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const response = JSON.parse(request.responseText)
        if (usd.value === '') {
            som.value = ''
            eur.value = ''
        } else {
            som.value = (usd.value * response.usd).toFixed(2)
            eur.value = (som.value / response.eur).toFixed(2)
        }
    }
}

eur.oninput = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const response = JSON.parse(request.responseText)
        if (eur.value === '') {
            som.value = ''
            usd.value = ''
        } else {
            som.value = (eur.value * response.eur).toFixed(2)
            usd.value = (som.value / response.usd).toFixed(2)
        }
    }
}







