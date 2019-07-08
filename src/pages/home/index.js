import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import TableRaw from '../../components/table-raw';
import Feature from '../../components/feature';
import FeatureV2 from '../../components/feature-v2';
import Subscribe from "../../components/subscribe";
import headerStates from '../../components/header-states';
import './home.scss';

export default class HomePage extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0);
        document.title = "MtHash - Token Distributed Hash Power";
        headerStates();
    }
    render(){
        return (
            <div className="company-wrapper">
                <img className="bg" src={require('../../assets/img/BG-top.png')} alt="sry"></img>
                <section className="section-1">
                    <h1 className="title1" anchor="slim">Token Distributed Hash Power</h1>
                    <h2 className="sub-title1">Hash the peaks and beyond</h2>
                    <Input type="dark button" buttonText="Get Started" placeholder="Your email address"></Input>
                    <div className="table-wrapper">
                        <div className="row-preview">
                            <div className="title-wrapper">
                                <img className="icon" src={require('../../assets/img/home/table-icons/icon1.png')} alt="sry"></img>
                                <p className="title">Hash Token &nbsp;<span>HASH</span></p>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">$10.73</p>
                                <div className="difference-wrapper positive">
                                    <div className="arrow"></div>
                                    <p className="value">0.73%</p>
                                </div>
                            </div>
                            <div className="action-wrapper">
                                <Button text="Buy" type="green"></Button>
                            </div>
                        </div>
                        <ul className="table">
                            <li className="header table-raw">
                                <p className="regular-text">Name</p>
                                <p className="regular-text">Price</p>
                                <p className="regular-text">Total Hashrate</p>
                                <p className="regular-text">Tokens</p>
                                <p className="regular-text">Token Hashrate</p>
                                <p className="regular-text">Action</p>
                            </li>
                            <TableRaw imgName="home/table-icons/icon2" title="Bitcoin" shtitle="BTC" price="8,237.93" difference="5.73" totalHash="11,973" tokens="23,799" svgPath="M1 43C1 43 11.4016 28 16.4508 27.5C21.5 27 26 42.5 30.5 40.5C35 38.5 37 14 41.5 12C46 10 50.5 20 56.5 27.5C62.5 35 68.5 37.5 75 30C81.5 22.5 82.5 20.5 91.5 10C100.5 -0.5 101.5 14 109 12C116.5 10 124.5 1.5 124.5 1.5"></TableRaw>
                            <TableRaw imgName="home/table-icons/icon3" title="Litecoin" shtitle="LTC" price="86.07" difference="3.03" totalHash="7,047" tokens="2,934" svgPath="M1 42C1 42 9 31.5 14.5 31.5C20 31.5 25.5 44 30.5 39.5C35.5 35 50 40.5 55.5 35C61 29.5 58.5312 11.564 61 11C63.4688 10.436 76.5 39.5 78.5 38C80.5 36.5 79.5 4.50001 85 1.50002C90.5 -1.49997 99.5 26 104.5 24C109.5 22 108.5 13.5 112.5 11C116.5 8.5 121.5 3.00002 121.5 3.00002"></TableRaw>
                            <TableRaw imgName="home/table-icons/icon4" title="Bitcoin Cash" shtitle="BCH" price="474.03" difference="4.23" totalHash="4,393" tokens="11,573" svgPath="M1 43C1 43 10 36.5 15.5 36C21 35.5 25 41.4167 30.5 40.5C36 39.5833 32.5 30 39.5 24C46.5 18 46.5 28 52 24C57.5 20 60 27 67 24C74 21 73.5 11.3571 79 9C84.5 6.64286 90 21 99 20C108 19 124.5 1.5 124.5 1.5"></TableRaw>
                            <TableRaw imgName="home/table-icons/icon5" title="Ethereum" shtitle="ETH" price="230.00" difference="-0.21" totalHash="2,981" tokens="5,987" svgPath="M1 42C1 42 3.5 30.5 13.5 30.5C23.5 30.5 16 30.5 23.5 30.5C31 30.5 32 11 35.5 11C39 11 40 26.5 44 26.5C48 26.5 61 26.5 71 26.5C81 26.5 76.5 -3.5 87.5 2C98.5 7.5 98.5 11.5 109 11C119.5 10.5 124.5 0.5 124.5 0.5"></TableRaw>
                            <TableRaw imgName="home/table-icons/icon6" title="Monero" shtitle="XMR" price="84.03" difference="1.09" totalHash="1,737" tokens="371" svgPath="M1 42C1 42 5 21.8 10.5 18.5C16 15.2 15.5 32 20.5 32C25.5 32 22.5 11.5 27.5 7.5C32.5 3.5 36 26.5 42.5 26.5C49 26.5 51 11.4167 56.5 10.5C62 9.58333 63 19 70.5 19C78 19 75 9.16667 80.5 5.5C86 1.83333 97.5 18.5 108.5 18.5C119.5 18.5 124.5 0.5 124.5 0.5"></TableRaw>
                        </ul>
                    </div>
                </section>
                <section className="section-2">
                    <div className="card type1">
                        <h1 className="title2">The Most Accessible Mining and Exchange Platform</h1>
                        <h2 className="light-text">Scale a mountain of hash power through tokenized mining combined with an exchange</h2>
                        <div className="content-wrapper">
                            <FeatureV2 type="large" imgName="home/card-1/icon" title="Accessibility" text="Direct value of hash power through smart-contract ownership hosting with market liquidity"></FeatureV2>
                            <FeatureV2 type="large" imgName="home/card-1/icon2" title="Scalability" text="A scalable token of hash power that increases with the mining difficulty and overall hash network"></FeatureV2>
                            <FeatureV2 type="large" imgName="home/card-1/icon3" title="Transparency" text="Total platform hashrate and shares from mining shown like a pool with full transparency"></FeatureV2>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <div className="card type1">
                        <h1 className="title2">Grow Your Portfolio by Mining and Trading In One Place</h1>
                        <h2 className="light-text">Bringing financial freedom and prosperity while creating real adoption of cryptocurrency</h2>
                        <div className="content-wrapper">
                            <div className="left-side">
                                <Feature imgName="home/card-2/icon" title="Simple & Intuitive" text="Mining is now as easy as trading, simply pick the coin you want to mine using hash tokens"></Feature>
                                <Feature imgName="home/card-2/icon2" title="Distributed Wealth" text="Get rewarded for securing the blockchain network and capitalize on your finance by trading"></Feature>
                                <Feature imgName="home/card-2/icon3" title="Stability Not Volatility" text="Give true fundamental value to the crypto economy while earning a steady income growing the blockchain network"></Feature>
                                <Feature imgName="home/card-2/icon4" title="Seamless Experience" text="Easily transition between mining and trading, use tokens for both the exchange and mining"></Feature>
                            </div>
                            <div className="right-side">
                                <img src={require('../../assets/img/home/card-2/screen.png')} alt="sry"></img>
                                <img src={require('../../assets/img/home/card-2/screen2.png')} alt="sry"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="background"></div>
                    <div className="card type2" anchor="dark" both="">
                        <div className="illustrations-wrapper">
                            <img src={require('../../assets/img/home/card-3/screen.png')} alt="sry"></img>
                            <img src={require('../../assets/img/home/card-3/screen2.png')} alt="sry"></img>
                        </div>
                        <div className="text-wrapper">
                            <div className="logo">
                                <img src={require('../../assets/img/home/card-3/logo.png')} alt="sry"></img>
                            </div>
                            <h1 className="title">Arcade Mining<span>&trade;</span> <span>with Tokens</span></h1>
                            <p className="text">Use tokens to mine like playing in an arcade. Each cryptocurrency is like an arcade game you can choose to mine with tokens.</p>
                            <div className="link text">
                                <a href="https://google.com"><p>Arcade Mining</p></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-5">
                    <div className="card type2">
                        <div className="text-wrapper">
                            <h1 className="title">Earn Hash Power <span>by Trading</span></h1>
                            <p className="text">Earn tokens by trading on the exchange and get a discount on trading fees with tokens.</p>
                            <p className="text">Trading fees go into more hash power for the tokens and users.</p>
                            <div className="link text">
                                <a href="https://google.com">View Exchange</a>
                            </div>
                        </div>
                        <div className="illustrations-wrapper">
                            <img src={require('../../assets/img/home/card-4/screen.png')} alt="sry"></img>
                            <img src={require('../../assets/img/home/card-4/screen2.png')} alt="sry"></img>
                        </div>
                    </div>
                </section>
                <section className="section-6" anchor="green" both="">
                    <div className="card type2">
                        <div className="illustrations-wrapper">
                            <img src={require('../../assets/img/home/card-5/screen.png')} alt="sry"></img>
                            <img src={require('../../assets/img/home/card-5/screen2.png')} alt="sry"></img>
                        </div>
                        <div className="text-wrapper">
                            <h1 className="title">Mine and Trade Crypto <span>on the Go</span></h1>
                            <p className="text">The power of mining and trading in the palm of your hands.</p>
                            <p className="text">Access the mining and exchange platform on our Android and iOS app. Anytime. Anywhere.</p>
                            <div className="link text">
                                <a href="https://google.com">
                                    <img src={require('../../assets/img/home/card-5/app-store.png')} alt="sry"></img>
                                </a>
                                <a href="https://google.com">
                                    <img src={require('../../assets/img/home/card-5/google-play.png')} alt="sry"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-7">
                    <img className="bg" src={require('../../assets/img/home/section-7/BG-bottom.png')} alt="sry"></img>
                    <div className="table-wrapper">
                        <div className="left-column">
                            <div className="logo">
                                <img src={require('../../assets/img/home/section-7/logo-large.png')} alt="sry"></img>
                            </div>
                            <Button text="&nbsp;&nbsp;Buy Tokens&nbsp;&nbsp;" type="white large"></Button>
                        </div>
                        <div className="right-column">
                            <h2 className="sub-title">Phase 1</h2>
                            <h1 className="title">Founder’s Token Offering</h1>
                            <p className="text">The MtHash Founder’s Token distribution will begin soon. These tokens are separate from the hash tokens distributed for the platform. These tokens are exclusively used for Founder’s Benefits.</p>
                            <p className="text">By participating in the Founder’s Token Offering, you will be contributing to the development fund and be a part of the founding of MtHash.</p>
                            <ul className="list">
                                <li>
                                    <p>Token Name</p>
                                    <span></span>
                                    <p>MtHash</p>
                                </li>
                                <li>
                                    <p>Starting Price</p>
                                    <span></span>
                                    <p>1 MASH = USD 1.00</p>
                                </li>
                                <li>
                                    <p>Total Supply</p>
                                    <span></span>
                                    <p>200,000 MASH</p>
                                </li>
                                <li>
                                    <p>All Unsold Tokens</p>
                                    <span></span>
                                    <p>MtHash Foundation</p>
                                </li>
                                <li>
                                    <p>Token Type</p>
                                    <span></span>
                                    <p>ERC20</p>
                                </li>
                                <li>
                                    <p>Hard Cap</p>
                                    <span></span>
                                    <p>USD 1,000,000</p>
                                </li>
                                <li>
                                    <p>Soft Cap</p>
                                    <span></span>
                                    <p>USD 300,000</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <FeatureV2 imgName="home/section-7/iconA" title="Exclusive Access" text="Gain access to the private beta of the mining and exchange platform, mobile app and more"></FeatureV2>
                        <FeatureV2 imgName="home/section-7/iconB" title="Founder’s Rights" text="Use Founder’s tokens to vote on company decisions like hardware/algo selection and exchange listings"></FeatureV2>
                        <FeatureV2 imgName="home/section-7/iconC" title="Lifetime Discount" text="Get a lifetime discount on mining and trading fees by redeeming Founder’s tokens on your account"></FeatureV2>
                    </div>
                </section>
                <Subscribe text="Get Started Today With $50 or Less" buttonText="Get Started"></Subscribe>
            </div>
        );
    }
}
