import React from 'react';
import BackGround from './backGround'
import InstructorCard from '../cards/instructorCard'

const Home = props => {
    return ( 
        <React.Fragment>
            <BackGround/>
            
         <div className="InstCard"> 
        {props.Instructor.map(instructor=>(
            <InstructorCard
             key={instructor.id}
             Instructor={instructor}
            />
        ))
        }
        </div>
        
       
        </React.Fragment>
    );
}
 
export default Home;