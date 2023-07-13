import React, {useState} from 'react'

const Filter = () => {
    return(
        <div>
            <NumberListComponent />
            <ProductListComponent/>
            <SearchComponent />
            <PriceFilterComponent />
            <FilterOnMultipleConditons />
        </div>
    )
}

// filtering an array of numbers
const NumberListComponent = ()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const oddNum = numbers.filter(element => element%2 !== 0);
    const sumOfOddNum = oddNum.reduce((sum, ele) => sum += ele, 0);

    return (
        <div>
            {oddNum.join('+')} = {sumOfOddNum}
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

// filtering an array of objects
const ProductListComponent = () => {
    
    const expensiveProducts = products.filter((product) => product.price>1000);
    return (
        <div>
            <ul>
                {
                    expensiveProducts.map((product, index) => {
                        return <li key={index}>{product.name}: {product.price}</li>
                    })
                }
            </ul>
        </div>
    )
}

// filtering with a dynamic search query
const SearchComponent = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const filteredData = products.filter((item) => {
        const matchesSearchTerm = item.name?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = item.category?.toLowerCase() === category.toLowerCase();
        return matchesSearchTerm && matchesCategory;
    });
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div>
            <input 
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
            />
            <select value={category} onChange={handleCategoryChange}>
                {/* <option value="">All Categories</option> */}
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
            </select>
            <ul>
                {
                    filteredData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// filtering with a Range Condition
const PriceFilterComponent = () => {

    const minPrice = 800;
    const maxPrice = 1500;

    const rangePriceProducts = products.filter((product) => (
        product.price>=minPrice && product.price<=maxPrice
    ));

    return (
        <>
            <ul>
                {
                    rangePriceProducts.map((product)=>{
                        return <li key={product.id}>{product.name}</li>
                    })
                }
            </ul>
        </>
    )
}

// filtering on multiple conditions
const FilterOnMultipleConditons = () => {
    const price = 900;
    const category = "Electronics";
    const filteredData = products.filter((product) => (
        product.price>price && product.category===category
    ));

    return (
        <>
            <p>list of products, where price greater than {price} and category is {category}</p>
            <ul>
                {
                    filteredData.map((product) =>{
                       return <li key={product.id}>{product.name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Filter
