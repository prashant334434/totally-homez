import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentBlog, getBlogsApi } from "../../actions/blogActions";
import { ABOUT_IMAGE_URL } from "../../constants/config";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  getApartmentCatgoryProperties,
  getCatgoryProperties,
  getTownhouseCatgoryProperties,
} from "../../actions/catgoryActions";
import { PROPERTY_IMAGES_URL, TEAM_API_URL } from "../../constants/config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { currentTeamMember } from "../../actions/teamActions";

const BlogMap = (props) => {
  const history = useHistory();

  let carouselItems = [
    {
      id: 1,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg",
    },
    {
      id: 2,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg",
    },
    {
      id: 3,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg",
    },
    {
      id: 4,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg",
    },
    {
      id: 5,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg",
    },
    {
      id: 6,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg",
    },
    // Add more items as needed
  ];
  const [propertyCategory, setPropertyCategory] = useState("apartment");
  let publicUrl = process.env.PUBLIC_URL + "/";
  let customClass = props.customClass ? props.customClass : "";

  const { blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsApi());
  }, [dispatch]);

  const handleClick = (id, title) => {
    console.log("title", title);
    console.log("id ", id);

    dispatch(currentBlog(id));
    history.push(`/blog/${title?.toLowerCase().split(" ").join("-")}`)
  };

  if (blogs?.length > 0) {
    carouselItems = blogs;
  }
  const url = (titleName) => {
    return titleName?.split(" ")?.join("-")?.toLowerCase();
  };

  return (
    <div>
      <div>
        <div
          id="apartmentRef"
          tabindex="1"
          className="ltn__product-slider-area ltn__product-gutter pt-40 plr--7"
        >
          <div className="container-fluid">
            <div className="row  slick-arrow-1">
              <Carousel
                additionalTransfrom={0}
                arrows
                centerMode={false}
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {carouselItems?.map((items, index) => (
                  <div className="col-lg-12" key={items.id}>
                    <div className="ltn__blog-item ltn__blog-item-3">
                      <div className="ltn__blog-img">
                        <Link
                          onClick={() =>
                            handleClick(
                              items?.id,

                              items?.title
                            )
                          }
                        >
                          <img
                            src={`${ABOUT_IMAGE_URL}/${items?.blog_img}`}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="ltn__blog-brief">
                        <div className="ltn__blog-meta"></div>
                        <p className="ltn__blog-title">
                        <Link
                          onClick={() =>
                            handleClick(
                              items?.id,

                              items?.title
                            )
                          }
                        >
                            {items.title}
                          </Link>
                        </p>
                        <div className="ltn__blog-meta-btn">
                          <div className="ltn__blog-btn">
                          <Link
                          onClick={() =>
                            handleClick(
                              items?.id,

                              items?.title
                            )
                          }
                        >
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

              {/* ltn__product-item */}

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMap;
