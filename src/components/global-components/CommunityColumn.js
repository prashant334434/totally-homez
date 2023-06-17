import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { allEmptyStrings, replaceSpacesWithHyphensAndLowerCase } from "../../utils/propertyUtils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CommunityColumnProperty = ({
  loading,
  getSubCommunitiesInaCommunity,
}) => {
  console.log("getSubCommunitiesInaCommunity", getSubCommunitiesInaCommunity);
  const {property_city,property_type,property_for,property_community}=useParams()
  let subCommunityArray = [];
  if (getSubCommunitiesInaCommunity) {
    for (let i = 0; i < getSubCommunitiesInaCommunity.length; i++) {
      subCommunityArray.push(getSubCommunitiesInaCommunity[i]?.property_sub_community);
    }
  }

  console.log("subCommunityArray",subCommunityArray)
  const [itemsToShow, setItemsToShow] = useState(4);
  const showmore = () => {
    setItemsToShow(subCommunityArray.length);
  };

  const showless = () => {
    setItemsToShow(4);
  };

  useEffect(() => {
    const $ = window.$;
    let publicUrl = process.env.PUBLIC_URL + "/";

    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";
    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);
        $(window).scrollTop(0);
        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "Footer logo";
  if (loading) {
    return <Loader />;
  }
  if (!subCommunityArray || subCommunityArray.length === 0 || allEmptyStrings(subCommunityArray)) {
    return null; // Render nothing if there are no elements in getSubCommunitiesInaCommunity or all elements are empty strings
  }


  const showMoreLessVisible = getSubCommunitiesInaCommunity.length > 3;
  return (
    <footer className="ltn__footer-area ">
      <div className="footer-top-area ">
        <div className="container section-bg-1 pt-30 shadowboxing">
          <div className="col-lg-12 ">
            <div className="row">
              {subCommunityArray
                ?.slice(0, itemsToShow)
                .map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-md-4 col-sm-4 col-12"
                  >
                    <div className="footer-widget-breadcrum footer-menu-widget clearfix">
                      <div className="footer-menu go-top">
                        <ul>
                          <li>
                            <Link to={`/${property_city}/${property_community}/${property_type}-for-${property_for}-${replaceSpacesWithHyphensAndLowerCase(item)}`}>
                              {item}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              {showMoreLessVisible && (
                <div className="columncss" onClick={() => setItemsToShow(4)}>
                  Show Less
                </div>
              )}
              {showMoreLessVisible && itemsToShow === 4 && (
                <div
                  className="columncss"
                  onClick={() =>
                    setItemsToShow(getSubCommunitiesInaCommunity.length)
                  }
                >
                  Show More
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CommunityColumnProperty;
