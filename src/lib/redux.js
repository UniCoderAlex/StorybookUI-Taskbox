import { createStore } from 'redux'

export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK'
}

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, payload: id })
export const pinTask = id => ({ type: actions.PIN_TASK, payload: id })

const taskStateReducer = (taskState) => {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(task => 
                task.id === action.payload ? {...task, state: taskState } : task)
        }
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIEVED')(state, action)
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action)
        default:
            return state
    }
}

const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
    { id: '5', title: 'I just need 2 more actions', state: 'TASK_INBOX' },
    { id: '6', title: 'So that the containers displays better', state: 'TASK_INBOX' },
]

export default createStore(reducer, { tasks:defaultTasks })