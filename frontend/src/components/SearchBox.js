// import React, { useState } from 'react'
// import { Button, Form } from 'react'
// import { useHistory } from 'react-router-dom'

// function SearchBox() {
//     const [keyword, setKeyword]  = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault()
//     }
//     return(
//         <Form onSubmit={submitHandler} inline>
//             <Form.Control
//             type='text'
//             name='q'
//             onChange={ (e) => setKeyword(e.target.value)}
//             className='mr-sm-2 ml-sm-5'
//             ></Form.Control>

//             <Button
//                 type='submit'
//                 variant='online-success'
//                 className='p-2'
//             >
//                 Submit
//             </Button>

//         </Form>

//     )
// }

// export default SearchBox