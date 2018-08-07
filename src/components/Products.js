import React, { Component } from 'react';
import Loader from './common/Loader';
import { loadProducts } from '../api/api';
import Product from './Product';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            loading : true
        };
    }

    componentDidMount() {
        loadProducts().then(data => this.setState({products : data.products, loading : false}));
    }

    render() {
        const { products, loading } = this.state;
        return (
            loading ?
                <Loader /> :
                <div className="row">
                    {
                        products.map((product) => <Product product={product} key={product.id} />)
                    }
                </div>
        );
    }
}

export default Products;