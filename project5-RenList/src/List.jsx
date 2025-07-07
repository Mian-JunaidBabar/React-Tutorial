function List(props) {
  const category = props.category;
  const sortedFruits = [...props.fruits].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const lowCalorieFruits = sortedFruits.filter((fruit) => fruit.calories < 100);

  const listItems = sortedFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} - {fruit.color} - {fruit.calories} calories
    </li>
  ));

  //   const listItemsLowCal = lowCalorieFruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name} - {fruit.calories} calories
  //     </li>
  //   ));

  const finalList = (
    <>
      <h3 className="category-title">{category}</h3>
      <ol className="list">{listItems}</ol>
    </>
  );

  return finalList;
}

export default List;
