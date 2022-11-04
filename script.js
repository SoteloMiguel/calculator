let display = document.getElementById('display')
let del = document.getElementById('del')
let setResult = false
let setDeleteStep = false

const operacion = (value) => {
    if (setResult) {
        display.value = ''
        setResult = false
    }
    display.value += value
    setDeleteStep = true
    del.firstChild.data = 'CE'
}

const onDelete = () => {
    if (setDeleteStep && display.value){
        display.value = display.value.slice(0, -1)
    } else {
        display.value = '0'
    }
}

const evalMath = () => {
    let e = math.evaluate(display.value)
    display.value = e
    setResult = true
    setDeleteStep = false
    del.firstChild.data = 'AC'
}