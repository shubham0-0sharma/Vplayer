import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const navigate = useNavigate()
    const handleChangeForSeacrh = (e) =>
    {
        setsearchTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setsearchTerm('')
        }
    };
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 },
            }}
        >
            <input onChange = {handleChangeForSeacrh} className="search-bar" placeholder="Search..." value={searchTerm} />
            <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
                <Search></Search>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
