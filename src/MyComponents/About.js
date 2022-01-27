import React from 'react'

export const About = () => {
    return (
        <div className="about">
            This is about your todo list
            <p>To Do List - Platform to all your daily dask! </p>
            <p>It allows users to manage their tasks from. A truly cross platform task management app that generally
                 used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks
                  at the top of the list, 
                and the least important tasks at the bottom. It is helpful in planning our daily schedules</p>
                <p>{new Date().toLocaleString()}</p>
                <img className="clock" src="https://cdn.pixabay.com/photo/2016/09/16/09/20/alarm-1673577_960_720.png"/>
         
        </div>
    )
}
