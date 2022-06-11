import React, {lazy, suspense, useState} from "react";
import {
    Typography,
    Toolbar,
    Box,
    IconButton, Menu, MenuItem, Tabs, Tab
} from "@mui/material";
import TabContext from "@mui/lab/TabContext/TabContext";
import MenuIcon from "@mui/material/SvgIcon/SvgIcon";
import TabPanel from "@mui/lab/TabPanel/TabPanel";

import Vestidos from "./Vestidos";
import Pantalones from "./Pantalones";
import Faldas from "./Faldas";
import Blusas from "./Blusas";
import Shorts from "./Shorts";
import Zapatos from "./Zapatos";

const pages = ['Vestidos', 'Pantalones', 'Faldas', 'Blusas', 'Shorts', 'Zapatos'];

const Categorias = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [numOpcion, setNumOpcion] = useState(0);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleTableChange = (event, index) => {
        setNumOpcion(index);
    };

    return (
        <div>
            <TabContext value={numOpcion}>
                <Toolbar disableGutters>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) =>(
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 2, display: { xs: 'flex' }, borderColor: 'divider' }}>
                        <Tabs
                            indicatorColor="primary"
                            onChange={handleTableChange}
                            textColor="primary"
                            value={numOpcion}
                        >
                            <Tab
                                label="Vestidos"
                                onClick={handleCloseNavMenu}
                            />

                            <Tab
                                label="Pantalones"
                                onClick={handleCloseNavMenu}
                            />
                            
                            <Tab
                                label="Faldas"
                                onClick={handleCloseNavMenu}
                            />

                            <Tab
                                label="Blusas"
                                onClick={handleCloseNavMenu}
                            />

                            <Tab
                                label="Shorts"
                                onClick={handleCloseNavMenu}
                            />

                            <Tab
                                label="Zapatos"
                                onClick={handleCloseNavMenu}
                            />   
                        </Tabs>
                    </Box>
                </Toolbar>
            {numOpcion === 0 && (
                <TabPanel value={numOpcion} index={0}>
                   <p>En Coco’s Boutique tenemos los vestidos de diseño ligero,
                       con nuevos patrones muy femeninos donde el estampado floral juega un papel fundamental.
                       Desde vestidos camiseros o con bolsillos para un look informal hasta vestidos con vuelo, cinturón o cuello en V,
                       ideales para añadir una nota sofisticada a tu outfit, encuentra el modelo que mejor se adapta a tu estilo.
                       Descubre una amplia selección de vestidos casuales, básicos o románticos en sus versiones maxi, midi o mini y
                       renueva tu colección con las últimas tendencias.</p>
                       <br/>
                    <Vestidos />
                </TabPanel>
            )}

            {numOpcion === 1 && (
                <TabPanel value={numOpcion} index={1}>
                   <p>Estrena cada día un outfit diferente con nuestra selección de pantalones para mujer.
                       Pantalones de pana, terciopelo, polipiel, algodón o encerados para tus looks casual o de fin de semana.
                       Los pantalones de campana, skinny, mom fit o rectos se adaptan a cualquier silueta. Para tu outfit más
                       casual, elige pantalones cargo, estilo militar o boyfriend. Si quieres un modelo para la oficina,
                       acierta con pantalones chinos o con pinzas.</p>
                       <br/>
                    <Pantalones />
                </TabPanel>
            )}

            {numOpcion === 2 && (
                <TabPanel value={numOpcion} index={2}>
                   <p>Una falda negra es atemporal, elígela en las siluetas de la temporada y se convertirá en una prenda
                       ideal para todo el año: plisada, lisa, evasé o con aberturas, una elección sobria que te permitirá
                       crear diferentes propuestas de estilo con el resto de tu vestuario. No podrás resistirte a las faldas
                       de fiesta de tubo o asimétricas, encuentra faldas de vestir elegantes en los colores de esta temporada.
                       Reinventa cada día tus looks con faldas de pana, punto, cuero o algodón. Fácil y sencillo, es 
                       Coco’s Boutique.</p>
                       <br/>
                    <Faldas />
                </TabPanel>
            )}

            {numOpcion === 3 && (
                <TabPanel value={numOpcion} index={3}>
                   <p>Descubre la feminidad de las siluetas minimalistas de las blusas de mujer de Coco’s Boutique. 
                       Una selección de blusas de algodón, terciopelo o popelín, seda, plumeti o tul, ideales para un look a 
                       la última. Las blusas de manga larga o corta son las grandes protagonistas por su carácter atemporal. 
                       Elige blusas blancas, negras o rosas de patrones contemporáneos, o decídete por tonos neutros para un 
                       estilo más relajado.</p>
                       <br/>
                    <Blusas />
                </TabPanel>
            )}

            {numOpcion === 4 && (
                <TabPanel value={numOpcion} index={4}>
                   <p>Los shorts cortos de vestir no pueden faltar en tu armario. Elige shorts elegantes para tus estilismos de oficina o para
                       el fin de semana. Echa un vistazo a nuestros shorts cortos con cremallera y bolsillos en los colores de la temporada.
                       Consigue un outfit cómodo durante todo el día con nuestros shorts casual: shorts fluidos con lazada o goma elástica en
                       la cintura, detalles que marcan la diferencia. Lisos o estampados son una elección brillante renovar tu colección.
                       Nos encantan los shorts cortos de algodón, licra o felpa, tú eliges cómo llevarlos.</p>
                       <br/>
                    <Shorts />
                </TabPanel>
            )}

            {numOpcion === 5 && (
                <TabPanel value={numOpcion} index={5}>
                   <p>Disfruta de tus días al máximo con nuestro calzado plano: modernos zapatos de cordones, mocasines
                       con eslabones, bluchers o cómodos botines para looks relajados pero formales. Si buscas añadir un toque
                       distinto a tus looks, apuesta por nuestra colección de zapatillas casuales para mujer, un básico que ha
                       llegado para quedarse. No pueden faltar las bambas blancas con suela gruesa o deportivas con distintas
                       combinaciones de colores. ¡Opciones para todos los estilos!</p>
                       <br/>
                    <Zapatos />
                </TabPanel>
            )}
            </TabContext>
        </div>
    );
};

export default Categorias;
