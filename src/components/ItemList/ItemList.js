import Item from '../Item/Item';

const ItemList = ({ productos }) => {

    return (
        <div>
            <h1 className='titulo' >Nuestros Productos </h1>
            

            <section className=" row container mx-4">
               
                { productos.map((prod) => <Item key={prod.id} {...prod}/>)}

            </section>
        </div>
    )
}

export default ItemList