import ItemComponent from './ItemComponent';
import items from './items';

function App() {
    return (
        <>
            <h1>Hello World!</h1>
            <ItemComponent item={items} onUpdate={(item) => false } />
        </>
    );
}

export default App
