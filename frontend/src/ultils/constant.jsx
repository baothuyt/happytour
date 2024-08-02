export const roles = [
    {
        code: 0,
        value: 'Admin'
    },
    {
        code: 1,
        value: 'User'
    }
]

export const blockstatus = [
    {
        code: true,
        value: 'Blocked'
    },
    {
        code: false,
        value: 'Active'
    }
]

export const tourType = [
    'couple',  // Tour lãng mạn dành cho cặp đôi
    'adventure', // Tour mạo hiểm
    'cultural', // Tour khám phá văn hóa
    'family', // Tour vui chơi gia đình
    'luxury', // Tour sang trọng
    'budget' // Tour tiết kiệm
];

export const sorts = [
    {
        id: 1,
        value: '-sold',
        text: 'Best selling'
    },
    {
        id: 2,
        value: '-name',
        text: 'Alphabetically, A-Z'
    },
    {
        id: 3,
        value: 'name',
        text: 'Alphabetically, Z-A'
    },
    {
        id: 4,
        value: '-price',
        text: 'Price, high to low'
    },
    {
        id: 5,
        value: 'price',
        text: 'Price, low to high'
    },
    {
        id: 6,
        value: '-createdAt',
        text: 'Date, new to old'
    },
    {
        id: 7,
        value: 'createdAt',
        text: 'Date, old to new'
    },
];
