import React from 'react'
import PureTaskList from './TaskList'
import { taskData, actionsData } from './Task.stories'
import { store } from '../lib/redux'
import { Provider } from 'react-redux'

export default {
    component: PureTaskList,
    title: 'TaskList',
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    excludeStories: /.*Data$/,
}

export const defaultTasksData = [
    { ...taskData, id: '1', title: 'Buy something' },
    { ...taskData, id: '2', title: 'Sell something' },
    { ...taskData, id: '3', title: 'Hit something' },
    { ...taskData, id: '4', title: 'Do something' },
    { ...taskData, id: '5', title: 'Redo something' },
    { ...taskData, id: '6', title: 'Steal something XD' },
    { ...taskData, id: '7', title: 'Destroy something' },
    { ...taskData, id: '8', title: 'Create something' },
]

export const withPinnedTasksData = [
    ...defaultTasksData.slice(0, 7),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

export const Default = () => <PureTaskList tasks={defaultTasksData} {...actionsData} />

export const WithPinnedTasks = () => <PureTaskList tasks={withPinnedTasksData} {...actionsData} />

export const Loading = () => <PureTaskList loading tasks={[]} {...actionsData} />

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />