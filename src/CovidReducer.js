let initialState={covidData:[],checkbox:[],totTest:"1000",totConfirmed:0,totRecovered:0,barDataStore:[]}
function FormReducer(state =initialState,action){
    console.log(action)
    console.log(initialState.covidData)

    switch(action.type){
        case 'save':
          console.log("save")
        return{...state,covidData:action.covidData}

        case 'save-checkbox':
          console.log("saved checkbox")
        return{...state,checkbox:action.checkbox}
        
        case 'save-test':
          console.log("saved test")
        return{...state,totTest:action.totTest}

        case 'save-confirmed':
          console.log("saved confirmed")
        return{...state,totConfirmed:action.totConfirmed}

        case 'save-recoverd':
          console.log("saved recoverd")
        return{...state,totRecovered:action.totRecovered}

        case 'save-barData':
          console.log("saved bardata")
        return{...state,barDataStore:action.barDataStore}
        

      

        

        


    
        


        default:
        return state

    }
}
export default FormReducer