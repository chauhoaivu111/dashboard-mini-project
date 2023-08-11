import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../theme/themeProvider';
import { IconButton } from '@mui/material';

const  ToggleTheme = () => {
    const {darkMode, handleDarkModeToggle} = useThemeContext();
  return (
    <div>
        <IconButton sx={{ ml: 1 }} onClick={handleDarkModeToggle} color="inherit">
          {darkMode ?  <Brightness7Icon /> : <Brightness4Icon/>}
          </IconButton>
    </div>
  )
}

export default ToggleTheme