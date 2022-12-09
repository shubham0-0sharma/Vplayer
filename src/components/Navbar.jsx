import React from "react";
import { Stack } from "@mui/material";
import {logo} from "../utils/constant"
import { Link } from "react-router-dom";
import {SearchBar} from "./";


const Navbar = () => {
    return (
        <Stack direction="row"  justifyContent='space-between' alignItems="center" p={2}
        sx={{position: 'sticky' , backgroundColor:'#000',top:0}}>
            {" "}
            <Link to="/" style={{display:"flex", alignItems:"center"}}>
                <img src={logo} alt="VPlayer-Logo" height={45} />
            
            </Link>

            <SearchBar/>
        </Stack>
    );
};

export default Navbar;
