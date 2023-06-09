import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeV7 from './components/home-v7';

import log from 'loglevel';


import Team from './components/team';
import TeamDetails from './components/team-details';
import Error  from './components/404';

import ProdductDetails from './components/product-details';


import BlogGrid from './components/blog-grid';

import Blog from './components/blog';

import BlogDetails from './components/blog-details';

import ShopGridV1 from './components/shop-components/shop-right-sidebar';
import OffPlan from './components/section-components/OffPlan';

import NewContact from './components/NewContact';
import TeamsNew from './components/TeamsNew';
import PropertyType from './components/shop-components/PropertyType';
import CarouselDetails from './components/CarouselDetails';
import aboutUs from './components/about-uss';
import CareerV1 from './components/careerV1';
import ListWithUs from './components/listwithus';
import GridPage from './components/shop-components/GridPage';
import ShopNew from './components/shop-components/ShopNew';
import Cummunity from './components/shop-components/Cummunity';
import GuideLine from './components/shop-components/GuideLine';
import BreadCrumbs from './components/breadcrums';
import CommunityGrid from './components/categoryyyy-grid';
import CategoryGrid from './components/categoryyyy-grid';
import CategoryGrid11 from './components/categoryyyy-grid';
import OffPlanCategory from './components/offplan-category';
import LevelPage from './components/LevelPage';
import CommunityPage from './components/SubCommunityPage';
import SubCommunityPage from './components/SubCommunityPage';
import TypePage from './components/TypePage';



 
 const App = () => {
  log.setLevel(log.levels.DEBUG);

    const slides = [
        {
          id: 1,
          title: 'Slide 1',
          imageUrl: 'https://placeimg.com/640/480/tech',
        },
        {
          id: 2,
          title: 'Slide 2',
          imageUrl: 'https://placeimg.com/640/480/nature',
        },
        {
          id: 3,
          title: 'Slide 3',
          imageUrl: 'https://placeimg.com/640/480/animals',
        },
      ];
   return (
    <BrowserRouter>
    <div>
    <Switch>
        <Route exact path="/" component={HomeV7} />
       

        <Route path="/career" component={CareerV1} />
        <Route path="/list-with-us" component={ListWithUs} />
       
        <Route path="/team" component={ Team } />
        <Route path="/team-details/:id" component={ TeamDetails } />
        <Route path="/404" component={ Error } />
        {/* <Route path="/" component={ Shop } /> */}
        {/* <Route path="/shop-grid" component={ ShopGrid } /> */}
        {/* <Route path="/shop" component={ ShopLeftSidebar } /> */}
        {/* <Route path="/shopjhfe" component={ ShopRightSidebar } /> */}

        <Route path="/product-details" component={ ProdductDetails } />
        {/* blog */}
        <Route path="/blogs" component={ BlogGrid } />
        <Route exact path="/best-communites-in-dubai" component={ CategoryGrid11 } />
        <Route exact path="/offplan-projects-in-dubai" component={ OffPlanCategory } />
        {/* <Route path="/blog-right-sidebar" component={ BlogRightSidebar } /> */}
        <Route path="/blog" component={ Blog } />

        <Route path="/blog-details" component={ BlogDetails } />
        {/* <Route path="/contact" component={ Contact } /> */}

        <Route exact path="/offplan-projects-in-dubai/:offPlanCategoryName" component={ OffPlan } />


        <Route path="/property-details/:id" component={ ProdductDetails } />
        <Route path="/:property_city/:property_community/:property_sub_community/:property_type-for-:property_for/TH:id" component={ ProdductDetails } />
        <Route path="/:property_city/:property_community/:property_sub_community/:property_type-for-:property_for-:property_level/TH:id" component={ ProdductDetails } />
        <Route path="/contact-us" component={ NewContact } />
        <Route path="/our-team" component={ TeamsNew } />

        <Route path="/property/:type" component={ PropertyType } />
     

        <Route path="/about-us" component={ aboutUs } />
        <Route path="/shop-page" component={ ShopNew } />
        <Route  exact path="/best-communites-in-dubai/:communityName" component={ GuideLine } />
        <Route path="/bread-crums" component={ BreadCrumbs } />
        <Route path="/level-page" component={ LevelPage } />
        <Route path="/sub-community-page" component={ SubCommunityPage } />
        <Route path="/community-page" component={ CommunityPage } />
        <Route path="/type-page" component={ TypePage } />



    </Switch>
    </div>
    </BrowserRouter>




)
 }
 
 export default App