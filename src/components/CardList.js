import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    if (true) {
        throw new Error('NOOO!');
    }
    return (
        <div>
             {robots.map((user, i) => {
                return ( 
                    <Card 
                    key={user.id}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />   );
                })
            }
        </div>
    );
}
    

export default CardList;

//Each child in a list should have a unique "key" prop. 
//See https://reactjs.org/link/warning-keys for more information.

// kym som nedal key={}, defaultne to nastavi key={index} ..to moze sposobit problemy