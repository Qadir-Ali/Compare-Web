import React from "react";

function categories(){


return(

    <div class="categories">
        <table>
            <th>Categories</th>
            <tr><input type="checkbox" />Havels</tr>
            <tr><input type="checkbox" />Bajaj</tr>
        </table>
        <br />
        <table>
            <th>Cost</th>
            <tr><input type="checkbox" />10,000 &gt;</tr>
            <tr><input type="checkbox" />10,000 - 20,000</tr>
            <tr><input type="checkbox" />20,000 - 50,000</tr>
            <tr><input type="checkbox" />50,000 - 75,000</tr>
            <tr><input type="checkbox" />1,00,000+ </tr>
        </table>
    </div>
);
};
export default categories;