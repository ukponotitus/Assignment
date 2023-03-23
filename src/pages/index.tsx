import {
  IconButton,
  Stack,
  Box,
  Typography,
  Button
} from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import {ChangeEvent, FormEvent, useState} from "react";
import { useRouter } from "next/router";
import axios from 'axios';

type State = {
  password: string;
  email: string;
};
export default function SignUpPage() {
    const [input, setInput] = useState<State>({email:'', password:''});
    const [error, setError] = useState<string>('');
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      return await axios
        .post("https://clarkifre.pythonanywhere.com/auth/signup", input)
        .then((res) => {
          router.push('/home/login')
          console.log(input)
          return res;
    })
    .catch((e) => {
      console.log(e)
    });
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInput({ ...input, [name]: value });
    };
  

  return (
    <>
      <Box 
       sx={{
        fontWeight: 700,
        color: "black",
        marginBottom: {md:"1.39vw"},
        backgroundColor:"#e6e8eb",
        // border:"solid red",
         position:"fixed",
          height:"100vh", width:"100%"
      }}>
      <Typography sx={{fontWeight: 700,
        // color: "#964a8c",
        fontSize:"30px",
        marginBottom: {md:"1.39vw"},
        textAlign:"center",
        mt:"30px"}}>
        Sign up 
      </Typography>
      <Stack  component="form" spacing={2} onSubmit={handleSubmit} 
       mx="auto"  
      sx={{
      backgroundColor:"#fcfeff",
      px:"20px", mt:"70px", width:"30%", height:"30vh", pb:"10%"}} >
      <FormControl variant="standard" sx={{mt:"50px"}}>
        <Typography>
          Email
        </Typography>
      <TextField type="email" 
      name="email" 
      value={input.email} 
      onChange={handleChange}
        />
      </FormControl>
      <FormControl variant="standard">
      <Typography>
          password
        </Typography>
      <TextField
         placeholder="password"
        type="password" 
        name="password" 
        value={input.password} 
        onChange={handleChange}
        />
         </FormControl>
         <Button type='submit'
       sx={{ color:" white",
      background: "#d613bc",
     "&:hover": { backgroundColor: "#d613bc", 
     color: "white" },}}
     >Signup</Button>
         </Stack>
      </Box>
    </>
  )
}
