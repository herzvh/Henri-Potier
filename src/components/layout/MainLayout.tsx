import { AppBar, Badge, Container, Grid, Toolbar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import { BookSharp, ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { ShoppingCartAtom } from "../../state/ShoppingCartStore"
import { useRecoilValue } from "recoil"

export const MainLayout: React.FC = (props) => {
    const classes = useStyles()
    const shoppingCartState = useRecoilValue(ShoppingCartAtom)

    return (
        <>
            <AppBar 
                className={classes.appBar}
                style={{ position: 'sticky', top: 0, zIndex: 999 }}
            >
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid lg={2}>
                            <img src="/harry-potter-logo.png" height={63}/>
                        </Grid>
                        <Grid lg={7}>
                            <Grid
                                container
                                alignItems="center" 
                                spacing={3}
                                wrap="nowrap"
                            >
                                <Grid item>
                                        <Box display="flex" alignItems="center">
                                            <BookSharp/>
                                            <Link to="/">
                                                <Typography className="fw-700" color="primary">
                                                    Livres
                                                </Typography>
                                            </Link>
                                        </Box>
                                </Grid>
                                <Grid item>
                                        <Box display="flex" alignItems="center">
                                            <Link to="/shopping-cart">
                                                {
                                                    shoppingCartState.length ? (
                                                        <Badge badgeContent={shoppingCartState.length} color="primary">
                                                            <ShoppingCart style={{ color: "black" }}/>
                                                        </Badge>
                                                    ) : (
                                                        <ShoppingCart style={{ color: "black" }}/>
                                                    )
                                                }
                                            </Link>
                                        </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid lg={3}>
                            <Grid
                                container
                                alignItems="center" 
                                spacing={3}
                                wrap="nowrap"
                            >
                                <Grid item lg={4}>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                {props.children}
            </Container>
        </>
    )
}

const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: 'white !important',
        height: '63px !important'
    },
    languageSelect: {
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none !important",
        },
        "& .MuiSvgIcon-root": {
            display: "none"
        }
    }
}))
