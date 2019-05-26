import React from 'react';
import {withLoaderAndError} from './HigherOrderComponents'
import {PCProps,Person} from './PresentationalContainerComponents'
import {ContainerComponents} from './RenderProps'

export class CompoundComponents extends React.Component<any,any>{

    private renderProps = (props:CCP,state:CCS)=>{
        return <PresentationalComponentswithLoaderAndError characterList={state.characterList} error={state.error} loader={state.loader} >
            </PresentationalComponentswithLoaderAndError>
    }

    public render(){
        return  <div>
                    <ContainerComponents render={this.renderProps} />
                </div>
    }
}

export class PresentationalComponents extends React.Component<PCProps,any>{

    public render(){
        const {characterList} = this.props;
        return (
            <div>
                {
                   characterList.map((character:Person)=>{
                       return <ListElement key={character.id} character={character}>                            
                                <ListElement.Label />
                                <ListElement.Img />  
                                <ListElement.Description />                             
                            </ListElement>
                   }) 
                }

                {this.props.children}
            </div>
        )
    }
}

export class Label extends React.Component<{title?:string},any>{
    render(){
        return <div className="box__title">{this.props.title}</div>
    }
}

export class Img extends React.Component<{src?:string},any>{
    render(){
        return <div className="box__img"><img src={this.props.src} alt={""} /></div>
    }
}

export class Description extends React.Component<{character?:Person},any>{
    render(){
        return  <div className="box__desc">
                    <div className="box__desc__el">Status: {this.props.character && this.props.character.status}</div>
                    <div className="box__desc__el">Species: {this.props.character && this.props.character.species}</div>
                    <div className="box__desc__el">Gender: {this.props.character && this.props.character.gender}</div>
                </div>
    }
}

export class ListElement extends React.Component<{character:Person},any>{

    public static Label = Label;
    public static Img = Img;
    public static Description = Description;

    private mapPropsToStepperChild =(child:any)=>{
        const {character} = this.props;
        switch(child.type.name){
            case 'Label':
                return React.cloneElement(child, {
                    title: character.name
                });
            case 'Img':
                    return React.cloneElement(child, {
                        src: character.image
                    });
            case 'Description':
                    return React.cloneElement(child, {
                        character: character
                    });
            default:
                return React.cloneElement(child, undefined);
        }
    }

    render(){     
        const children = React.Children.map(
            this.props.children,
            this.mapPropsToStepperChild,
        );
        return <div className="box">
                    {children}
                </div>
    }
}

export const PresentationalComponentswithLoaderAndError = withLoaderAndError(PresentationalComponents);

type CCP = {
    render:(props:CCP,state:CCS)=>JSX.Element
}

type CCS = {
    characterList:Array<Person>,
    error:boolean,
    loader:boolean
}