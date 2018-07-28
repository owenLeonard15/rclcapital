import React from 'react';
import './Accordian.css';

const Accordian = () => {
    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header bg-light" id="headingOne">
                    <button className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        How long has RCL Capital Management existed?
                    </button>
                </div>

                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        RCL Capital Management first registered as an investment advisor in the state of Pennsylvania in October of 1997.
                   </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header bg-light" id="headingTwo">
                    <button className="mb-0" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How many clients does RCL Capital Management currently serve?
                    </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        The firm currently serves approximately 75 clients.  The goal is not to be the biggest, but rather to be the best financial advisor and asset manager for a select group of clients that work with RCL Capital Management.  Research has shown that individuals view their financial matters in a very personal way and I believe that the relationship between a client and an advisor should be very personal as well.      </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header bg-light" id="headingThree">
                    <button className="mb-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Is a client required to be a Pennsylvania resident?
                    </button>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        No. While a concentration of clients reside in the municipalities surrounding Wexford, PA including the townships of Ross, McCandless, Bradford Woods, Gibsonia, Cranberry and throughout western Pennsylvania, we also serve clients in other areas of the country such as Virginia, New York, Georgia, New Jersey, Oklahoma, Louisiana, and California.      </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header bg-light" id="headingFour">
                    <button className="mb-0" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Does RCL Capital Management specialize in a particular practice area?
                    </button>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                        My area of specialty is in the retirement planning market.  The focus is on preparing individuals for this exciting, although challenging, aspect of their financial lives so that apprehension is replaced with financial freedom.                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header bg-light" id="headingFive">
                    <button className="mb-0" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How does RCL Capital Management get paid?
                    </button>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div className="card-body">
                        My fee is based on a percentage of assets under management.  The calculated fee is transferred from the client account balance under management into my account at the end of each quarter.  Invoices are not mailed to clients and checks are not written by clients for the amount charged. However, the fee is detailed on the client account statement so that the propriety of the amount charged can be verified.  In order to maintain our objectivity, commissions are never collected from the investments recommended.</div>
                </div>
            </div>
            <div className="card">
                <div className="card-header bg-light" id="headingSix">
                    <button className="mb-0" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">

                        Is there a fee for an initial consultation?
                    </button>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div className="card-body">
                        No.  The purpose of meeting for an initial consultation is in order to give a prospective client the opportunity to get to know me and it also provides me with the opportunity to get to know the prospective client.  On certain occasions, this process has extended over several meetings in order for us to adequately get to know each other.  We are investigating the potential for entering into a relationship that will hopefully last a lifetime and that relationship should only begin after we are comfortable with each other. </div>
                </div>
                <div className="card">
                    <div className="card-header bg-light" id="headingSeven">
                        <button className="mb-0" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">

                            Will a client ever be relegated to working with another advisor within RCL Capital Management?

                        </button>
                    </div>
                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                        <div className="card-body">
                        This business is based primarily on a personal relationship between me and each of my clients.  Therefore, I believe that it is critically important that the relationship remain intact for as long as you are a client of RCL Capital Management.  As we continue to grow, administrative tasks might be delegated to others or outsourced but the management of your account and our relationship will never change. </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-light" id="headingEight">
                        <button className="mb-0" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">

                            Does RCL Capital Management sell insurance?

                        </button>
                    </div>
                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                        <div className="card-body">
                            No.  The immediate commissions earned from selling insurance can be significant.  I do not want to compromise my objectivity by having clients question whether I am recommending an insurance product simply because of the commission earned from the transaction.  My objectivity, both perceived and real, is critically important to the trust relationship between a client and advisor and should not be jeopardized by the potential to benefit financially in the short term from commission income.  Furthermore, I am a financial professional who is passionate about investment management and financial planning. I am not an insurance salesman.  An outside network of insurance professionals can be referred in the event that a client has the need for any type of insurance product.
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header bg-light" id="headingNine">
                        <button className="mb-0" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            Will RCL Capital Management prepare my income tax return?
                        </button>
                    </div>
                    <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                        <div className="card-body">
                            Although I am a CPA with an understanding of personal income taxes, I do not have a passion for preparing income tax returns.  Furthermore, the busy workload of a tax season would prevent me from devoting my full attention towards managing client assets during this hectic time of year.  I have a network of tax professionals who can be referred in the event that a client has the need for tax preparation and tax planning services.
                            However, the area of investment management should not happen in a vacuum and ignore the impact of income taxes.  My background provides a level of understanding in this area that is not typical of most financial advisors.  It is not the amount that you make; it is the amount that you keep after taxes that matters.
                            I have also encountered clients that have struggled with obtaining the cost basis of investments sold when preparing their income tax returns.  RCL Capital Management does not simply provide clients with the information required to calculate the cost basis, we actually prepare the calculation for them.
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header bg-light" id="headingTen">
                        <button className="mb-0" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">

                            What makes RCL Capital Management unique?
                        </button>
                    </div>
                    <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                        <div className="card-body">
                            I believe that a financial advisor should be a financial professional and not a financial salesperson.  My background is as a CPA and not selling securities or insurance products and, as unbelievable as it sounds, this background is not typical for those who call themselves financial advisors.  Unfortunately, this profession is dominated by financial salespeople.  My background is important because my priority is providing independent, objective financial advice that is always in the best interest of the client rather than attempting to sell the financial product that will result in the largest commission for me.
                        Clients of RCL Capital Management develop a personal relationship with an advisor that will last a lifetime.  Many prospective clients have become frustrated with experiences with large firms where their 'advisor' had quit, was terminated, or was promoted to another position and they were assigned to a new advisor.  I feel strongly that a financial advisor should never be assigned to a client.  This is a personal relationship based on mutual respect and trust.  Working with RCL Capital Management will provide an experience where a mutually positive relationship is initiated between a client and an advisor that begins with the sharing of financial information and culminates in the accomplishment of agreed-upon lifelong financial goals.</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Accordian;