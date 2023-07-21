import React from 'react'

const Reduce = () => {
    return (
        <div>
            <CartTotal items={items} />
            <MaxValue numbers={numbers} />
            <GroupByCategory products={products}/>
            <AverageRating ratings = {ratings}/>
            <ConvertToDictionary data={data} />
            <CountOccurrence items={fruits} />
            <ShoppingCart items={items} />
        </div>
    )
}

// sample data
const products = [
    { id: 1, name: 'iPhone', price: 999, category: 'Electronics' },
    { id: 2, name: 'iPad', price: 799, category: 'Electronics' },
    { id: 3, name: 'Shirt', price: 29, category: 'Clothing' },
    { id: 4, name: 'Jeans', price: 59, category: 'Clothing' },
    { id: 5, name: 'Headphones', price: 199, category: 'Electronics' },
];
const items = [
    { id: 1, name: 'Product 1', price:800, quantity: 2 },
    { id: 2, name: 'Product 2', price:100, quantity: 1 },
    { id: 3, name: 'Product 3', price:500, quantity: 3 },
];
const numbers = Array.from({length: 10}, ()=> Math.floor(Math.random()*100));

const ratings = [2.5, 3.5, 4, 5, 4.5, 4, 3];

const data = [
    { key: 'name', value: 'John Doe' },
    { key: 'age', value: 30 },
    { key: 'occupation', value: 'Developer' },
];
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple', 'banana'];


// calculating the Total Quantity of items
const CartTotal = ({items}) => {
    const totalQuantity = items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    
    return(
        <div>
            Total Quantity: {totalQuantity}
        </div>
    );
}

// finding the maximum value in an array
const MaxValue = ({numbers}) => {
    const maxValue = numbers.reduce((acc, currVal) => Math.max(acc, currVal));
    return(
        <div>
            Maximum Value: {maxValue}
        </div>
    );
}

// grouping data based on a property
const GroupByCategory = ({products}) => {
    const groupedData = products.reduce((accumulator, product) => {
        const category = product.category;
        if(!accumulator[category]){
            accumulator[category] = [];
        }
        accumulator[category].push(product);
        return accumulator;
    },{});

    return (
        <div>
            {Object.entries(groupedData).map(([category, products]) => (
                <div key ={category}>
                    <h3>{category}</h3>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

// calculating the average rating
const AverageRating = ({ratings}) =>{
    const totalRatings = ratings.reduce((avg, rating) => avg + rating , 0);
    const averageRating =  totalRatings/ ratings.length;

    return (
        <div>AverageRating: {averageRating.toFixed(2)}</div>
    )
}

// converting an array of objects to an object with key-value pairs
const ConvertToDictionary = ({data}) => {
    const dictionary = data.reduce((accumulator, item) => {
        accumulator[item.key] = item.value;
        return accumulator;
    }, {});
    return (
        <div>
            <h3>Convert an array of objects to key-value pairs</h3>
            {Object.entries(dictionary).map(([key, value]) => (
                <div key={key}>
                    {key}: {value}
                </div>
            ))}
        </div>
    );
}

// counting occurrences of items in an array
const CountOccurrence = ({items}) => {
    const frequency = items.reduce((accumulator, item) => {
        accumulator[item] = (accumulator[item] || 0) + 1;
        return accumulator;
    },{});

    return (
        <div>
            {Object.entries(frequency).map(([item, count]) => (
                <div key={item}>
                    {item}: {count}
                </div>
            ))}
        </div>
    )

}

// calculating the total price in a shopping cart
const ShoppingCart = ({items}) =>{
    const totalPrice = items.reduce((accumulator, item) => accumulator + (item.price*item.quantity), 0);
    
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity} - Price: {item.price}
                    </li>
                ))}
            </ul>
            <h3>Total Price: {totalPrice}</h3>
        </div>
    )
    
}

export default Reduce
