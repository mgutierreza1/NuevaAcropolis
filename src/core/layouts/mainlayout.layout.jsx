import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link, Outlet } from "react-router-dom";
// Iconos
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ForumIcon from '@mui/icons-material/Forum';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import React, { Suspense } from 'react';


const MainLayout = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <Sidebar style={{ height: '100%', background: '#a8d5e5' }}>
                <Menu>
                    <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
                        <h2>NUEVA ACROPOLIS</h2>
                    </MenuItem>
                    <MenuItem component={<Link to="/workshop" className="link" />} icon={<ForumIcon />}> Talleres </MenuItem>
                    <MenuItem component={<Link to="/page2" className="link" />} icon={<AccountCircleRoundedIcon />}> Personas </MenuItem>
                    <MenuItem icon={<MonetizationOnRoundedIcon />}> Ingresos </MenuItem>
                    <MenuItem icon={<ArrowOutwardIcon />}> Gastos </MenuItem>
                </Menu>
            </Sidebar>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <Outlet />
                </section>
            </Suspense>
        </div>
    );
};

export default MainLayout;