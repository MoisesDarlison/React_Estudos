import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card'


const promotion = //info que vem do back-end 
{
    "id": 1,
    "title": "Notebook Acer 15,6'' A315-56-36Z1 i3 1005G1 4GB 1TB W10",
    "price": 331990,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/616xz%2BavQOL._AC_SL1000_.jpg",
    "url": "https://www.amazon.com.br/dp/B08HR4N9FF/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=zFOoM9xk.lv.Mhc14hVeaw&hsa_cr_id=3917821370001&pd_rd_plhdr=t&pd_rd_r=ebed1727-db19-4fe8-81b5-fb684e7dfa79&pd_rd_w=976kk&pd_rd_wg=VSbsE&ref_=sbx_be_s_sparkle_mcd_asin_0_img",
    "comments": [
        {
            "id": 1,
            "comment": "TELA HD"
        }
    ]
}


const PagesPromotionSearch = () => {
    return (
        <div style={{
            maxWidth: 600,
            margin: '30px auto',
        }}>
            <PromotionCard promotion={promotion} />
        </div>
    );
}
export default PagesPromotionSearch;