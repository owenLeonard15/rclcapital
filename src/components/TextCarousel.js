import React from 'react';

const TextCarousel = ({currentItem}) => {
  const carouselItems = [
    {
      id: 0,
      text: "We'll manage your investments (ie. IRA, 401(k) and other holdings) carefully and prudently to ensure redundancies and holes are eliminated. Our asset allocation expertise will help you determine how much of your investment portfolio should be invested in cash, bonds, stocks or real estate. The first step is to help you understand your tolerance for risk and volatility. We’ll achieve this by developing a close personal relationship which will help us answer crucial questions: Can you withstand a significant decline in the value of your portfolio? Do you need to obtain a specified rate of return in order to accomplish their investment objectives? When will you need to access various portions of you investment portfolio? With us, you’ll enter into an ongoing educational process that fosters sound decisions about the various options and the expected results that can be reasonably expected from each of those options. For effective asset allocation, your goals will be identified, your risk tolerance evaluated, and a personalized portfolio will be implemented and monitored thereafter." 
    },
    {
      id: 1,
      text: "Every investment decision has income tax consequences. We can help you understand the implications. It is virtually impossible to make an investment transaction without there be a corresponding income tax consequence.  With a CPA background, we have a thorough understanding of income tax law and how it impacts your long-term investment performance. The most important number to review is not the rate of return or dollar amount that you earn, but rather the rate of return and dollar amount that you keep that matters.  The higher your marginal income tax bracket, the more you need to focus on the impact of income taxes. But even for investors in the lowest income tax bracket, the tax impact on a portfolio is significant and should not be ignored.  Unfortunately, too many investors and their advisors simply do not have a comprehensive understanding of the impact of income taxes and their impact on their investment portfolio. The area of income taxes and their impact on an investment portfolio is a perfect illustration of why your financial advisor should be a financial professional and not a financial salesperson. "
    },
    {
      id: 2,
      text: "Preparing for retirement can be stressful, but when done correctly it brings peace of mind. We can help you answer the critical questions and bring you that peace of mind. Ask yourself: Do I have enough money to last the rest of my life? Can I retire early? From which of my accounts should I withdraw money first? What are the income tax implications of withdrawing my money from my retirement accounts? How much money can I expect to live on once I retire? It is never too late to develop a retirement plan. Even if you are already retired, preparing a plan will allow you to make decisions based on an objective understanding of the options available to you. Our firm is equipped to assist in the development of a retirement plan prior to retirement and the continued implementation of that plan throughout your retirement years."
    },
    {
      id: 3,
      text: "Effective rollovers consist of two components - knowledge of the options available and the subsequent investment of the assets to take advantage of the numerous available options. Individual Retirement Accounts and 401(k) plan assets have one distinct advantage not generally available for many other investment vehicles and that is the deferral of income tax on the earnings until the assets are withdrawn or avoided completely in the case of Roth IRA assets. Therefore, it is critically important that the proper procedures are followed in order to protect the preferential tax treatment by the IRS. RCL Capital will ensure that all assets are rolled over properly so that income taxes are not paid prematurely. Furthermore, leaving 401(k) assets in previous employer plans does not take advantage of the significant number of attractive investment options if the assets are rolled over into an IRA. Many investors leave their assets in an old employer's plan simply because they do not know what to do with the money. Generally, it is not to your advantage to leave your assets in a 401(k) plan when those assets can be rolled over into an IRA with thousands of options available. RCL Capital help you explore the options and pick the one that is most advantageous for you and your long-term financial success.  We look forward to working with you to effectively transition your IRA and 401(k) assets. "
    },
    {
      id: 4,
      text: "The costs to attend college continue to increase significantly. We can help you prepare for your children's education by using specialized investment vehicles like 529s that make it easy. We'll help you calculate the dollar amount you need to invest based on the age of your children, projected college costs and the expected rate of return. Then, we'll help you sort through the myriad of education investment vechicles such as 529s, Coverdale Education Savings Accounts, UTMAs and UGMAs to determine the solution which best fits your needs. Many state 529 plans also provide state income tax benefits for residents of their respective states. For example, the state of Pennsylvania now provides for an annual contribution to any state's 529 plan. RCL Capital Management can assist you in determining which combination of tools and plans will most effectively meet your college funding objectives. "
    },
    {
      id: 5,
      text: "You've worked hard to accumulate your assets. We can help ensure they're eventually passed to the persons of your choosing, not the government. We can help you can use existing tax laws to maximize the assets which stay within your family and the charitable organizations of your choosing. We'll review your will, how your assets are titled (jointly, individually, etc.) and your beneficiary designations, and discuss potential tools that can be used to pass your estate to your heirs. We'll also work with your attorney to ensure that any recommendations fulfill the required legal standards of your particular state. With a little planning, you can decide not only who receives your assets, but also how much they receive and how they are used ... even after you are gone. "
    }
  ];

  return (
    <div id="carousel" className="carousel slide p-4">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p className="d-block w-100">
          {
            
            carouselItems[currentItem].text
          }
          </p>
        </div>
    </div>
  </div>

  )
}

export default TextCarousel;