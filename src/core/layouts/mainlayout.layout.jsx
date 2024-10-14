import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet } from "react-router-dom";
// Iconos
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import OutboundIcon from '@mui/icons-material/Outbound';
import ForumIcon from '@mui/icons-material/Forum';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import MoneyIcon from '@mui/icons-material/Money';
import SchoolIcon from '@mui/icons-material/School';
import SourceIcon from '@mui/icons-material/Source';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import React, { Suspense } from 'react';


const MainLayout = () => {
    const { collapseSidebar } = useProSidebar();

    return (
        <div className="flex h-screen w-screen">
            <Sidebar className="h-full" style={{ backgroundColor: '#0a504c' }}>
                <Menu>
                    <MenuItem className="menu1" icon={<MenuRoundedIcon onClick={() => { collapseSidebar(); }}/>}>NUEVA ACRÓPOLIS</MenuItem>
                    <MenuItem component={<Link to="/" className="link" />}  icon={<DashboardIcon/>}>Dashboard</MenuItem>
                    <SubMenu label='Datos' icon={<SourceIcon />}>
                        <MenuItem component={<Link to="/workshop" className="link" />} icon={<SchoolIcon />}>Talleres</MenuItem>
                        <MenuItem component={<Link to="/people" className="link" />} icon={<AccountCircleRoundedIcon />}>Alumnos</MenuItem>
                    </SubMenu>
                    <SubMenu label='Finanzas' icon={<MonetizationOnRoundedIcon />}>
                        <MenuItem icon={<MoneyIcon />}>Ingresos</MenuItem>
                        <MenuItem icon={<OutboundIcon />}>Egresos</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<SummarizeIcon />}>Reportes</MenuItem>
                    <MenuItem icon={ <SettingsIcon />}>Configuración</MenuItem>
                    <MenuItem icon={ <LogoutIcon />}>Cerrar sesión</MenuItem>
                </Menu>
            </Sidebar>
            <main className="flex-grow overflow-auto">
                <Suspense fallback={<div className="container flex items-center justify-center">Loading...</div>}>
                    <section className="container flex items-center justify-center">
                        <Outlet />
                    </section>
                </Suspense>
            </main>
        </div>
    );
};

export default MainLayout;