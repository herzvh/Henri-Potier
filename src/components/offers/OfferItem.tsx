import { Button, CardActions, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { TOffer } from '../../model/Offer';

export const OfferItem = (props: Props) => {
    const theme = useTheme()
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography gutterBottom variant="h5" color="primary" component="div">
              {
                  props.type === "percentage" && (
                      <>
                        { `Une réduction de ${props.value} % s’appliquant sur le prix de l’ensemble des livres` }
                      </>
                  )
              }
              {
                  props.type === "minus" && (
                      <>
                        { `Une déduction directement applicable en caisse d’un montant de ${props.value} €` }
                      </>
                  )
              }
              {
                  props.type === "slice" && (
                      <>
                        { `Un remboursement de ${props.value} € par tranche de ${props.sliceValue} €` }
                      </>
                  )
              }
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
          <Button variant="contained" style={{ color: theme.palette.primary.main, backgroundColor: 'black' }}>
              ça m'intéresse
          </Button>
      </CardActions>
    </Card>
  );
}

type Props = TOffer
