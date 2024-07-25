import React from 'react'
import { Topbar } from './dashboardComponents/Topbar'
import { Midcomponent } from './dashboardComponents/Midcomponent'
import { SendMoneySingle } from './dashboardComponents/SendMoneySingle'

const users = ["User1", "User2", "User3"]

export const Dashboard = () => {
  return (
    <div>
      <Topbar userName="User"/>
      <Midcomponent balance="1000"/>
      {users.map((user) => {
        return <SendMoneySingle userName={user} />
      })}
      
    </div>
  )
}
