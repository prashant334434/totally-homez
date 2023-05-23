import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const Cummunity = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const [content, setContent] = useState()
    const handleOptionClick = (option) => {
        // Update the content based on the selected option
        if (option === 'option1') {
          setContent('Corporate & Commercial');
        } else if (option === 'option2') {
          setContent('Finance & Banking');
        } else if (option === 'option3') {
          setContent('Property & Construction');
        }
      };

  return (
    <div className="ltn__team-details-area mb-120 pt-150" >
                <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="ltn__team-details-member-info text-center mb-40 ">
                        <div className="team-details-img">
                        <div className="ltn__utilize-menu">
                        <h1>Practice Areas</h1>
											<ul>
												<li onClick={() => handleOptionClick('option1')}><a href="#">Corporate & Commercial</a>

												</li>
												<li onClick={() => handleOptionClick('option2')}><Link >Finance & Banking</Link>
											
												</li>
												<li onClick={() => handleOptionClick('option3')}><Link >Property & Construction</Link>
												</li>
												<li><Link to="/off-plan">Litigation</Link>

												</li>
												<li><Link to="#">Arbitration & Mediation</Link>

												</li>
												<li><Link to="/contact-us">General Crime</Link></li>
												<li><Link to="/contact-us">Intellectual Property</Link></li>
												<li><Link to="/contact-us">Media & Entertainment</Link></li>
												<li><Link to="/contact-us">Private Client & Family Business</Link></li>
												<li><Link to="/contact-us">Cross Border Investments & Trade</Link></li>
												<li><Link to="/contact-us">Insurance</Link></li>
												<li><Link to="/contact-us">Transport</Link></li>
												<li><Link to="/contact-us">Cyber</Link></li>
												<li><Link to="/contact-us">Regulatory Approvals</Link></li>
												<li><Link to="/contact-us">Joint Ventures</Link></li>
												<li><Link to="/contact-us">Mergers & Acquisitions</Link></li>
												<li><Link to="/contact-us">Human Resources & Employment</Link></li>
												<li><Link to="/contact-us">Corporate Structuring & Insolvency</Link></li>
												<li><Link to="/contact-us">Infrastructure & Environmental</Link></li>
												<li><Link to="/contact-us">Competition & Antitrust</Link></li>
												<li><Link to="/contact-us">Education, Hospitality & Healthcare</Link></li>
												<li><Link to="/contact-us">Capital Markets & Securitisations</Link></li>
												<li><Link to="/contact-us">Wills & Probate</Link></li>
												<li><Link to="/contact-us">Notary Services</Link></li>
												<li><Link to="/contact-us">Company Formation</Link></li>
												<li><Link to="/contact-us">Corporation Services</Link></li>
												<li><Link to="/contact-us">Family & Matrimonial Disputes</Link></li>
												<li><Link to="/contact-us">Pro-Bono & CSR</Link></li>
											</ul>
										</div>
                        </div>
                      
                    </div>
                    </div>
                    <div className="col-lg-8">
                    <div className="ltn__team-details-member-info-details">
                    <h1>{content}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Cummunity
