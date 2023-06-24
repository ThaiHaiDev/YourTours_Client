const formatPrice = (value: string) => {
    return `${new Intl.NumberFormat('vi-VN').format(parseInt(value))} VND`
}

export default formatPrice