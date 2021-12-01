import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TBook } from '../../model/Book';
import { Box } from '@mui/system';
import { ShoppingCart } from '@mui/icons-material';

export const BookItem = (props: Props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={props.isbn}
        image={props.cover}
      />
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography gutterBottom variant="h5" color="primary" component="div">
              { props.price } €
            </Typography>
          </Box>
          <Box>
            <Button size="small">
              <ShoppingCart color="primary"/> Ajouter au panier
            </Button>
          </Box>
        </Box>
        <Box
            fontSize="h5.fontSize"
            component="div" 
            overflow="hidden"            
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            height={70}          
          >
            <Typography>
              { props.synopsis }
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

type Props = TBook
