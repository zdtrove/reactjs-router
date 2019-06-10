import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            {
                id : 1,
                slug : 'iphone',
                name : 'Iphone 7',
                price : 3500000
            },
            {
                id : 2,
                slug : 'samsung',
                name : 'Samsung 8',
                price : 4500000
            },
            {
                id : 3,
                slug : 'oppo',
                name : 'Oppo 9',
                price : 7500000
            }
        ];

        var { match } = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink to={ `${url}/${product.slug}` } key={ index }>
                    <li className="list-group-item">
                        { product.id } - { product.name } - { product.price }
                    </li>
                </NavLink>
            );
        });

        var { location } = this.props;
        console.log(location);

        return (
            <div className="container">
                <h1>Danh sach san pham</h1>
                <div className="row">
                    <ul className="list-group">
                        { result }
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:name" component={ Product } />
                </div>
            </div>
        );
    }
}

export default Products;
