import React from "react";
import EmailGetStarted from "../../components/email-get-started";
import Button from "../../components/button";
import MiningTable from "../../components/mining-table";
import HashTokenPrice from "../../components/hash-token-price";
import Feature from "../../components/feature";
import FeatureV2 from "../../components/feature-v2";
import Subscribe from "../../components/subscribe";
import headerStates from "../../components/header-states";

import "./home.scss";

export default class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "MtHash - Token Distributed Hash Power";
    headerStates();
  }
  render() {
    return (
      <div className="company-wrapper">
        <img
          className="bg"
          src={require("../../assets/img/BG-top.png")}
          alt="sry"
        />
        <section id="section-top">
          <h1 className="title1" anchor="slim">
            Token Distributed Hash Power
          </h1>
          <h2 className="sub-title1">Hash the peaks and beyond</h2>
          <EmailGetStarted />
          <HashTokenPrice />
        </section>
        <section id="section-mining-table">
          <MiningTable />
        </section>
        <section id="section-most-accessible">
          <img
            className="bg"
            src={require("../../assets/img/home/section-most-accessible/BG.png")}
            alt="sry"
          />

          <div class="content-wrapper">
            <div class="caption-wrapper">
              <h1 className="title2">
                The Most Accessible Mining and Exchange Platform
              </h1>
              <h2 className="light-text">
                Scale a mountain of hash power through tokenized mining combined
                with an exchange
              </h2>
            </div>
            <div className="features-wrapper">
              <FeatureV2
                type="large"
                imgName="home/card-1/icon"
                title="Accessible"
                text="Direct value of hash power through smart contract ownership hosting with market liquidity"
              />
              <FeatureV2
                type="large"
                imgName="home/card-1/icon2"
                title="Scalable"
                text="A scalable token of hash power that increases with the mining difficulty and overall hash network"
              />
              <FeatureV2
                type="large"
                imgName="home/card-1/icon3"
                title="Transparent"
                text="Total platform hashrate and shares from mining shown like a pool with full transparency"
              />
            </div>
          </div>
        </section>
        <section id="section-mining-platform">
          <div className="content-wrapper">
            <h1 className="title2">
              Grow Your Portfolio by Mining and Trading In One Place
            </h1>
            <h2 className="light-text">
              Bringing financial freedom and prosperity while creating real
              adoption of cryptocurrency
            </h2>
            <div className="content-wrapper">
              <div className="left-side">
                <Feature
                  imgName="home/card-2/icon"
                  title="Simple & Intuitive"
                  text="Mining is now as easy as trading, simply pick the coin you want to mine using hash tokens"
                />
                <Feature
                  imgName="home/card-2/icon2"
                  title="Distributed Wealth"
                  text="Get rewarded for securing the blockchain network and capitalize on your finance by trading"
                />
                <Feature
                  imgName="home/card-2/icon3"
                  title="Stability Not Volatility"
                  text="Give true fundamental value to the crypto economy while earning a steady income growing the blockchain network"
                />
                <Feature
                  imgName="home/card-2/icon4"
                  title="Seamless Experience"
                  text="Easily transition between mining and trading, use tokens for both the exchange and mining"
                />
              </div>
              <div className="right-side">
                <img
                  src={require("../../assets/img/home/card-2/screen.png")}
                  alt="sry"
                />
                <img
                  src={require("../../assets/img/home/card-2/screen2.png")}
                  alt="sry"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="section-arcade-mining">
          <div className="background" />
          <div className="card type2" anchor="dark" both="">
            <div className="illustrations-wrapper">
              <img
                src={require("../../assets/img/home/card-3/screen.png")}
                alt="sry"
              />
              <img
                src={require("../../assets/img/home/card-3/screen2.png")}
                alt="sry"
              />
            </div>
            <div className="text-wrapper">
              <div className="logo">
                <img
                  src={require("../../assets/img/home/card-3/logo.png")}
                  alt="sry"
                />
              </div>
              <h1 className="title">
                Arcade Mining<span>&trade;</span> <span>with Tokens</span>
              </h1>
              <p className="text">
                Use tokens to mine like playing in an arcade. Each
                cryptocurrency is like an arcade game you can choose to mine
                with tokens.
              </p>
              <div className="link text">
                <a href="https://google.com">
                  <p>Arcade Mining</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="section-earn-hash-power">
          <div className="card type2">
            <div className="text-wrapper">
              <h1 className="title">
                Earn Hash Power <span>by Trading</span>
              </h1>
              <p className="text">
                Earn tokens by trading on the exchange and get a discount on
                trading fees with tokens.
              </p>
              <p className="text">
                Trading fees go into more hash power for the tokens and users.
              </p>
              <div className="link text">
                <a href="https://google.com">View Exchange</a>
              </div>
            </div>
            <div className="illustrations-wrapper">
              <img
                src={require("../../assets/img/home/card-4/screen.png")}
                alt="sry"
              />
              <img
                src={require("../../assets/img/home/card-4/screen2.png")}
                alt="sry"
              />
            </div>
          </div>
        </section>
        <section id="section-mobile-app" anchor="green" both="">
          <div className="card type2">
            <div className="illustrations-wrapper">
              <img
                src={require("../../assets/img/home/card-5/screen.png")}
                alt="sry"
              />
              <img
                src={require("../../assets/img/home/card-5/screen2.png")}
                alt="sry"
              />
            </div>
            <div className="text-wrapper">
              <h1 className="title">
                Mine and Trade Crypto <span>on the Go</span>
              </h1>
              <p className="text">
                The power of mining and trading in the palm of your hands.
              </p>
              <p className="text">
                Access the mining and exchange platform on our Android and iOS
                app. Anytime. Anywhere.
              </p>
              <div className="link text">
                <a href="https://google.com">
                  <img
                    src={require("../../assets/img/home/card-5/app-store.png")}
                    alt="sry"
                  />
                </a>
                <a href="https://google.com">
                  <img
                    src={require("../../assets/img/home/card-5/google-play.png")}
                    alt="sry"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="section-founders-token">
          <img
            className="bg"
            src={require("../../assets/img/home/section-founders-token/BG-bottom.png")}
            alt="sry"
          />
          <div className="table-wrapper">
            <div className="left-column">
              <div className="logo">
                <img
                  src={require("../../assets/img/home/section-founders-token/logo-large.png")}
                  alt="sry"
                />
              </div>
              <Button
                text="&nbsp;&nbsp;Buy Tokens&nbsp;&nbsp;"
                type="white large"
              />
            </div>
            <div className="right-column">
              <h2 className="sub-title">Phase 1</h2>
              <h1 className="title">Founder’s Token Offering</h1>
              <p className="text">
                The MtHash Founder’s Token distribution will begin soon. These
                tokens are separate from the hash tokens distributed for the
                platform. These tokens are exclusively used for Founder’s
                Benefits.
              </p>
              <p className="text">
                By participating in the Founder’s Token Offering, you will be
                contributing to the development fund and be a part of the
                founding of MtHash.
              </p>
              <ul className="list">
                <li>
                  <p>Token Name</p>
                  <span />
                  <p>MtHash</p>
                </li>
                <li>
                  <p>Starting Price</p>
                  <span />
                  <p>1 MASH = USD 1.00</p>
                </li>
                <li>
                  <p>Total Supply</p>
                  <span />
                  <p>200,000 MASH</p>
                </li>
                <li>
                  <p>All Unsold Tokens</p>
                  <span />
                  <p>MtHash Foundation</p>
                </li>
                <li>
                  <p>Token Type</p>
                  <span />
                  <p>ERC20</p>
                </li>
                <li>
                  <p>Hard Cap</p>
                  <span />
                  <p>USD 1,000,000</p>
                </li>
                <li>
                  <p>Soft Cap</p>
                  <span />
                  <p>USD 300,000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            {/* <FeatureV2
              imgName="home/section-founders-token/iconA"
              title="Exclusive Access"
              text="Gain access to the private beta of the mining and exchange platform, mobile app and more"
            />
            <FeatureV2
              imgName="home/section-founders-token/iconB"
              title="Founder’s Rights"
              text="Use Founder’s tokens to vote on company decisions like hardware/algo selection and exchange listings"
            />
            <FeatureV2
              imgName="home/section-founders-token/iconC"
              title="Lifetime Discount"
              text="Get a lifetime discount on mining and trading fees by redeeming Founder’s tokens on your account"
            /> */}
          </div>
        </section>
        <Subscribe
          text="Get Started Today With $50 or Less"
          buttonText="Get Started"
        />
      </div>
    );
  }
}
