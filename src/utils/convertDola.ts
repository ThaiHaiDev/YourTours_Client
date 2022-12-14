const convertDola = (price : any) => {
    if (price !== '' && price !== undefined) {
        const result = parseInt(price) / 23000;
        return result.toFixed(2);
    }
    return 0;
}

export default convertDola;