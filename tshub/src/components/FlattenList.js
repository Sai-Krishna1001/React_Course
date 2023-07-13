import React from 'react'

const FlattenList = () => {
    const nestedList = [
        1,
        [2,3],
        [4,[5,6,[7,8]]],
        [9,[10,[11,[12]]]]
    ];
    
    const flattenList = (list)=>{
        return list.reduce((flattened, item) => {
            if(Array.isArray(item)){
                return flattened.concat(flattenList(item));
            } else{
                return flattened.concat(item);
            }
        },[]);
    }
    const flattenedList = flattenList(nestedList);
    return (
        <div>
            <ul>
                {
                    flattenedList.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FlattenList
