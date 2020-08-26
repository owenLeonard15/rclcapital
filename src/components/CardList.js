import React from 'react';
import ParagraphCard from './ParagraphCard';

const CardList = () => {
    const cardsLeft = [
        {
            title: "Independent and Unconflicted",
            text: ["Since its founding in 1997, RCL Capital Management has earned and preserved the trust of many investment clients throughout western Pennsylvania with enduring integrity, professionalism, performance and personal service. RCL Capital Management devises and manages completely objective and un-conflicted investment plans. It is a fee-only advisory firm and is not required to sell a particular vendor's investment products. It will always recommend the most appropriate investment options for you. RCL Capital Management does not receive commissions from its clients investments."
            ]
        },
        {
            title: "Annual Fees",
            text: [
                "RCL Capital Management's fees are based on the amount of assets it manages for you. It does not earn commissions from your investments. Your annual fee will be based on the total market value of your account as valued monthly. This allows for truly objective financial advice.",
                
               "1% on the first $2,000,000",
                "0.50% on the next $2,000,000",
                "0.25% on the remaining balance",
                "Fees are payable at the end of each quarter."
            ]
        }
    ];
    const cardsRight = [
        {
            title: "The Founder",
            text: ["RCL Capital Management was founded by Ronald C. Leonard, to help individuals realize the benefits of highly-personalized and qualified financial guidance. Prior to RCL Capital Management, Mr. Leonard served with both Grossman, Yanak and Ford LLP and KPMG as an accountant in their Pittsburgh offices. Mr. Leonard is a registered investment advisor and holds a B.S. in Accounting from Penn State."
            ]
        },
        {
            title: "Investment Support",
            text: [
                "As your financial advisor, RCL Capital Management will:",
                "Provide personal consultations to assist in defining your goals and updating you on the progress of your plan.",
                "Prepare quarterly performance summaries to update you on the status and progress of your portfolio.",
                "Purchase and sell securities to allocate your portfolio in the most appropriate manner."
            ]
        },
        {
            title: "Personal and Meticulous",
            text: [
                "RCL Capital Management leaves nothing to chance. The firm works closely with every client to: ",
                "Help them identify thoroughly all their financial goals",
                "Devise comprehensive plans to achieve those goals",
                "Invest their assets in a prudent, timely manner",
                "Monitor progress with quarterly performance reports"
            ]
        }
    ];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">{
                    cardsLeft.map((card, i) => {
                        return (

                            <ParagraphCard
                                key={i}
                                title={cardsLeft[i].title}
                                text={cardsLeft[i].text}
                            />
                        );
                    })
                }</div>
                <div className="col-lg-5">{
                    cardsRight.map((card, i) => {
                        return (
                            <ParagraphCard
                                key={i}
                                title={cardsRight[i].title}
                                text={cardsRight[i].text}
                            />
                        );
                    })
                }</div>
            </div>
        </div>
    );
}

export default CardList;