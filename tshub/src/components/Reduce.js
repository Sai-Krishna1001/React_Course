import React from 'react'

const Reduce = () => {
    return (
        <div>
            <CartTotal items={items} />
            <MaxValue numbers={numbers} />
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
    { id: 1, name: 'Product 1', quantity: 2 },
    { id: 2, name: 'Product 2', quantity: 1 },
    { id: 3, name: 'Product 3', quantity: 3 },
];
const numbers = Array.from({length: 10}, ()=> Math.floor(Math.random()*100));

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
const GroupByCategory = ({products}){
    const groupedData = products.reduce((accumulator, product) => {

    })
}

// calculating the average rating
const AverageRating = ({ratings}) =>{

}

// converting an array of objects to an object with key-value pairs
const ConvertToDictionary = ({data}) => {

}

// counting occurrences of items in an array
const CountOccurrence = ({items}) => {

}

// calculating the total price in a shopping cart

// merging multiple arrays into a single array


// calculating the total votes for a poll

// calculating total expenses






export default Reduce
