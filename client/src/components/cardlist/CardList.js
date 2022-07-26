import React from 'react'
import axios from 'axios';
import { CardListItem } from '../cardlistitem/CardListItem';


class CardList extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        cards: []
       };
    }


  async componentDidMount(prevProps) {
      await this.getCardsItems();
  }


  getCardsItems = async () => {
      try {
          const response = await axios.get('http://localhost:5001/api/card');
          if (response.status === 200 & response.data.data.length > 0) {
              this.setState({cards: response.data.data});
          }
      } catch (error) {
          console.error(error);
      }
  }
  deleteCard = async (id, key) => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/card?id=${id}`);
      if (response.status === 200) {
        let items = this.state.cards;
        items.splice(key, 1)
        this.setState({
          items: items
        })
      }
  } catch (error) {
      console.error(error);
  }

  }

  getItems() {
    let  itemList=this.state.cards.map((item,index)=>{
      return <CardListItem key={item.id} index={index} item={item} onDelete={this.deleteCard.bind(this)}/>
    })
    return itemList
  }

 

 

  render() {
    
  return(
      <div data-testid="tst-upload" >
       <ul>
         {this.getItems()}
       </ul>
      </div>
    );
  }
  }
  export default CardList;