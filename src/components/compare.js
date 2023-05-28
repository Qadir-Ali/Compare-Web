import React from "react";

function Compare(){

    return(
        <div>
             <div class="hm-right fadeInUp">
                <div class="compare-product">
                    <div class="cpHd slideInUp">
                        COMPARE PRODUCTS
                    </div>
                    <div class="comparefield">
                                
                        <p class="b-product">
                                <select >
                                    <option value="mobiles">Mobiles</option>
                                    <option value="tablets">Tablets</option>
                                    <option value="cameras">Cameras</option>
                                    <option value="refrigerators">Refrigerators</option>
                                    <option value="washingmachines">Washing Machines</option>
                                    <option value="microwave-ovens">Microwave Ovens</option>
                                    <option value="hard-disks">Hard Disks</option>
                                    <option value="televisions">Televisions</option>
                                    <option value="printers">Printers</option>
                                    <option value="airconditioners">Airconditioners</option>

                                </select>
                        </p>
                                
                        <div class="b-product-cat">
                                    <input type="text" placeholder="Type Product (1) Name" />
                        </div>
                        <div>V/S</div>
                        <div class="b-product-cat">
                            <input  type="text" placeholder="Type Product (2) Name" />
                        </div>
                        <p></p>
                    </div>
                    <p class="comfeature">
                        <input type="submit" />
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Compare;