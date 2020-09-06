import React ,{createContext }from 'react';
const context=createContext();

class Provider1 extends React.Component{
    
    render(){
        const {store}=this.props;
        return(
            <context.Provider value={store}>
                {this.props.children}
            </context.Provider>
        )
    }
}
function Myconnect(mapStateToProps,mapDispatchToProps){
    return (Component)=>{
      return class Connected extends React.Component{

        render(){
            let state={a:1,b:2}
            let filterProps={};
            if(mapStateToProps){
                filterProps=Object.assign(filterProps,mapStateToProps(state))
                
            }
            if(mapDispatchToProps){
                filterProps=Object.assign(filterProps,mapDispatchToProps())
                
            }
            return(
                <>
                    123
                    <Component {...filterProps} />
                </>
            )
        }
      };
    }
  }

export {context, Provider1,Myconnect};


