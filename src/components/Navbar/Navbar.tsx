
import {AppBar, Box,Button,Drawer,FormControl,IconButton,List,ListItem,ListItemButton,ListItemText,Menu,MenuItem,Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeMode } from '../../setting/themeHelpers/themeModeUtils';

const navItems = ['Home', 'About', 'Contact', 'Skills', 'Project'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setMode } = useThemeMode();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selected: 'light' | 'dark' | 'system') => {
    setMode(selected);
    handleClose();
  };

  const drawer = (
    <Box
      onClick={() => setMobileOpen(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ justifyContent: 'center' }}>
              <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                <ListItemText
                  primary={item}
                  sx={{ textAlign: 'center' }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>

      <AppBar component="nav" sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
        <Toolbar className="flex justify-between w-full "  sx={{bgcolor: (theme) => (theme.palette as any).custom.nav}}>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} className="text-white">
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="p-2 mx-2 text-white border border-white rounded"
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton edge="start" color="inherit" onClick={() => setMobileOpen(!mobileOpen)}>
              <MenuIcon />
            </IconButton>
          </Box>
          
          <FormControl>
            <IconButton onClick={handleClick} color="inherit">
              <FormatPaintOutlinedIcon />
            </IconButton>
            <Menu
             anchorEl={anchorEl} 
             open={Boolean(anchorEl)} 
             onClose={handleClose}
             >
              <MenuItem onClick={() => handleSelect('system')} >System</MenuItem>
              <MenuItem onClick={() => handleSelect('light')} >Light</MenuItem>
              <MenuItem onClick={() => handleSelect('dark')} >Dark</MenuItem>
            </Menu>
          </FormControl>

          
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: '50%' },
        }}
      >
        {drawer}
      </Drawer>

      
    </Box>
  );
};

export default Navbar;
