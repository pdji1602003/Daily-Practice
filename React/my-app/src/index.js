// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// React Inline Styles with style property
// function App(){
//   const time = new Date()
//   const hour = time.getHours()
//   let timeOfDay
//   const styles = {
//     fontSize : 24
//   }

//   if(hour < 12 ){
//     timeOfDay = 'Good Morning!'
//     styles.color = "#124452"
//   } else if(hour >= 12 && hour < 17){
//     timeOfDay = 'Good Afternoon!'
//     styles.color = "#12d234"
//   } else {
//     timeOfDay = 'Good Evening!'
//     styles.color = "#aa3b35"
//   }
//   // 把style的值以物件型態儲存，在透過{}花括號設置在h1 tag上
//   return (
//     <h1 style={styles}>{timeOfDay}</h1>
//   )
// }

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))
