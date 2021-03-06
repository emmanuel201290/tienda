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
                   <p>En Coco???s Boutique tenemos los vestidos de dise??o ligero,
                       con nuevos patrones muy femeninos donde el estampado floral juega un papel fundamental.
                       Desde vestidos camiseros o con bolsillos para un look informal hasta vestidos con vuelo, cintur??n o cuello en V,
                       ideales para a??adir una nota sofisticada a tu outfit, encuentra el modelo que mejor se adapta a tu estilo.
                       Descubre una amplia selecci??n de vestidos casuales, b??sicos o rom??nticos en sus versiones maxi, midi o mini y
                       renueva tu colecci??n con las ??ltimas tendencias.</p>
                       <br/>
                    <Vestidos />
                </TabPanel>
            )}

            {numOpcion === 1 && (
                <TabPanel value={numOpcion} index={1}>
                   <p>Estrena cada d??a un outfit diferente con nuestra selecci??n de pantalones para mujer.
                       Pantalones de pana, terciopelo, polipiel, algod??n o encerados para tus looks casual o de fin de semana.
                       Los pantalones de campana, skinny, mom fit o rectos se adaptan a cualquier silueta. Para tu outfit m??s
                       casual, elige pantalones cargo, estilo militar o boyfriend. Si quieres un modelo para la oficina,
                       acierta con pantalones chinos o con pinzas.</p>
                       <br/>
                    <Pantalones />
                </TabPanel>
            )}

            {numOpcion === 2 && (
                <TabPanel value={numOpcion} index={2}>
                   <p>Una falda negra es atemporal, el??gela en las siluetas de la temporada y se convertir?? en una prenda
                       ideal para todo el a??o: plisada, lisa, evas?? o con aberturas, una elecci??n sobria que te permitir??
                       crear diferentes propuestas de estilo con el resto de tu vestuario. No podr??s resistirte a las faldas
                       de fiesta de tubo o asim??tricas, encuentra faldas de vestir elegantes en los colores de esta temporada.
                       Reinventa cada d??a tus looks con faldas de pana, punto, cuero o algod??n. F??cil y sencillo, es 
                       Coco???s Boutique.</p>
                       <br/>
                    <Faldas />
                </TabPanel>
            )}

            {numOpcion === 3 && (
                <TabPanel value={numOpcion} index={3}>
                   <p>Descubre la feminidad de las siluetas minimalistas de las blusas de mujer de Coco???s Boutique. 
                       Una selecci??n de blusas de algod??n, terciopelo o popel??n, seda, plumeti o tul, ideales para un look a 
                       la ??ltima. Las blusas de manga larga o corta son las grandes protagonistas por su car??cter atemporal. 
                       Elige blusas blancas, negras o rosas de patrones contempor??neos, o dec??dete por tonos neutros para un 
                       estilo m??s relajado.</p>
                       <br/>
                    <Blusas />
                </TabPanel>
            )}

            {numOpcion === 4 && (
                <TabPanel value={numOpcion} index={4}>
                   <p>Los shorts cortos de vestir no pueden faltar en tu armario. Elige shorts elegantes para tus estilismos de oficina o para
                       el fin de semana. Echa un vistazo a nuestros shorts cortos con cremallera y bolsillos en los colores de la temporada.
                       Consigue un outfit c??modo durante todo el d??a con nuestros shorts casual: shorts fluidos con lazada o goma el??stica en
                       la cintura, detalles que marcan la diferencia. Lisos o estampados son una elecci??n brillante renovar tu colecci??n.
                       Nos encantan los shorts cortos de algod??n, licra o felpa, t?? eliges c??mo llevarlos.</p>
                       <br/>
                    <Shorts />
                </TabPanel>
            )}

            {numOpcion === 5 && (
                <TabPanel value={numOpcion} index={5}>
                   <p>Disfruta de tus d??as al m??ximo con nuestro calzado plano: modernos zapatos de cordones, mocasines
                       con eslabones, bluchers o c??modos botines para looks relajados pero formales. Si buscas a??adir un toque
                       distinto a tus looks, apuesta por nuestra colecci??n de zapatillas casuales para mujer, un b??sico que ha
                       llegado para quedarse. No pueden faltar las bambas blancas con suela gruesa o deportivas con distintas
                       combinaciones de colores. ??Opciones para todos los estilos!</p>
                       <br/>
                    <Zapatos />
                </TabPanel>
            )}
            </TabContext>
        </div>
    );
};

export default Categorias;
