import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()

    const history = useHistory()

    const handleTaskBackButton = () => {
        history.goBack()
    }

    console.log(params)

    return ( 
        <>
            <div className="back-button-container" onClick={handleTaskBackButton}>
                <Button>voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam sed, enim error ad amet.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;