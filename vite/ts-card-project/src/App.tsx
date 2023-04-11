import { useState } from 'react'
import {
    Button,
    Input,
    Greet,
    Heading,
    Oscar,
    Person,
    PersonList,
    Status,
    Container,
} from './components'

function App() {
    /*
  
  const personName = {
      first: 'Bruce',
      last: 'Wayne',
  }

  const nameList = [
      {
          first: 'Bruce',
          last: 'Wayne',
      },
      {
          first: 'Clark',
          last: 'kent',
      },
      {
          first: 'Princess',
          last: 'Diana',
      },
  ]
    
     return (
         <div className='App'>
             <Greet name='Vishwas!' messageCount={100} isLoggedIn={false} />
             <Person name={personName} />
             <PersonList names={nameList} />
         </div>
     )
    
     return (
         <>
             <div className='App'>
                 <Status status='loading' />
             </div>
    
             <div className='App'>
                 <Heading>Place Hold The text</Heading>
             </div>
    
             <div className='App'>
                 <Oscar>
                     <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
                 </Oscar>
             </div>
    
             <div className='App'>
                 <Greet name='Vishwas' isLoggedIn />
             </div>
         </>
     )

     
     const [inputValue, setInputValue] =
         useState<React.SetStateAction<string>>('')
  
     console.log(inputValue)
  
     return (
         <>
             <div className='App'>
                 <Button
                     handleClick={(event, id) =>
                         console.log('Clicked', event, id)
                     }
                 />
             </div>
             <div className='App'>
                 <Input
                     handleChangde={(event) => setInputValue(event.target.value)}
                 />
             </div>
         </>
     )


     //* Styled Props For TS
     return (
         <div className='App'>
             <Container styles={{ border: '1px solid', padding: '1rem' }} />
         </div>
     )
    
    */

    const personName = {
        first: 'Bruce',
        last: 'Wayne',
    }

    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne',
        },
        {
            first: 'Clark',
            last: 'kent',
        },
        {
            first: 'Princess',
            last: 'Diana',
        },
    ]

    return (
        <>
            <div className='App'>
                <PersonList names={nameList} />
            </div>
            <div className='App'>
                <Person name={personName} />
            </div>
        </>
    )
}

export default App
