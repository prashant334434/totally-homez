import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getCatgoryProperties, getTownhouseCatgoryProperties, getTownhouseCatgoryRentProperties } from '../../actions/catgoryActions'
import AgentName from './AgentName'

const TownhouseProductGridRent = (props) => {
    const [propertyCategory, setPropertyCategory] = useState("apartment")
    let publicUrl = process.env.PUBLIC_URL + '/'
    let customClass = props.customClass ? props.customClass : ''
    // console.log(data)
    const { townhouseCategoryRentProperties } = useSelector((state) => state.townhouseRentProperties)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTownhouseCatgoryRentProperties())
    }, [dispatch])

    return (
        <div>
            <div>
                <div className="ltn__product-slider-area ltn__product-gutter pt-40 pb-90 plr--7">
                    <div className="container-fluid">
                        <h1>Townhouse</h1>

                        <div className="row ltn__product-slider-item-three-active-full-width slick-arrow-1">
                            {
                                townhouseCategoryRentProperties?.map((categoryProperty) => (
                                    <div className="col-lg-4">

                                        <div key={categoryProperty?.id} className="ltn__product-item ltn__product-item-4 text-center---">
                                            <div className="product-img go-top">
                                                <Link to="/product-details"><img src={publicUrl + "assets/img/product-3/3.jpg"} alt="#" /></Link>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge bg-green">{categoryProperty?.property_for}{categoryProperty?.id}</li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="product-info">
                                                <div className="product-price">
                                                    <h2 className="product-title go-top"><Link to={`/property-details/${categoryProperty?.id}`}>{categoryProperty?.property_name}</Link></h2>

                                                    <span>AED {categoryProperty?.property_price}</span>


                                                </div>
                                                <div className="product-description">
                                                    <Link to="/contact"> {categoryProperty?.property_address}</Link><br></br>
                                                    <small>Ref No.{categoryProperty?.property_ref_no}</small>
                                                </div>
                                                <div><center>
                                                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                                        <li><span> <i className="flaticon-bed" />  {categoryProperty?.property_no_of_bedroom}</span>
                                                        </li>
                                                        <li><span><i className="flaticon-clean" />  {categoryProperty?.property_no_of_bathroom} </span>
                                                        </li>
                                                        <li><span> <i className="flaticon-square-shape-design-interface-tool-symbol" />  {categoryProperty?.property_sq_ft} sqft</span>
                                                        </li>
                                                    </ul></center>
                                                </div></div>
                                            <div className="product-info-bottom">
                                            {
                                                    categoryProperty?.property_agent_name &&
                                                    <AgentName agentId={categoryProperty?.property_agent_name}/>


                                                }
                                                <div className="wcallFlex">
                                                    <ul className='wcallFlex'>
                                                        <li className='li1'>
                                                            <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal" className='wcallFlex'>
                                                                <i className="fab fa-whatsapp callclass" ></i>
                                                                <span className='callclass hideclass'>Whatsapp</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" className='wcallFlex'>
                                                                <i className="fa fa-phone rotateclass"></i>
                                                                <span className='callclass hideclass'>Call</span>
                                                            </a>

                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                ))
                            }




                            {/* ltn__product-item */}

                            {/*  */}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TownhouseProductGridRent