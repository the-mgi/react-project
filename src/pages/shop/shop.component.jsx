import React, {Component} from "react";
import SHOP_DATA from "./shop.data";
import './shop.styles.scss'
import CollectionPreview from "../../components/collection-preview/preview-collection";

class ShopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map((singleCollection) => {
                        return (<CollectionPreview key={singleCollection.id}
                                                   title={singleCollection.title}
                                                   items={singleCollection.items}/>)
                    })
                }
            </div>
        );
    }
}

export default ShopPage;
