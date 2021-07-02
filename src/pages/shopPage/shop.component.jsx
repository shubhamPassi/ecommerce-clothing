import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";

class shopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        console.log(collections);
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherSectionProps }) => (
                    <CollectionPreview key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default shopPage;
