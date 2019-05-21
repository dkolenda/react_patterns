import React from 'react';

export class Key extends React.Component<any,any>{
    constructor(props:any) {
        super(props);

        this.state = {
          list: [
            {name: 'Foo1444610101010', id: 1444610101010},
            {name: 'Bar1444600000000', id: 1444600000000}
          ]
        };
    }
      
    public addItem = ()=>{
        const id = + new Date();
        this.setState({
          list: [{name: 'Baz' + id, id} , ...this.state.list]
        });
      }
      
      render() {
        return (
          <div>
            <hr/>
            <button onClick={this.addItem}><b>Dodaj element</b></button>
          
    
            <h3>Źle <code style={{color:'red'}}>key=index</code></h3>
            <form>
                {this.state.list.map((todo:any, index:number) =>
                  <Item {...todo}
                  key={index} />
                )}
            </form>
            
    
            <h3>Dobrze <code style={{color:'red'}}>key=id</code></h3>
            <form>
                {this.state.list.map((todo:any) =>
                  <Item {...todo}
                  key={todo.id} />
                )}
            </form>
          </div>
        )
      }
}

class Item extends React.Component<any,any> {
    render() {
      return (
        <div className="form-group">
          <label className="col-xs-4 control-label">{this.props.name}</label>
          <div className="col-xs-8">
            <input type='text' className='form-control' />
          </div>
        </div>
      )
    }
  }