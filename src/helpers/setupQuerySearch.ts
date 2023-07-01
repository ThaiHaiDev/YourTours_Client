export const setupQuerySearch = (url: string | undefined) => {
    switch (url) {
        case '/admin':
            return  {
                title: '',
                query: '',
                isShow: false
            }
        case '/admin/customers':
            return  {
                title: 'Tìm kiếm theo tên khách hàng',
                query: '',
                isShow: true
            }
        case '/admin/house':
            return  {
                title: 'Tìm kiếm theo tên nhà cho thuê',
                query: '',
                isShow: true
            }
        case '/admin/roomcategories':
            return  {
                title: 'Tìm kiếm theo tên loại phòng',
                query: '',
                isShow: true
            }
        case '/admin/bedcategories':
            return  {
                title: 'Tìm kiếm theo tên loại giường',
                query: '',
                isShow: true
            }
        case '/admin/amenity':
            return  {
                title: 'Tìm kiếm theo tên tiện nghi',
                query: '',
                isShow: true
            }
        case '/admin/amenitycategories':
            return  {
                title: 'Tìm kiếm theo tên loại tiện nghi',
                query: '',
                isShow: true
            }
        case '/admin/discount':
            return  {
                title: 'Tìm kiếm theo tên giảm giá',
                query: '',
                isShow: true
            }
        case '/admin/surcharge':
            return  {
                title: 'Tìm kiếm theo tên danh mục phụ phí',
                query: '',
                isShow: true
            }
        default:
            return  {
                title: 'Tìm kiếm',
                query: '',
                isShow: true
            }
    }
};