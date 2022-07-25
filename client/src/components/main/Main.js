import React from 'react';
import axios from 'axios';
import cardIcon from '../../home_logo.svg'
import CardList from '../cardlist/CardList'
import CardInput from '../cardinput/CardInput'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef()
        this.inputRef = React.createRef()
        this.state = { 
          showError:false
         };  
      }
      
      handleCheckClick(that){
        console.log('test', this.inputRef.current.getinput())
        let inputNumber = this.inputRef.current.getinput()
        if(inputNumber.length !== 16){
          this.setState({showError:true})
        }else{
        this.submitCardToBackend(inputNumber)
        }
      }

      submitCardToBackend = async (number) =>{
            try {
              const response = await axios.post(`http://localhost:5001/api/card`, {
                number: number,
              });
              if (response.status === 200) {
                this.setState({showError:false})
                this.listRef.current.getCardsItems()
                this.inputRef.current.resetInput()
              }
          } catch (error) {
            this.setState({showError:true})
              console.error(error)
          }
      }
        render() {
          let {showError} = this.state
            return (
                <div data-testid="tst-main-component" className="row mt-5">
                   <div class="card border border-dark Main-card-boarder" >
                    <div class="Main-card-header">
                        <div class="d-flex flex-row justify-content-between Main-card-heading">
                        <h3 class="font-heading">Balance checker</h3>
                        <img src={cardIcon} alt="home icon"/>
                        </div>
                        <p class="Main-text-paragraph font-text">Enter your card number to check it’s balanace.</p>
                    </div>
                
                    <CardInput ref={this.inputRef}/>
                    </div>

                    {showError ?<p class= "font-text Main-error-text text-center">Invalid number</p>:''}
                    <button href="#" class="btn btn-dark Main-check-button" onClick={()=> this.handleCheckClick(this)}>Check</button>

                    
                    {/* list component here with cards */}
                    <CardList ref={this.listRef} />
                </div>
            );
        }
    }
  export default Main;