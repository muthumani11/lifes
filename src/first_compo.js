import React,{ Component} from 'react';
import Product from './Product';



class FirstCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products:{
      ProductId: '0' ,
  ProductName: '0',
  ProductCategory: '0',
  Price: '0'
}
};
  }
  Updatestatevalue(newvalue){
    debugger;
  this.setState({
    Products:{ProductId:newvalue.ProductId,
             ProductName:newvalue.ProductName

    }
  });
  }


    render(){

const {Products}= this.state.Products;
        return (
        <div>

                <h1>React Testing 2</h1>
<Product Productvalue={Products}
        UpdateProducts={this.Updatestatevalue}/>

        </div>

        );
    }
}


export default FirstCompo;
