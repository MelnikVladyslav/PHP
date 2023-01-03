import { useEffect, useState } from "react";
import http from "../../http_common";
import { IProductItem } from "./types";
import { useSelector } from 'react-redux'

const HomePage = () => {

    const [list, setList] = useState<Array<IProductItem>>([]);    

    useEffect(()=>{
        http.get<Array<IProductItem>>("/api/products")
            .then(resp=> {
                const {data} = resp;
                setList(data);
            });
    },[]);

/* Add redux show */
    const products = useSelector(state =>
        state.products.find(products => products.id === productsId)
      )

    if (!products) {
        return (
          <section>
            <h2>products not found!</h2>
          </section>
        )
      }

    const content = list.map((products)=> (
        <tr key={products.id}>
            <td>{products.id}</td>
            <td>{products.name}</td>
            <td>{products.detail}</td>
        </tr>
    ));

    /* Повернення домашньої сторінки */
    return(
        <>
            {console.log("Page render web app")}
            <h1 className="text-center">Головна сторінка</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Detail</th>
                    </tr>
                </thead>

                <tbody>
                    {content}
                </tbody>

            </table>
        </>
    );
}
export default HomePage;