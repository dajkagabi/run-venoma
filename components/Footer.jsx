import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: 'PRODUCTS',
      links: [
        'Shoes',
        'Clothing',
        'Accesories',
        'Gift Cards',
        'New Arrivals',
        'Best Sellers',
        'Sale',
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        'Find A Store',
        'Become A Member',
        'Student Discounts',
        'Send Us Feedback',
        'Golf Shorts',
      ],
    },
    {
      title: 'HELP',
      links: [
        'Get Help',
        'Order Status',
        'Delivery',
        'Returns',
        'Payment Options',
        'Contact Us',
      ],
    },
    {
      title: 'COMPANY',
      links: ['About Venoma', 'News', 'Careers', 'Investors', 'Sustainability'],
    },
  ];

  const legalLinks = ['Terms of use', 'Cookies Settings', 'Privacy Policy'];

  return (
  
    <footer className="w-full bg-white text-gray-700">
     
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
             
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase border-b border-gray-300 pb-2 mb-4">
                {column.title}
              </h3>
             
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                  
                    <a
                      href="#"
                      className="text-sm hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm hover:text-gray-400 transition duration-150 ease-in-out"
              >
                {link}
              </a>
            ))}
          </div>

         <p className="text-xs text-gray-400 mt-2 md:mt-0 md:ml-4">  © 2025 Venoma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;