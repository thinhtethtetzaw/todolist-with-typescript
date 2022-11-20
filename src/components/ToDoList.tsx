import React from 'react'
import { ITaskProps } from '../Interfaces'

interface Props {
    task: ITaskProps,
    completeTask(deleteTaskItem: string): void
}

export default function ToDoList({ task, completeTask }: Props) {
    return (
        <div className='w-full flex justify-between items-center text-white rounded-md overflow-hidden mb-2'>
            <div className='w-full flex justify-between bg-blue-400 p-2 px-3 gap-3'>
                <p className='w-full text-center border-r border-gray-200'>{task.taskName}</p>
                <p className='w-full text-center'>{task.deadline}</p>
            </div>
            <div className='bg-red-400 hover:bg-red-500 p-2 px-3' onClick={() => { completeTask(task.taskName) }}>
                x
            </div>
        </div>
    )
}
