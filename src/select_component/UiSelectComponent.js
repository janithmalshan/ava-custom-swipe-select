import React from 'react';
import {UiSelect} from "./UiSelect";

export default class UiSelectComponent extends React.Component {

    render() {
        const data =[{"value":"16"},{"value":"24"},{"value":"37"},{"value":"56"},{"value":"84"},{"value":"94"},{"value":"114"}];
        const listItems = data.map((d) => <div className="price-item" key={d.value}>{d.value}</div>);

        return (
            <div className="select-wrapper">
                <UiSelect price={listItems}/>
                <p className="select-wrapper__month">€/Month</p>
            </div>
        );
    }
}
