import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => { //arrow function 
        this.setState({ searchfield: event.target.value })
     }

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot =>{    
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })   
        return !robots.length ?   //--> povodna verzia --> (robots.length === 0)
        <h1 className='tc'>Loading...</h1> : //bola este jedna -> if, else statement
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
       }   
    }


export default App;

// PROPS & STATE .. props su veci, ktore vychadzaju zo state. state >> props .. 
// child nemoze menit props, parent povie svojim children aky je STATE a child
// to prijme .. 
// v nasom pripade chceme aby STATE v searchboxe komunikoval s PROPS v CardListe