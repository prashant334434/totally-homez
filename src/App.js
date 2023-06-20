import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeV7 from "./components/home-v7";

import log from "loglevel";

import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Error from "./components/404";

import ProdductDetails from "./components/product-details";

import BlogGrid from "./components/blog-grid";

import Blog from "./components/blog";

import BlogDetails from "./components/blog-details";

import ShopGridV1 from "./components/shop-components/shop-right-sidebar";
import OffPlan from "./components/section-components/OffPlan";

import NewContact from "./components/NewContact";
import TeamsNew from "./components/TeamsNew";
import PropertyType from "./components/shop-components/PropertyType";
import CarouselDetails from "./components/CarouselDetails";
import aboutUs from "./components/about-uss";
import CareerV1 from "./components/careerV1";
import ListWithUs from "./components/listwithus";
import GridPage from "./components/shop-components/GridPage";
import ShopNew from "./components/shop-components/ShopNew";
import Cummunity from "./components/shop-components/Cummunity";
import GuideLine from "./components/shop-components/GuideLine";
import BreadCrumbs from "./components/breadcrums";
import CommunityGrid from "./components/categoryyyy-grid";
import CategoryGrid from "./components/categoryyyy-grid";
import CategoryGrid11 from "./components/categoryyyy-grid";
import OffPlanCategory from "./components/offplan-category";
import LevelPage from "./components/LevelPage";

import TypePage from "./components/TypePage";
import SubCommunityPage from "./components/SubCommunityPage";
import CommunityPage from "./components/CommunityPage";
import TypePropertyPage from "./components/shop-components/TypePropertyPage";
import TeamV2 from "./components/section-components/team-v2";
import Team_Details from "./components/team-details";
import OurTeam from "./components/section-components/ourTeam";
import GoogleMapOnPlaceBasis from "./components/global-components/googleMaps";
import GoogleMap from "./components/section-components/GoogleMap";
import ContactForm1 from "./components/section-components/ContactForm1";
import Contact2 from "./components/section-components/Contact2";
import Contact3 from "./components/section-components/Contact3";
import ContactPage from "./components/ContactPage";
import SideEffect from "./utils/cleanup";
import TailwindSlider from "./components/TailwindSlider";
import ExclusiveProperties from "./components/section-components/ExclusiveProperties";
import ExclusivePropertiesCommunity from "./components/section-components/ExclusivePropertiesCommunity";
import ExclusivePropertiesSubCommunity from "./components/section-components/ExclusivePropertiesSubCommunity";
import ExclusivePropertiesLevel from "./components/section-components/ExclusivePropertiesLevel";
import NewSlide from "./components/NewSlide";

const App = () => {
  log.setLevel(log.levels.DEBUG);

  const slides = [
    {
      id: 1,
      title: "Slide 1",
      imageUrl: "https://placeimg.com/640/480/tech",
    },
    {
      id: 2,
      title: "Slide 2",
      imageUrl: "https://placeimg.com/640/480/nature",
    },
    {
      id: 3,
      title: "Slide 3",
      imageUrl: "https://placeimg.com/640/480/animals",
    },
  ];
  return (
    <BrowserRouter>
      <div>
        <SideEffect />
        <Switch>
          <Route exact path="/" component={HomeV7} />
          <Route
            exact
            path="/properties-for:property_type:property_city"
            component={ExclusiveProperties}
          />

          <Route path="/career" component={CareerV1} />
          <Route path="/list-with-us" component={ListWithUs} />

          {/* <Route exact path="/team" component={TeamV2} /> */}
          <Route exact path="/team/:name" component={TeamDetails} />
          <Route path="/404" component={Error} />
          {/* <Route path="/" component={ Shop } /> */}
          {/* <Route path="/shop-grid" component={ ShopGrid } /> */}
          {/* <Route path="/shop" component={ ShopLeftSidebar } /> */}
          {/* <Route path="/shopjhfe" component={ ShopRightSidebar } /> */}

          <Route path="/product-details" component={ProdductDetails} />
          {/* blog */}
          <Route path="/blogs" component={BlogGrid} />
          <Route
            exact
            path="/best-communites-in-dubai"
            component={CategoryGrid11}
          />
          <Route
            exact
            path="/offplan-projects-in-dubai"
            component={OffPlanCategory}
          />
          {/* <Route path="/blog-right-sidebar" component={ BlogRightSidebar } /> */}
          <Route path="/blog" component={Blog} />

          <Route path="/blog-details" component={BlogDetails} />
          {/* <Route path="/contact" component={ Contact } /> */}

          <Route
            exact
            path="/offplan-projects-in-dubai/:offPlanCategoryName"
            component={OffPlan}
          />

          <Route
            exact
            path="/property-details/:id"
            component={ProdductDetails}
          />
          <Route
            exact
            path="/:property_city/:property_community/:property_type-for-:property_for-:property_sub_community/TH:id"
            component={ProdductDetails}
          />
          <Route
            exact
            path="/:property_city/:property_community/:property_sub_community/:property_type-for-:property_for-:property_level/TH:id"
            component={ProdductDetails}
          />
          <Route exact path="/contact-us" component={NewContact} />
          <Route exact path="/team" component={OurTeam} />

          {/* <Route exact path="/property/:type" component={PropertyType} />
          <Route exact path="/property/:type" component={PropertyType} /> */}
          <Route exact path="/tt" component={TailwindSlider} />
          {/* <Route exact path="/property/:type" component={PropertyType} /> */}
          {/* <Route exact path="/tt" component={NewSlide} /> */}

          <Route exact path="/about-us" component={aboutUs} />
          <Route exact path="/shop-page" component={ShopNew} />
          <Route path="/contact" component={ContactPage} />
          {/* <Route exact path="/contact2" component={Contact2} />
          <Route exact path="/contact3" component={Contact3} /> */}
          <Route
            exact
            path="/best-communites-in-dubai/:communityName"
            component={GuideLine}
          />
          <Route exact path="/bread-crums" component={BreadCrumbs} />
          {/* <Route exact path="/:property_city/:property_community/:property_sub_community/:property_type-for-:property_for" component={ LevelPage } /> */}
          <Route
            path="/:property_city/:property_community/:property_sub_community/:property_type-for-:property_for-:property_level"
            component={LevelPage}
          />
          <Route
            exact
            path="/:property_city/:property_community/:property_type-for-:property_for-:property_sub_community"
            component={SubCommunityPage}
          />
          <Route
            exact
            path="/:property_city/:property_type-for-:property_for-:property_community"
            component={CommunityPage}
          />
          <Route
            exact
            path="/:property_type-for-:property_for-:property_city"
            component={TypePropertyPage}
          />

          <Route exact path="/google-maps" component={GoogleMapOnPlaceBasis} />
          <Route
            exact
            path="/google-maps-lat-lang-test"
            component={GoogleMap}
          />

          <Route
            exact
            path="/properties/properties-for-:property_for-:property_community"
            component={ExclusivePropertiesCommunity}
          />

          <Route
            exact
            path="/properties/community/properties-for-:property_for-:property_subomm"
            component={ExclusivePropertiesSubCommunity}
          />

          <Route
            exact
            path="/properties/community/subcomm/properties-for-:property_for-:property_level/th1"
            component={ExclusivePropertiesLevel}
          />

          <Route
            exact
            path="/properties/community/subcomm/th1"
            component={ExclusivePropertiesLevel}
          />
        </Switch>
        amit
      </div>
    </BrowserRouter>
  );
};

export default App;
