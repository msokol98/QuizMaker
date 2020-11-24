import React from 'react';
import 'bulma/css/bulma.css'
import 'bulma-divider/dist/css/bulma-divider.min.css';

const Landing = () => (
    <>
      <section className='hero is-medium orange'>
        <div className='hero-body'>
          <div className='container'>

            <div className='hero-inner'>

              <div>
                <h2 className='title has-text-white'>Sokol's Quiz Maker</h2>
                <h6 className='subtitle has-text-white'>
                    Make fun quizzes for your friends to take.
                </h6>
                <button onClick={() => window.location = "/create"} className="button with-space-on-right">Create Quiz</button>
                <button onClick={() => window.location = "/quizzes"} className="button">Take Quizzes</button>
              </div>
                <br />
                <div className='banner-image'>
                    <img src='quiz.png' alt='logo' width='30%'/>
                </div>
            </div>

          </div>
        </div>          
      </section>

      <section className='section has-background-light'>
        <div className='container'>
          <div className='content'>

            <div className='columns is-variable is-7'>
              <div className='column'>
                <div className='notification has-background-white bordered'>

                  <p className='image is-96x96 landing-icon-96'>
                    <img src='money.png' alt='person' />
                  </p>              
                  <h3 className='title has-text-weight-light'>Free</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>We'll keep your wallet happy.</h5>
                  <p>
                      Creating quizzes on the site is free. Taking quizzes on the site is free. You pay nothing.
                      That's how we operate!
                  </p>
                </div>
              </div>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <p className='image is-96x96 landing-icon-96'>
                    <img src='clock.webp' alt='person'/>
                  </p>  
                  <h3 className='title has-text-weight-light'>Quick Service</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>Creating a quiz is easy.</h5>
                  <p>
                      Our intuitive web design allows you to quickly create a quiz and share it with your friends.
                      We don't waste your time. Get up and running now.
                  </p>
                </div>
              </div>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <p className='image is-96x96 landing-icon-96'>
                    <img src='honesty.png' alt='person' />
                  </p>                 
                  <h3 className='title has-text-weight-light'>Honest Work</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>Open-source is the way to go.</h5>
                  <p>
                      We don't hide anything. You can find the code for this website on our GitHub page.
                      Find the link at the bottom of this page.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>          
      </section>
      <section className='section has-background-white'>
        <div className='container'>
          <div className='content'>
            <h2 className='title has-text-weight-light'>Users are saying...</h2>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon' >
                <p className='image is-64x64'>
                  <img src='person.png' alt='person' />
                </p>
                <div>Mike S.</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                      This website is great! I can make fun quizzes for my friends to take on any subject.
                      I've made quizzes on pop culture, geography and math. My friends and I are having
                      a really good time using this web application. I think everyone should give this 
                      website a try. It's free after all (and open source). Yahoo!!!
                </blockquote>
              </div>
            </article>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon'>
                <p className='image is-64x64'>
                  <img src='person2.png' alt='person2' />
                </p>
                <div>Wendy E.</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                    This website is great! I can make fun quizzes for my friends to take on any subject.
                      I've made quizzes on pop culture, geography and math. My friends and I are having
                      a really good time using this web application. I think everyone should give this 
                      website a try. It's free after all (and open source). Yahoo!!!
                </blockquote>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className='section orange'>
        <div className='container'>
          <div className='content has-text-centered'>

            <div className='serving-nc-wrapper' >

              <div className='serving-nc'>
                <img src='unc.png' alt='nc' width='200' className='nc-image'/>

                <div>
                  <h3 className='title has-text-weight-normal has-text-white serving-nc-label'>Proudly originated in Chapel Hill, NC.</h3>
                  <h4 className='subtitle has-text-weight-normal has-text-white'>Now letting people create fun quizzes worldwide.</h4>
                </div>
              </div>

              <div className='is-divider' data-content='READY?'></div>

              <button className='button is-dark' onClick={() => window.location = "/register"}>Make an account</button>
            </div>


          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column'>
                <h6 className='subtitle has-text-grey'>Corporate HQ</h6>

                <div>511A Pinebluff Trail</div>
                <div>Chapel Hill, NC</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Contact</h6>

                <div>919-791-5823</div>      
                <div>contact@sokolquizmaker.com</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Popular Subjects</h6>

                <div>Geography</div>
                <div>Pop Culture</div>
                <div>Math</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Account</h6>

                <a href='/login'>Sign In</a>
                <br></br>
                <a href='/register'>Sign Up</a>
              </div>
            </div>
          </div>

          <div className='is-divider' data-content=''></div>

          <div style={{textAlign: 'left'}}>Website by Mitchell Sokol - Personal Project 2020
            <br/>Made with React, Bulma, and Java Spring Boot
            <br/>Deployed onto Ubuntu Server hosted by Linode
            <br /><a href='https://github.com/msokol98/quizmaker'>See source code</a>
          </div>

        </div>
      </footer>
    </>
);

export default Landing;
