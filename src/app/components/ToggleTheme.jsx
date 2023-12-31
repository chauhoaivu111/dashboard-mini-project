import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../context/themeProvider';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const  ToggleTheme = () => {
const {darkMode, handleDarkModeToggle} = useThemeContext();
  return (
    <div>
      <Tooltip title ={darkMode ? "Light mode" : "Dark mode"}>
        <IconButton sx={{ ml: 1 }} onClick={handleDarkModeToggle} color="inherit">
          {darkMode ?  <Brightness7Icon /> : <Brightness4Icon/>}
          </IconButton>
      </Tooltip>
    </div>
  )
}

export default ToggleTheme