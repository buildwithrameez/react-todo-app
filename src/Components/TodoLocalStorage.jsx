const todoKey = 'reactTodo';

export const getLocalDataFunc = () => {
        const localData = localStorage.getItem(todoKey);
        if (!localData) return [];
        return JSON.parse(localData);
    };

export const setLocalDataFunc = (submitValue) => {
        return  localStorage.setItem(todoKey, JSON.stringify(submitValue));
    };    