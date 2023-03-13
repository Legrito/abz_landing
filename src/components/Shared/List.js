const List = ({ className, items, component: Component, componentProps }) => (
  <ul className={className}>
    {items.map(item =>
      Component ? (
        <li key={item}>
          <Component {...componentProps}>{item}</Component>
        </li>
      ) : (
        <li key={item}>{item}</li>
      )
    )}
  </ul>
);

export default List;
