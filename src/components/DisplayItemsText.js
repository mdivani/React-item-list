import React from 'react'
import { NavLink } from 'react-router-dom';

const DisplayItemsText = ({items, lists}) => (
    items.length === 0 ? <p className='paragraph' >
    You haven't created any items yet, lets do that now by clicking 
     <NavLink  className='paragraph__sub-link' to='/item'> here</NavLink>
    </p> : lists.length > 0 ? <p className='paragraph' >
    You haven't added any items to this list. Select an item from the dropdown above and click add item to get started on your list
    </p> : <p className='paragraph' >We need a list to add your items to. use the following <NavLink 
           className='paragraph__sub-link'
           to='/list'>link
          </NavLink> to create a list
  </p>
)

export default DisplayItemsText;