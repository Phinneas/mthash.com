import React from "react";
import Button from '../../components/button';
import headerStates from '../../components/header-states';
import FeatureV2 from '../../components/feature-v2';
import './about.scss';

export default class AboutPage extends React.Component {
    componentDidMount(){
        window.scrollTo(0,0);
        document.title = "MtHash - Token Distribution";
        headerStates();
    }
    render(){
        return (
            <div className="about-wrapper">
                <img className="bg" src={require('../../assets/img/about/BG.png')} alt="sry"></img>
                <section className="section-1">
                    <h1 className="title1" anchor="slim">About MtHash</h1>
                    <div className="about-wrapper card type2">
                        <div className="text-wrapper text-pair-1">
                            <h1>About Us</h1>
                            <p>Founded in March of 2018, MtHash is a cryptocurrency mining and exchange platform bridging the gap between traders and miners alike supporting the biggest cryptocurrencies on the market. We're based in Seattle, Washington.</p>
                            <p>We believe that hash power is the future of money, and that the hash network and coinbase gives fundamental value to the blockchain and cryptocurrency. We want to bring it to the world.</p>
                            <p>Our company’s goal and mission is to drive the future of an open financial system built for and run by the people.</p>
                        </div>
                        <div className="illustrations-wrapper">
                            <img src={require('../../assets/img/about/illustration.png')} alt="sry"></img>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <img className="bg" src={require('../../assets/img/BG-footer.png')} alt="sry"></img>
                    <h1 className="title">We Are Hiring!</h1>
                    <p>Blockchain is the backbone of the new financial system for the world. MtHash, the most accessible mining and exchange platform, is looking for talented people to join our rapidly growing team.</p>
                    <div className="button">
                        <Button type="green large withArrow" text="Open Positions"></Button>
                    </div>
                </section>
                <section className="section-3">
                    <div className="card type1">
                        <h1 className="title2">Contact Us</h1>
                        <div className="content-wrapper">
                            <FeatureV2 type="large withoutLink" imgName="about/icon" title="Support" text="support@mthash.com"></FeatureV2>
                            <div className="divider"></div>
                            <FeatureV2 type="large withoutLink" imgName="about/icon2" title="Press" text="press@mthash.com"></FeatureV2>
                            <div className="divider"></div>
                            <FeatureV2 type="large withoutLink" imgName="about/icon3" title="Mailing Address" text="133 Union St" subText="Seattle, WA 98101"></FeatureV2>
                        </div>
                    </div> 
                </section>
            </div>
        );
    }
  }