import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'

class NavBar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }

    static propTypes =  {
        onNewRecipe: PropTypes.func
    }



    render() {
        return(
            <header>
                <h2><span>Recipe App</span></h2>
                <nav>
                    <li onClick={this.props.onNewRecipe}>
                        <span>New Recipe</span> 
                    </li>
                    <li>
                        <span>Home</span> 
                    </li>
                    <li>
                        <span>About</span> 
                    </li>
                    <li>
                        <span>Contact Us</span> 
                    </li>
                </nav>
            </header>
        );
    }
}

export default NavBar;