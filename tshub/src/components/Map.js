import React from 'react'

const Map = () => {
  return (
    <div>
      <ListComponent />
      <TableComponent />
      <DropdownComponents />
      <UserListComponents />
      <NumberListComponent />
      <FlattenedListComponent />
    </div>
  )
}
// rendering a list of items
const ListComponent = () => {
    const items = ['Iphone', 'OnePlus', 'Vivo', 'Samsung', 'Iqoo'];
    const itemsList = items.map((item,index) => {
        return (
            <li key={index}>{item}</li>
        );
    });
    return (
        <div>
            <ul>{itemsList}</ul>
        </div>
    )
}

// rendering a dynamic table
const TableComponent = ()=> {
    const data = [
        {
            id: 1,
            name: "Kumar",
            age: 22
        },
        {
            id: 2,
            name: "Raju",
            age: 40
        },
        {
            id: 3,
            name: "Ganesh",
            age: 28
        },
        {
            id: 4,
            name: "Santosh",
            age: 35
        },
    ];

    const tableRows = data.map((obj) => {
        return (
            <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
            </tr>
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>  
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

const DropdownComponents = () => {
    const options = ['<5', '5-10', '>10'];
    
    const dropdownOptions = options.map((option, index) =>{
        return <option key={index} value={option}>{option}</option>
    });

    return (
        <select>
            <option disabled selected>Select an option</option>
            {dropdownOptions}
        </select>
    );
}

// rendering a list of components with props
const UserListComponents = () => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];

    const User = ({name}) => {
        return <p>{name}</p>;
    }

    const userComponents = users.map((user) => (
        <User key={user.id} name={user.name} />
    ));
    return <div>{userComponents}</div>

}

// rendering conditional elements
const NumberListComponent = ()=>{
    const numbers = [1,2,3,4,5];
    const numberList = numbers.map((number) => {
        return <div key={number}>
            {number%2 === 0 ? <strong>{number}</strong>:<span>{number}</span>}
        </div>
    });
    return <div>{numberList}</div>
}

// flattening nested arrays
const FlattenedListComponent = ()=>{
    const nestedArray = [[1,2], [3,4], [5,6]];
    const flattenedList = nestedArray.flat();
    return (
        <ul>
        {
            flattenedList.map((item,index) => <li key={index}>{item}</li>)
        }
        </ul>
    );
}
export default Map
