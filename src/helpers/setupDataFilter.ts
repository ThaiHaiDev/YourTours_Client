export const setupDataAdminFilter = (url: string | undefined) => {
    switch (url) {
        case '/admin':
            return [
                {
                    title: 'Trong năm nay tại thời điểm hiện tại',
                    filterData: [
                        {
                            id: '1',
                            value: 'Theo ngày',
                        },
                        {
                            id: '2',
                            value: 'Theo tháng',
                        },
                        {
                            id: '3',
                            value: 'Theo quý',
                        },
                        {
                            id: '4',
                            value: 'Theo năm',
                        },
                    ],
                }
            ];
        case '/admin/customers':
            return [
                {
                    title: 'Chủ nhà',
                    filterData: [
                        {
                            id: '1',
                            value: 'Đã là chủ nhà',
                        },
                        {
                            id: '2',
                            value: 'Chưa thành chủ nhà',
                        },
                    ],
                },
                {
                    title: 'Quyền',
                    filterData: [
                        {
                            id: '3',
                            value: 'Khách hàng',
                        },
                        {
                            id: '4',
                            value: 'Admin',
                        },
                    ],
                }
            ];
        case '/admin/house':
            return [
                {
                    title: 'Chính sách hoàn tiền',
                    filterData: [
                        {
                            id: '1',
                            value: 'Trước 7 ngày',
                        },
                        {
                            id: '2',
                            value: 'Trước gì đó quên rồi',
                        },
                    ],
                },
            ];
        case '/admin/roomcategories':
            return [
                {
                    title: 'Config giường',
                    filterData: [
                        {
                            id: '1',
                            value: 'True',
                        },
                        {
                            id: '2',
                            value: 'False',
                        },
                    ],
                },
                {
                    title: 'Quan trọng',
                    filterData: [
                        {
                            id: '3',
                            value: 'True',
                        },
                        {
                            id: '4',
                            value: 'False',
                        },
                    ],
                }
            ];
        case '/admin/bedcategories':
            return [];
        case '/admin/amenity':
            return [
                {
                    title: 'Loại tiện ích',
                    filterData: [
                        {
                            id: '3',
                            value: 'Gia đình',
                        },
                        {
                            id: '4',
                            value: 'Dịch vụ',
                        },
                    ],
                } 
            ];
        case '/admin/amenitycategories':
            return [];
        case '/admin/discount':
            return [
                {
                    title: 'Số ngày giảm giá',
                    filterData: [
                        {
                            id: '3',
                            value: '30 ngày',
                        },
                        {
                            id: '4',
                            value: '7 ngày',
                        },
                    ],
                } 
            ];
        case '/admin/surcharge':
            return [];
        default:
            return [];
    }
};

export const setupDataOwnerFilter = (url: string | undefined) => {
    switch (url) {
        case '/host/setting':
            return [
                {
                    title: 'Khách hàng đánh giá',
                    filterData: [
                        {
                            id: '1',
                            value: '1 star',
                        },
                        {
                            id: '2',
                            value: '2 star',
                        },
                        {
                            id: '3',
                            value: '3 star',
                        },
                        {
                            id: '4',
                            value: '4 star',
                        },
                        {
                            id: '5',
                            value: '5 star',
                        },
                    ],
                },
                {
                    title: 'Trạng thái',
                    filterData: [
                        {
                            id: '1',
                            value: 'Active',
                        },
                        {
                            id: '2',
                            value: 'Unactive',
                        },
                    ],
                }
            ];
        default:
            return [];
    }
}