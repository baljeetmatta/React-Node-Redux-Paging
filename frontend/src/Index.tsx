import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { GET_ALL_USERS } from "./queries";
type UserType={
    id:number,
    email:string,
    name:string,
    city:string
}
type UserDataType={
    users:UserType[];
}
const Index=()=>{

     const {loading,error,data}=   useQuery<UserDataType>(GET_ALL_USERS);
   // const [users,setUsers]=useState<UserType[]|undefined>(undefined)
    // useEffect(()=>{
    //         fetch("http://localhost:4000",{
    //             method:"POST",
    //             headers:{
    //                 "Content-type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 query:`
    //                 query getAllUsers{
    //                 	users{
    //                         id,name,email,city
    //                         }
    //                     }
    //                 `

    //             })
    //         }).then((response)=>{
    //             return response.json();
    //         }).then((response)=>{

    //             console.log(response);
    //             setUsers(response.data.users);

    //         })


    // },[])

if(loading)
    return <div>Loading...</div>

if(error)
    return <div>Error in Loading...</div>
    
return (
        <>
            Loading...

            {
                data?.users?.map((item)=>{
                    return (
                        <>
                        <div>
                            {item.name} - {item.email}
                        </div>
                        </>
                    )
                })
            }
        </>
    )

}

export default Index;
