import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
  const { products } = props;
  return (
    <Carousel variant="dark">
      {products.map((product) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.name}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
