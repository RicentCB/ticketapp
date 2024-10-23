import Image from "next/image";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header (){
    return(
      <AppBar position="static" color='default' >
        <Toolbar>
          <Image
            src="/logo.png"
            alt="Logo"
            layout="fill" 
            objectFit="contain"
            />
        </Toolbar>
      </AppBar>
    );
}
export default Header;