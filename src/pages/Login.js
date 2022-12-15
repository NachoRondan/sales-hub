import { useState } from "react";

import { useNavigate } from "react-router-dom";
import BackgroundLayout from "../Layout/BackgroundLayout";


import { Avatar, Box, Button, Checkbox, FormControl, FormLabel, Input, Link, Stack, Typography } from "@mui/material";

const LoginComponent = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: undefined,
        password: undefined,
    });


    const handleChange = (e) => {
        //console.log(e)
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        navigate("/mi-perfil");
    };

    return (
        <Box display="flex" alignItems={"center"}>

            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>

                <Stack >
                    <img src="SalesHub.png" alt="logo" width="256" height="256" />
                    <Typography fontSize={"4xl"}>Ingresa tu cuenta</Typography>
                    <Typography fontSize={"lg"} color={"black"}>
                        y disfruta de todas las funcionalidades ✌️
                    </Typography>
                </Stack>
                <Box rounded={"lg"} boxShadow={"lg"}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel color="secondary">Email address</FormLabel>
                                <Input
                                    color="secondary"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="password" >
                                <FormLabel color="secondary">Password</FormLabel>
                                <Input
                                    color="secondary"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox color="secondary">Recordarme</Checkbox>
                                    <Typography href="/forgot" color="secondary" textAlign={"right"}>
                                        Forgot password?
                                    </Typography>
                                </Stack>

                            </Stack>
                        </Stack>
                        <Button type="submit" sx={{ mt: 3, mb: 1 }} fullWidth variant={"contained"} color="primary"
                        
                        startIcon={
                            <Avatar
                              src={
                                "fb.png"
                              }
                            />
                          }
                        >
                                    {"Ingresa con Facebook"}
                                </Button>
                                <Button
                                    color="success"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Ingresar
                                </Button>
                    </form>
                </Box>
            </Stack>
        </Box>
    );
};

const Login = (props) => {
    return (
        <BackgroundLayout
            component={
                <LoginComponent />
            }
        />
    );
};

export default Login;