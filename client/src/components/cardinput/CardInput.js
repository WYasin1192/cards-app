import React from 'react';


class CardInput extends React.Component {
    constructor(props) {
        super(props);
        this.getinput.bind(this)
        this.resetInput.bind(this)
        this.state = { 
            cardNumber: ''
         };
      }

      getinput(){
          return this.state.cardNumber
      }

      resetInput(){
        this.setState({cardNumber:''})
      }

      handlingCardNumber(event) {
        if(event.target.validity.valid){
        let key = event.keyCode || event.charCode;
        let inputText= event.target.value.replace(/\s/g, '').trim()
        if( key === 8 || key === 46 || inputText.length <=16){   
                this.setState({
                    cardNumber: inputText
                })
            }
        }
      }

      formateCardNumeber(number){
        return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
      }
      
        render() {
            return (
                <div >
                    
                    <input class="Main-input font-text" placeholder='xxxx xxxx xxxx xxxx' pattern="[0-9\s]*" onChange={this.handlingCardNumber.bind(this)} 
                        value={this.formateCardNumeber(this.state.cardNumber)} />

                </div>
            );
        }
        /* may be handle error here */
    }
  export default CardInput;