import cart from '../assets/cart.svg'

const CardWidget = (props) => {
    const { stock } = props;
    return (
        <div>
            <button><img src={cart} width="30" height="30" class="d-inline-block align-top" alt=""/><span>{stock}</span></button>
        </div>
    )
}

export default CardWidget