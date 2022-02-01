import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

class Gridview extends Component {
    constructor(props) {
        super(props);

    }
    Productaddcart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("CartProduct"));
        if (Cart == null)
            Cart = new Array();
        let Productadd = Cart.find(product => product.ProductID === ProductID);
        if (Productadd == null) {
            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("CartProduct");
            localStorage.setItem("CartProduct", JSON.stringify(Cart));
            var flag=0;
            if(flag == 0)
            {
                toast.success("Item Added to Cart");
                flag=1;
            }
        }
        else {
            toast.warning("Item is already in Cart");
        }
    }
    Productaddwishlist(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("WishlistProduct"));
        if (Cart == null)
            Cart = new Array();

        let Productadd = Cart.find(product => product.ProductID === ProductID);
        if (Productadd == null) {

            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("WishlistProduct");
            localStorage.setItem("WishlistProduct", JSON.stringify(Cart));

            toast.success("Item Added to WishList");
        }
        else {
            toast.warning("Item is already in WishList");
        }


    }
    CartItems(ID) {
        let checkcart = false;
        var Cart = JSON.parse(localStorage.getItem("CartProduct"));
        if (Cart && Cart.length > 0) {
            for (const cartItem of Cart) {
                if (cartItem.ProductID === ID) {
                    checkcart = true
                }
            }
        }
        return checkcart;
    }
    WishlistItems(ID) {
        let wishlist = false;
        var Wish = JSON.parse(localStorage.getItem("WishlistProduct"));

        if (Wish && Wish.length > 0) {
            for (const wishItem of Wish) {
                if (wishItem.ProductID === ID) {
                    wishlist = true
                }
            }
        }
        return wishlist;
    }
    render() {
        const { productdata } = this.props;
        return (
            <div className="col-lg-4 col-md-6">
                <div className="product-item">
                    <Link to={`/product-single/${productdata.category}/${productdata.id}`}>
                    <div className="product-img">
                        <img className="img-fluid" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="" />
                    </div>
                    </Link>
                    <div className="product-desc"> <Link to="/product-single" className="product-name mt-4 mb-2 d-block link-title">{productdata.name}</Link>
                        <span className="product-price"><del className="text-muted">${productdata.price}</del> ${productdata.salePrice}</span>
                        <div className="product-link mt-3">
                            {!this.CartItems(productdata.id) ?
                                <Link to="#" onClick={() => this.Productaddcart(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="add-cart " rel="nofollow"><i className="ti-bag mr-2" />Add to
                            cart</Link>
                                :
                                <Link to="/cart" className="add-cart" rel="nofollow"><i className="ti-bag mr-2" />View Cart</Link>
                            }
                            {!this.WishlistItems(productdata.id) ?
                                <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="wishlist-btn" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top"><i className="ti-heart" /></Link>
                                :
                                <Link to="#" className="wishlist-btn"><i className="ti-heart" /></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gridview;