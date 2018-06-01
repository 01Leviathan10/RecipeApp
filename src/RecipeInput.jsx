import React, {Component} from 'react';
import './RecipeInput.css'

class RecinpeInput extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        };
        this.handleChange = this.handleChange.bind(this);   
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handeleSubmit = this.handeleSubmit.bind(this);
        
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleNewIngredient(e) {
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }

    handleChangeIng(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) =>(
            i === index ? e.target.value : ing
        )) ;
        this.setState({ingredients});
    }

    handeleSubmit(e) {
        e.preventDefault();
        this.props.onSave({...this.state}); // kopija svih vrednosti iz state
        this.setState = ({
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        });
    }


    render() {
        const {title, instructions, ingredients, img} = this.state; //dekonstrukcija svega 
        const {onClose} = this.props;
        let inputs = ingredients.map((ing, i) => (

            <div 
            className="recipe-form-line"
            key={`ingredient-${i}`}
            >
            <label>{i+1}.
            <input 
            type="text" 
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder="Ingredient"
            onChange = {this.handleChangeIng} />
            </label>
            </div>
        ));
        return( 
            <div className='recipe-form-container'>
                <form action="" className='recipe-form' onSubmit = {this.handeleSubmit}>
                    <button
                        type='button'
                        className='close-button'
                        onClick={onClose} >
                        X
                    </button>
                    <div className='recipe-form-line'>
                        <label htmlFor="">Title</label>
                        <input 
                            type="text"
                            id='recipe-title-input'
                            name='title'
                            key='title'
                            value={title}
                            size={42}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    <label 
                        htmlFor="recipe-instructions-input"
                        style={{margin: '5px'}}
                    >
                    Instructions
                    </label>
                    <textarea 
                        name="instructions" 
                        id="recipe-instructions-input" 
                        cols="50" 
                        rows="8"
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange} />
                    {inputs}
                    <button
                        type='button'
                        onClick={this.handleNewIngredient}
                        className='buttons' >
                        +
                    </button>
                    <div className='recipe-form-input'>
                        <label htmlFor="recipe-img-input">Image Url:</label> 
                        <input 
                            type="text"
                            name='img'
                            id='recipe-img-line'
                            placeholder=''
                            value={img}
                            size={36}
                            autoComplete='off'
                            onChange={this.handleChange} />                   
                    </div>
                    <button
                        type='submit'
                        className='buttons'
                        style={{alignSelf: 'flex-end', marginRight: 0}} >
                        SAVE
                    </button>

                </form>
            </div>
        )
    } 
}

export default RecinpeInput;