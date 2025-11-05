export const generateStaticParams = async () => {
    const products = await fetch('https://fakestoreapi.com/products').then(response => response.json());
    return products.map(product => ({ id: product.id.toString() }));
}

export const ProductPage = async ({ params }) => {
    const { product } = await params;
    const item = await fetch(`https://fakestoreapi.com/products/${product}`).then(response => response.json());

    return (
        <div>
            <h2>Product
                <ul> 
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </li>
                </ul>
            </h2>
        </div>
    )
}

export default ProductPage;