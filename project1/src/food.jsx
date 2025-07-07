function App() {
    const foodItems = [
        { name: 'Pizza', price: 12.99 },
        { name: 'Burger', price: 8.99 },
        { name: 'Pasta', price: 10.99 },
        { name: 'Salad', price: 7.99 },
        { name: 'Sushi', price: 15.99 }
    ];
    
    return (
        <ul>
            {foodItems.map((item, index) => (
                <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                </li>
            ))}
        </ul>
    );
}

export default App;