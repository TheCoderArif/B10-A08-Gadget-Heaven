const getProductCartData = () => {
    const data = localStorage.getItem('Product-Cart');
    if (data) {
        const ParsedData = JSON.parse(data);
        return ParsedData;
    }
    else{
        return [];
    }
}

const getProductWishData = () => {
    const data = localStorage.getItem('Wish-List');
    if (data) {
        const ParsedData = JSON.parse(data);
        return ParsedData;
    }
    else{
        return [];
    }
}


const setProductCartData = id => {
    const cartData = getProductCartData();
    if (cartData.includes(id)) {
        console.log('The data already in the cart.');
    }
    else{
        cartData.push(id);
        const stringifiedData = JSON.stringify(cartData);
        localStorage.setItem('Product-Cart', stringifiedData);
    }
}

const setProductWishData = id => {
    const wishData = getProductWishData();
    if (wishData.includes(id)) {
        console.log('The data already in the cart.');
    }
    else{
        wishData.push(id);
        const stringifiedData = JSON.stringify(wishData);
        localStorage.setItem('Wish-List', stringifiedData);
    }
}





export  {getProductCartData, setProductCartData, getProductWishData, setProductWishData}