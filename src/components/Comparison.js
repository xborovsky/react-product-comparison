import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Comparison = ({products}) =>
    products.length >= 2 ?
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-light">&nbsp;</th>
                        { products.map(product => <th key={`th-${product.id}`} className="text-center table-light">{product.name}</th>) }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="table-light">Price</th>
                        { products.map(product => <td key={`price-td-${product.id}`} className="text-center table-light">{product.price}</td>) }
                    </tr>
                    <tr>
                        <th className="table-light">Colors</th>
                        { products.map(product =>
                            <td key={`colors-td-${product.id}`} className="text-center table-light">
                                { product.colors.map(color =>
                                    <span className="bullet"
                                          style={{backgroundColor : `${color}`}}
                                          key={`${product.id}_${color}`}>
                                    </span>) }
                            </td>)
                        }
                    </tr>
                    <tr>
                        <th className="table-light">Condition</th>
                        { products.map(product =>
                            <td key={`condition-td-${product.id}`}
                                className={`text-center ${product.condition.toLowerCase()}`}>
                                {product.condition}
                            </td>)
                        }
                    </tr>
                </tbody>
            </table>
        </div> :
        null
;

Comparison.propTypes = {
    products : PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    products : state.products
});

export default connect(mapStateToProps)(Comparison);