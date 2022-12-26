const format3Dots = (value : string | undefined, numberMax : number) => {
    if (value !== '') {
        return value && value.slice(0, numberMax) + (value.length > numberMax ? '...' : '')
    } else {
        return ''
    }
}

export default format3Dots