import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe.jsx';
import './RecipeList.css';


class RecipeList extends Component { 
    static propTypes = {
        recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired
    }


    render() {
        const {onDelete} = this.props;
        const recipe = this.props.recipe.map((r,index)=> (
            <Recipe key={r.id} {...r} onDelete={onDelete} /> 
        ));
        return(
            <div className="recipe-list">{recipe}</div>
        )
    }
}

export default RecipeList;