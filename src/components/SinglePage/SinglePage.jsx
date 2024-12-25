import React from 'react'
import "./SinglePage.css";

const SinglePage = () => {
  return (
    <div className='main_container'>
      <div className='left-container'>

        <div className='box-container'>
          <div className='first_box'>
            <div className='top_box'>
              <img src="/images/Subtract.png" />
              <span>AI to Detect & Autofix Bad Code</span>
            </div>
            <div className='bottom_box'>
              <div>
                <div className='bottom_text'>
                  <p>30+</p>
                </div>
                <div>
                  <p>Language Support</p>
                </div>
              </div>

              <div>
                <div className='bottom_text'>
                  <p> 10K+</p>
                </div>
                <div >
                  <p> Developers</p>
                </div>
              </div>

              <div>
                <div className='bottom_text'>
                  <p>100K+</p>
                </div>
                <div>
                  <p>Hours Speed</p>
                </div>
              </div>

            </div>

          </div>
          <div className='second_box'>

            <div className='left'>
              <div>
                <img src="/images/pie_chart.png" />
              </div>
              <div>
                <p className='issue_fixed'>Issue Fixed</p>
              </div>
              <div>
                <p className='number'>500K+</p>
              </div>

            </div>
            <div className='right'>
              <div className='right_top'>
                <div>
                  <img src="/images/arrow.svg" />
                </div>
                <div>
                  <p className='number_percentage'>14%</p>
                </div>
              </div>
              <div className='text-content'>
                  This week
              </div>
            </div>

          </div>

        </div>

        <div className='image-box'>
          <img src="/images/down_image.png" />
        </div>
      </div>


      <div className='right-container'>
        <div className='login_container'>
          <div className='login_top_container'>
            <div className='heading'>
              <img src="/images/Subtract.png" />
              <span>CodeAnt AI</span>
            </div>
            <div className='text_container'>
              <h3>Welcome to Code Ant AI</h3>
            </div>

            <div className='buttons'>
              <button className='sass'>
                SAAS
              </button>
              <button className='self-hosted'>
                Self Hosted
              </button>

            </div>
          </div>
          <div className='login_bottom_container'>
            <div className='bottom_container'>
              <button  >
                <img src="images/github.png" />
                <span>Self Hosted GitLab </span>
              </button >
              <button >
                <img src="images/key.png" />
                <span>Sign in with SSO</span>
              </button>
            </div>
          </div>


        </div>
        <p className='privacy-policy'>By signing up you agree to the <span>Privacy Policy</span></p>
      </div>
    </div>
  )
}

export default SinglePage