import React from 'react'
import trash_icon from '../../trash_icon.svg'



export const CardListItem = (props) => {
  console.log('props', props)
    let {lastDigits, balance, id} = props.item
    return (
        <div class="mt-5">
          <div class="row border-bottom border-dark">
            <div class="d-flex flex-row  justify-content-between align-items-center mb-1">
              <p class="font-text" >Card ending in {lastDigits}</p>
              <div class="d-flex flex-row">
                <p class="font-text Card-item-text" >Balance: ${balance}</p>
                <button class="Card-item-trash-button"onClick={()=> props.onDelete(props.item.id, props.key)}><img src={trash_icon}
                  alt="delete card" /></button>
              </div>
            </div>
          </div> 
        </div>
    )
  }