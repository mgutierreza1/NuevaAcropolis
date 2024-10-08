import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet } from "react-router-dom";
// Iconos
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ForumIcon from '@mui/icons-material/Forum';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { Suspense } from 'react';


const MainLayout = () => {
    const { collapseSidebar } = useProSidebar();

    return (
        <div className="flex h-screen w-screen">
            <Sidebar className="h-full" style={{ background: '#a8d5e5' }}>
                <Menu>
                    <MenuItem className="menu1" icon={<MenuRoundedIcon onClick={() => { collapseSidebar(); }}/>}>
                        <h2>NUEVA ACROPOLIS</h2>
                    </MenuItem>
                    <MenuItem component={<Link to="/workshop" className="link" />} icon={<ForumIcon />}> Talleres </MenuItem>
                    <MenuItem component={<Link to="/people" className="link" />} icon={<AccountCircleRoundedIcon />}> Personas </MenuItem>
                    <MenuItem icon={<MonetizationOnRoundedIcon />}> Ingresos </MenuItem>
                    <MenuItem icon={<ArrowOutwardIcon />}> Gastos </MenuItem>
                    <MenuItem icon={<SummarizeIcon />}>Reportes</MenuItem>
                    <MenuItem icon={ <SettingsIcon />}>Configuración</MenuItem>
                </Menu>
            </Sidebar>
            <main className="flex-grow overflow-auto">
                <Suspense fallback={<div className="h-full flex items-center justify-center">Loading...</div>}>
                    <section className="h-full flex items-center justify-center">
                        <Outlet />
                    </section>
                </Suspense>
            </main>
        </div>
    );
};

export default MainLayout;