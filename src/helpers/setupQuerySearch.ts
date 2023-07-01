export const setupQuerySearch = (url: string | undefined) => {
    switch (url) {
        case '/admin':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: false
            }
        case '/admin/customers':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/house':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/roomcategories':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/bedcategories':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/amenity':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/amenitycategories':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/discount':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        case '/admin/surcharge':
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
        default:
            return  {
                title: 'Trong năm nay tại thời điểm hiện tại',
                query: '',
                isShow: true
            }
    }
};