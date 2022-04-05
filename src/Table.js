import React, {Component} from 'react'

const TableHead=()=>{
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
}
const TableBody=(props)=>{

    const rows=props.characterData.map((row,index)=>{
       return (
           <tr key={index}>
               <td>{row.name}</td>
               <td>{row.job}</td>
               <td>
                   <button onClick={()=>props.removeCharacter(index)}>Delete</button>
               </td>
           </tr>
       )
    });
    return <tbody>{rows}</tbody>
}
//花括号的使用，解构赋值
const Table =(props)=>{
    const {characterData,removeCharacter}=props;
        return(
            <table>
                <TableHead />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )

}
export default Table