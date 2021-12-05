// import * as React from "react";
// import { useCallback } from 'react'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../firebase'

// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CardContent from '@mui/material/CardContent';
// <link
//   rel="stylesheet"
//   href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
// />



// export const Login = () => {
//   const handleSubmit = useCallback(async event => {
//     event.preventDefault()
//     const { email, password } = event.target.elements
//     try {
//       await signInWithEmailAndPassword(auth, email.value, password.value)
//     } catch (e) {
//       alert(e.message)
//     }
//   }, [])

//   return (
//     <Card sx={{ width: 325, padding: 5, margin: 5, height: 300 }}>
//       <CardContent>
//       <form onSubmit={handleSubmit}>
//               <label htmlFor="email">
//                 <Typography>Email</Typography>
//               </label>
//               <input name="email" type="text" />
//               <label htmlFor="password">
//                 <Typography>Password</Typography>
//               </label>
//               <input name="password" type="password" />
//       </form>
//       <Button type="submit">Login</Button>
//       </CardContent>
//     </Card>
//   )
// }

