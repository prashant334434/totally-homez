import React, { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';

const ColumnProperty = ({community}) => {
  useEffect(() => {
    const $ = window.$;
    let publicUrl = process.env.PUBLIC_URL + '/';

    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";
    document.body.appendChild(minscript);

    $('.go-top').find('a').on('click', function () {
      $(".quarter-overlay").fadeIn(1);
      $(window).scrollTop(0);
      setTimeout(function () {
        $(".quarter-overlay").fadeOut(300);
      }, 800);
    });

    $(document).on('click', '.theme-btn-1', function () {
      $('div').removeClass('modal-backdrop');
      $('div').removeClass('show');
      $('div').removeClass('fade');
      $('body').attr("style", "");
    });
  }, []);
   const [showAll, setShowAll] = useState(false);
   
   const toggleShowAll = ()=>{
    setShowAll(!showAll)
   }

  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = "Footer logo";

  return (
    <footer className="ltn__footer-area">
      <div className="footer-top-area plr--18">
        <div className="container-fluid">
          <div className="row">
          {
   
            community?.map((item,index)=>(
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <div className="footer-menu go-top">
                  <ul>
                    <li><Link to="/about">{item?.community_name}</Link></li>
                  
                  </ul>
                </div>
              
              </div>
            </div>
            ))

          }
          <div className='columncss'>Read More</div>

          <div className='columncss'>Read Less</div>
          

          </div>
        </div>
      </div>
    </footer>
  );
};

export default ColumnProperty;