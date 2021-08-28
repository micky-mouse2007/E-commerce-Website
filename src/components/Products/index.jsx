import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import Banner from "../ShopTop";
import "./style.css";

const Products = ({ products, addProduct }) => {
  if (!products.length) return <Spinner />;

  return (
    <div>
      <Banner />
      <Container id="products">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={10} sm={6} md={3}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;