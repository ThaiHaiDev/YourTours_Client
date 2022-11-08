const formatPrice = (value: string) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(value))
}

export default formatPrice