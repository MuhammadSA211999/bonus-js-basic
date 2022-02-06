// ***find-out the product you need by search:***
const products = [
    { name: 'laptop', price: 40000 },
    { name: 'laptop asus', price: 38000 },
    { name: ' asus watch', price: 42000 },
    { name: 'acer mobile', price: 27000 },
    { name: 'microlab speaker', price: 12000 },
    { name: 'esonic speaker', price: 100 },
];
function searchProducts(products, searchText) {
    for (let product of products) {
        if (product.name.includes('watch')) {
            console.log(product.price);
        }
    }
}
searchProducts(products);