import React from "react";
import "./style.css";
import { useState } from "react"

 

export default function App() {

   const employee = [

    {
      name:"Rahul",
      id:1,
      companyname: "virtusa"
    },
    {
      name:"Nihil",
      id:2,
      companyname:"virtusa"
    },
    {
      name:"dani",
      id:3,
      companyname : "NTT Data"

    },
    {
      name:"Madhan",
      id:4,
      companyname:"NTT Data"

    },
    {
      name:"wasim",
      id:5,
      companyname:"Mr.Cooper"
    }
]
  
 const [val,setValue] = useState("")
 const  [employees,setEmployees] = useState(employee)
 const[searchData,setSearchData] = useState("")
 
  const F = function filteredlist (val){

if(val === "")
 { return	employee
}
else {

   const b = employees.filter((item) =>{
    console.log(item.companyname.toLowerCase(),val,"item.company 47")
    return  item.companyname.toLowerCase() === val.toLowerCase()
  })
   console.log(b,"bbbbb")
  return b 
 }}
 
 //console.log(filteredlist(val), "filterlist",val,"54")

 function searchbyName (event)  {
  const entry = event.target.value
  var updatedlist = [...employee]
  updatedlist= updatedlist.filter ((objects) =>{ 
    return (
   objects.name.toLowerCase() === entry.toLowerCase()) 
    
})
  return F(updatedlist)
}
console.log(val,"valllll")

function searchbyCompany (event){
  const entry = event.target.value
  var updatedlist = [...employee]
  updatedlist = updatedlist.filter ((objects) => {
return (
objects.companyname.toLowerCase()=== entry.toLowerCase()
)
 })
  return F(updatedlist)
}



return (
    <div className= "main">
<input list  = "data"onChange ={(e) =>setValue(e.target.value)}  placeholder = "search..."/> 
<datalist  id = "data">

{employee.map (options=><option>{options.companyname}</option>)}

  </datalist>
<input type = "text"  onChange = {searchbyName} placeholder = " search emp name ..." />
<input type= "text" onChange = {searchbyCompany}  placeholder= " search by company..."/>
<button onClick = {()=> setValue(employee)}> clear</button>
<table>
<thead>
<tr>
<th>name</th>
<th>id</th>
<th>companyname</th>
</tr>
</thead>
<tbody>
{F(val).map((data)=>(
  
<tr>
  
<td>{data.name}</td>
<td>{data.id}</td>
<td>{data.companyname}</td>
</tr>
))}

</tbody>
</table>

    </div>
  )
}
