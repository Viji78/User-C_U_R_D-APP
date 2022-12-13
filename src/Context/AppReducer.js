const handleCart = (state, action) =>{
  switch(action.type){

      case 'Remove_User':
          return{
              users:state.users.filter(user=>{
                  return user.id !== action.payload
              })
          }

          case 'Add_User':
              return {
                  users: [action.payload, ...state.users]
              }

          
          case 'Edit_User':
              const update_User = action.payload;
              const updateUser=state.users.map(user => {
                  if(user.id  ===  update_User.id)
                  {
                      return update_User;
                  }
                  return user;
              })
              return {
                  users:updateUser                                                  
          }


      default:
          return state
  }
}

export default handleCart;