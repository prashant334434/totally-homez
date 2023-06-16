import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allEmptyStrings } from "../../utils/propertyUtils";

const SubCommunityColumnProperty = ({ getLevelsInASubCommunity }) => {
  let levelsArray = [];
  if (getLevelsInASubCommunity) {
    for (let i = 0; i < getLevelsInASubCommunity.length; i++) {
      levelsArray.push(getLevelsInASubCommunity[i].property_level);
    }
  }
  console.log(levelsArray);
  const [itemsToShow, setItemsToShow] = useState(8);
  const showmore = () => {
    setItemsToShow(levelsArray.length);
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
  if (!levelsArray || levelsArray.length === 0 || allEmptyStrings(levelsArray)) {
    return null; // Render nothing if there are no elements in getSubCommunitiesInaCommunity or all elements are empty strings
  }

  const showMoreLessVisible = getLevelsInASubCommunity.length > 3;
  return (
    <footer className="ltn__footer-area ">
      <div className="footer-top-area ">
        <div className="container section-bg-1 pt-30 shadowboxing">
          <div className="col-lg-12 ">
            <div className="row">
              {levelsArray?.slice(0, itemsToShow).map((item, index) => (
                <div key={index} className="col-xl-3 col-md-4 col-sm-4 col-12">
                  <div className="footer-widget-breadcrum footer-menu-widget clearfix">
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          {item}
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
                    setItemsToShow(levelsArray.length)
                  }
                >
                  Show More
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SubCommunityColumnProperty;
