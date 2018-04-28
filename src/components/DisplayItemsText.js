import React from 'react'
import { NavLink } from 'react-router-dom';

const DisplayItemsText = ({items}) => (
    items.length === 0 ? <p className='paragraph' >
    You haven't created any items yet, lets do that now by clicking 
     <NavLink  className='paragraph__sub-link' to='/item'> here</NavLink>
    </p> : <p className='paragraph' >
    You haven't added any items to this list. Select an item from the dropdown above and click add item to get started on your list
    </p>
)

export default DisplayItemsText;