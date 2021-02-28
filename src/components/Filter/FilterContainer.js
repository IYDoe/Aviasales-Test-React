// import React, { useState, useEffect } from 'react'
// import Filter from './Filter'

// export default function FilterContainer() {
//     const [checkedItems, setCheckedItems] = useState({})

//     const handleChange = (event) => {
//         setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked })
//     }

//     useEffect(() => {
//         console.log("checkedItems: ", checkedItems);
//     }, [checkedItems])

//     return (
//         <div>
//             <Filter handleChange={handleChange} />
//         </div>
//     )
// }