import React from 'react'
import { List } from 'semantic-ui-react'
import "./Dane.scss"
const Dane = ({Header,children}) => (
 <div className="Dane"> <List>
    <List.Item>
      <List.Header>{Header}</List.Header>
      {children}
    </List.Item>
    {/* <List.Item>
      <List.Header>Chicago</List.Header>
      Also quite a lovely city
    </List.Item>
    <List.Item>
      <List.Header>Los Angeles</List.Header>
      Sometimes can be a lovely city
    </List.Item>
    <List.Item>
      <List.Header>San Francisco</List.Header>
      What a lovely city
    </List.Item> */}
  </List>
  </div>
)

export default Dane