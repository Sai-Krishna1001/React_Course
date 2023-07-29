import React, { useState } from 'react'
import Data from './city.json'
const SearchFilter = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <center>
                <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search City' /> <br />
                {Data.filter((city) => city.name.toLowerCase().includes(search.toLowerCase())).map((item) => {
                    return <div style={{"border":"1px solid black", "margin":"10px", "padding":"10px","maxWidth":"60%"}}>
                        {item.name}
                    </div>
                })}
            </center>
        </div>
    )
}

export default SearchFilter
