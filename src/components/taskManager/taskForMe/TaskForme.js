import React, { useEffect, useState } from 'react'
import TaskForMeList from './taskforMeList/TaskForMeList'
import { getTaskforMe } from '../../../api/login/Login';

function TaskForme() {
    const [initialValues, setinitialValues] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(100);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getTaskforMe(page, count);
                setinitialValues(response);
            } catch (error) {
                alert(error.message);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <TaskForMeList initialValues ={initialValues}/>
        </>
    )
}

export default TaskForme