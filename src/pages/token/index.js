import React from "react";
import Feature from '../../components/feature';
import Subscribe from '../../components/subscribe';
import Input from '../../components/input';
import Button from '../../components/button';
import headerStates from '../../components/header-states';
import './token.scss';

export default class TokenPage extends React.Component {
    componentDidMount(){
        window.scrollTo(0,0);
        document.title = "MtHash - Token Distribution";
        headerStates();
    }
    render(){
        return (
            <div className="token-wrapper">
                <img className="bg" src={require('../../assets/img/token/BG.png')} alt="sry"></img>
                <section className="section-1">
                    <h1 className="title1" anchor="slim">Token Distribution</h1>
                    <div className="distribution-wrapper">
                        <img className="bg" src={require('../../assets/img/token/section-1/BG.png')} alt="sry"></img>
                        <h2 className="light-text">Phase 1</h2>
                        <h1 className="title2">Founder’s Token</h1>
                        <div className="bar-wrapper">
                            <h3 className="small-text">Total Distributed</h3>
                            <div className="bar">
                                <div className="phase"></div>
                                <div className="phase"></div>
                                <div className="phase"></div>
                                <div className="current-state" tip="top-right" data-description="30000 MASH"></div>
                            </div>
                            <div className="mesurements">
                                <h3 className="small-text">0 MASH</h3>
                                <p className="small-text">Phase 2</p>
                                <p className="small-text">Phase 3</p>
                                <p className="small-text">Phase 4</p>
                                <h3 className="small-text">200,000 MASH</h3>
                            </div>
                        </div>
                        <div className="info-wrapper">
                            <div className="raw">
                                <div className="col">
                                    <p className="small-text">Current Distribution</p>
                                    <p className="input-text">100,000 MASH</p>
                                </div>
                                <div className="col">
                                    <p className="small-text">ETH Received</p>
                                    <p className="input-text">193.01331</p>
                                </div>
                                <div className="col">
                                    <p className="small-text">BTC Received</p>
                                    <p className="input-text">1.33091</p>
                                </div>
                                <div className="col">
                                    <p className="small-text">Soft Cap</p>
                                    <p className="input-text">$300,000</p>
                                </div>
                            </div>
                            <div className="raw">
                                <div className="col">
                                    <p className="small-text">Current Distribution Ends In</p>
                                    <p className="input-text">11:13:33:00</p>
                                </div>
                                <div className="col">
                                    <p className="small-text">Current Period</p>
                                    <p className="input-text">1/33 Days</p>
                                </div>
                                <div className="col">
                                    <p className="small-text">Total Funded</p>
                                    <p className="input-text">$30,000</p>
                                </div>
                                <div className="col">
                                    <p className="small-text">Hard Cap</p>
                                    <p className="input-text">$1,000,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="content-wrapper">
                        <div className="left-side text-pair-1">
                            <h2 className="light-text">Hash Token</h2>
                            <h1>‘Smart’ Hash Power As a Reliable Market-Driven Asset</h1>
                            <p>Built on a cloud hosting infrastructure combined with a pool mining architecture, a smart-contract of hash power distributing units of hash power directly through a platform that enables users to access mining in a simple and effective manner based on supply and demand.</p>
                            <p>Each token represents a share of the total hash power available for the most established mining algorithms. Rather than a rental of hash power, it is permanent ownership of it, like a pool with hosted mining hardware.</p>
                            <p>Tokens can be traded on the exchange with direct liquidity on the market with true market value of hash power established directly to each token, while also acting as an exchange token providing utility on the exchange as well as hash power, giving discounts on trading fees.</p>
                        </div>
                        <div className="right-side">
                            <Feature imgName="token/section-2/icon" title="Accessibility" text="Direct value of hash power through smart-contract ownership hosting with market liquidity. Lifetime of hash power rather than a rental, enterprise mining facilities, seamless mining and trading experience."></Feature>
                            <Feature imgName="token/section-2/icon2" title="Scalability" text="A scalable token of hash power that increases with the mining difficulty and overall hash network. Instead of a fixed-rate contract that locks you in for a fixed term, you have the freedom and scalability that gives you a sustained profitability."></Feature>
                            <Feature imgName="token/section-2/icon3" title="Transparency" text="Total platform hashrate and shares from mining shown like a pool with full transparency. Each token accounts for a unit of hash power that fluctuates based on the token demand for each algorithm. Accumulate shares based on token hashrate."></Feature>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="left-side text-pair-1">
                            <h2 className="light-text">Founder’s Token</h2>
                            <h1>A Dedicated Token for the Founders of Our Platform</h1>
                            <p>As a platform that combines both ends of the cryptocurrency ecosystem, Founder’s tokens bring another level of utility to the platform by having two separate tokens with accompanying purpose.</p>
                            <p>This dual token structure will enable users of the platform to access our standard tokens as well as a limited supply token that will only be available to a small portion of the userbase.</p>
                            <p>These tokens are similar to the traditional industry practice of a pre-order or Founder’s Edition, but bringing a new approach to them with digital tokens giving direct ownership to the holders.</p>
                        </div>
                        <div className="right-side">
                            <Feature imgName="token/section-2/icon4" title="Exclusive Access" text="Gain access to the private beta testing of the mining and exchange platform, mobile app and more. By owning the tokens, you will have access to the private access and be able to use your tokens to activate tester tokens and assets."></Feature>
                            <Feature imgName="token/section-2/icon5" title="Founder’s Rights" text="Use Founder’s tokens to vote on company decisions like mining, exchange listings and platform development. Have a direct impact on the future of the company. A dedicated token that gives decentralized ownership to the users."></Feature>
                            <Feature imgName="token/section-2/icon6" title="Lifetime Discount" text="Get a lifetime discount on mining and trading fees by redeeming Founder’s tokens on your account. Each token you redeem gives a small additive discount on top of the trading discount from hash tokens."></Feature>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <img className="bg" src={require('../../assets/img/token/section-3/BG.png')} alt="sry"></img>
                    <div className="funding-wrapper">
                        <div className="title-wrapper">
                            <img className="logo" src={require('../../assets/img/token/section-3/logo.png')} alt="sry"></img>
                            <h1 className="title">Vision</h1>
                        </div>
                        <div className="quartal-wrapper">
                            <div className="title-wrapper">
                                <p className="active">Q1</p>
                                <p className="active">Q2</p>
                                <p>Q3</p>
                                <p>Q4</p>
                                <p>Q1</p>
                                <p>Q2</p>
                                <p>Q3</p>
                                <p>Q4</p>
                                <p>Q1</p>
                            </div>
                            <div className="time-line">
                                <div className="line">
                                    <div className="current-state"></div>
                                </div>
                                <div className="dot past"></div>
                                <div className="dot past"></div>
                                <div className="dot active"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="years-wrapper">
                                <p className="active">2019</p>
                                <p>2020</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div className="text-wrapper">
                                <h2 className="light-text">Q3</h2>
                                <h1 className="title2">Development Funding</h1>
                                <p>Conduct token sale for the Founder’s Token in order to obtain funding for the platform development of the mining and exchange platform.</p>
                                <p>This will be a short sale period that is meant to provide funding for the company in a manner that also impacts the platform and userbase in the longrun in a positive way, by creating an exclusive token tier which has never been done by any other token sale.</p>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="content">

                        <div className="text-pair-wrapper">
                            <div className="text-pair-1">
                                <h1>Become a Founder</h1>
                                <p>Become part of the foundation of MtHash that will give true accessibility and value to hash power and cryptocurrency, bridging the gap between trading and mining into a cohesive worldwide payment system bringing freedom and prosperity across the globe.
                                </p>
                                <p>Our company’s goal and mission is to drive the future of an open financial system built for and run by the people.
                                </p>
                                <p>We believe that hash power is the future of money.
                                </p>
                            </div>
                        </div>
                        <div className="transaction-form">
                            <div className="inputs-wrapper">
                                <div className="input-group">
                                    <div className="title">
                                        <h4>Send</h4>
                                        <div className="tint">
                                            <p className="sub">Min:&nbsp;</p>
                                            <p>0.839</p>
                                            <p className="sub">Max:&nbsp;</p>
                                            <p>35.385</p>
                                        </div>
                                    </div>
                                    <Input type="dropdown" placeholder="Amount In BTC"></Input>
                                </div>
                                <div className="input-group">
                                    <div className="title">
                                        <h4>Receive</h4>
                                    </div>
                                    <Input placeholder="Number of Tokens"></Input>
                                </div>
                                <div className="input-group">
                                    <div className="title">
                                        <h4>Receiving Address</h4>
                                    </div>
                                    <Input placeholder="Address To Receive Funds"></Input>
                                </div>
                                <div className="input-group">
                                    <div className="title">
                                        <h4>Refund Address</h4>
                                    </div>
                                    <Input placeholder="Address To Return Funds"></Input>
                                </div>
                            </div>
                            <Button type="large dark" text="Start Transaction"></Button>
                            <p className="terms-of-use">By clicking Start Transaction you accept our <span>Terms of Use & Conditions</span></p>
                        </div>

                    </div>
                </section>
                <Subscribe text="Subscribe to Our Mailing List" buttonText="Subscribe"></Subscribe>
            </div>
        );
    }
  }