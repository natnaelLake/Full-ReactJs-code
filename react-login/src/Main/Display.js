import React ,{useState,useEffect} from 'react'

function Display() {
    const [allData,setAllData] = useState([])
    // console.log()
    var count;
    useEffect(()=>{
        fetch('http://localhost:4043/reactReg')
        .then( res => res.json())
        .then(data =>{
            setAllData(data.data)
        })
    },[])
    const DisplayData=allData.map(
        (info,index)=>{
            return(
                <tr key = {index}>
                    <td>{index+1}</td>
                    <td>{info.fname}</td>
                    <td>{info.lname}</td>
                    <td>{info.email}</td>
                    <td>{info.phoneNumber}</td>

                </tr>
            )
        }
    )
  return (
    <div>
        {/* <h2>{JSON.stringify(allData)}</h2> */}
        <table className="table">
        <thead className="table-dark">
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody className='table-dark ml-5'>
                {DisplayData}
        </tbody>
</table>
</div>
  )
}

export default Display