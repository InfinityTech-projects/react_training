import React from 'react'

const Table=({data})=> {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Day</th>
        <th>Trainer</th>
      </thead>
      <tbody>
        {data.map((el)=>(
          <tr>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.trainer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
