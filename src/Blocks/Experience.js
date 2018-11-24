import React from 'react'
import { Grid } from 'semantic-ui-react';



const Experience = ({items}) => (
   <div>
   {items.map(item => 
   <div>
    <div>
        {item.title}
        </div>
     
     <div>{item.description}</div>
     </div>
    
     )}

  

    </div> 
    
)
export default Experience;