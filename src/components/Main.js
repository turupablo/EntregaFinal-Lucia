import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Checkout from './Checkout'
import { Route, Routes } from "react-router-dom"
import Error from "./Error";


const Main = () => {
    return (
        <main>
                
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categories/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="*" element={<Error />} />
            </Routes>

        </main>
    );
}

export default Main;
