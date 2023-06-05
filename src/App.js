import products from "./products.json";
import Container from "./components/Container";

const Item = ({ item }) => {
  return (
    <li className="item" data-testid="product-item">
      <img src={item.images[item.images.length - 1]} alt={item.title}></img>
      <h4> {item.title} </h4>
      <p> {item.description} </p>
      <span> {item.brand} </span>
      <span> {item.price} </span>
    </li>
  );
};

function App() {
  const smartphones = products.filter(
    (product) => product.category === "smartphones"
  );
  return (
    <Container>
      <ul className="list" data-testid="product-list">
        {smartphones
          ? smartphones.map((smartphone) => (
              <Item key={smartphone.id} item={smartphone} />
            ))
          : null}
      </ul>
    </Container>
  );
}

export default App;
