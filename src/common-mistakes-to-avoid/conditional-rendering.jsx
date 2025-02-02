 export const users=[
  {id:1,name:"ahmed"},
  {id:2,name:"rachid"},
  {id:3,name:"hajer"},
]

const DisplayUsers=({users})=>{
return <div>{users?.length > 0 && users.map(user=><h3 key={user.id}>{user?.name}</h3>)}</div>
}

export default function ConditionalRendering(){
return <DisplayUsers users={users} />
}