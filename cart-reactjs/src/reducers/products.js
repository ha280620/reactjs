var initialState = [
    {
        id : 1,
        name : 'Iphone 13',
        image : 'https://hc.com.vn/i/ecommerce/media/ckeditor_2074276.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung galaxy S7',
        image : 'https://www.xtmobile.vn/vnt_upload/product/07_2018/thumbs/600_s7edge_silver_HQ_800x800_compressed.jpg',
        description : 'Sản phẩm do samsung sản phẩm',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-7-300x300.jpg',
        description : 'Sản phẩm do china sản phẩm',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;