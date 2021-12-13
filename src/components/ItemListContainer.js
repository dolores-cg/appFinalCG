import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemList from './ItemList';
import products from '../product-data'



export default function ItemListContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
            products.map(product =>(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ItemList key={product.id} product={product}/>
                </Grid>
            ))
        }
      </Grid>
        
    </Box>
  );
}
