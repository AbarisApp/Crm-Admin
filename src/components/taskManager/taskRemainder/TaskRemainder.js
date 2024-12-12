import React, { useEffect, useState } from 'react';
import TaskReminderList from './taskReminderList/TaskReminderList';
import { searchingReminderTask, searchReminderTask } from '../../../api/login/Login';

function TaskRemainder() {
    const [initialValues, setinitialValues] = useState([]);
    let searchQuerry = null
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(100);

    // Fetch data on initial load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await searchReminderTask(page, count);
                setinitialValues(response);
            } catch (error) {
                alert(error.message);
            }
        };
        fetchData();
    }, []);

    // Debounce function
    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    // API call on search
    const handleSearch = async (searchTerm) => {


        if (searchTerm.length >= 3) {
            console.log(searchTerm, "condition");
            try {
                const response = await searchingReminderTask(page, count, searchTerm);
                setinitialValues(response);
            } catch (error) {
                console.error("Error while searching:", error.message);
            }
        } else {
            setinitialValues([]);
        }
    };

    const debouncedSearch = debounce(handleSearch,2000);

    const handleChange = (e) => {
        const value = e.target.value;
        // setsearchQuerry(value);
        debouncedSearch(value);
    };

    return (
        <>
            <TaskReminderList
                handleChange={handleChange}
                initialValues={initialValues}
                searchQuerry={searchQuerry}
            />
        </>
    );
}

export default TaskRemainder;
