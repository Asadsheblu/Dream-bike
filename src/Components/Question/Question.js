import React from 'react';

const Question = () => {
    return (
        <div className='p-5'>
            <h1>Difference Between props and state</h1>
            <h6>Ans:</h6>
            <ul>
                
                <li>
                In react ,Props and State both are works to store recat component data. 
                </li>
                <li>
                    State is internal and controlled by the component it self.
                    And props is external and controlled by renders the component.
                </li>
                <li>
                Props are rest parameter object for store component property and value sending from parent function to child function.
                </li>
                <li>
                The state is a variable  of reactcomponent that can vary at any time.
                </li>
                <li>
                The state can store primative,non-primative,and function.
                </li>
            </ul>
            <h1 className='p-5'>How useState works</h1>
            <h6>Ans:</h6>
            <ul>
                
                <li>
              useState is a hook that allows you have to state variable in functional componnets.
                </li>
                <li>
                   when declare usesate variable we will give two data one is value and another is setValue as a array.
                   
                </li>
                <li>
                when we need change the below we can use setValue
                </li>
                <li>
                The useState alone don't work because this argument used first time only.
                </li>
                <li>
               useSate  doesn't return just a variable it returns array.
                </li>
            </ul>
            
               
        </div>
    );
};

export default Question;