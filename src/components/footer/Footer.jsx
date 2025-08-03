import React from 'react'

function Footer() {
  return (
    <>
         <footer className="bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="footer-title text-[#191919] opacity-100 text-xs ">Buy</h3>
          {[
            'Registration',
            'Bidding & buying help',
            'Stores',
            'Creator Collections',
            'eBay for Charity',
            'Charity Shop',
            'Seasonal Sales and events',
            'eBay Gift Cards',
          ].map((link) => (
            <a key={link} href="#" className="link link-hover text-xs block mb-3">{link}</a>
          ))}
        </div>
        <div>
          <h3 className="footer-title text-[#191919] opacity-100  text-xs">Sell</h3>
          {[
            'Start selling',
            'How to sell',
            'Business sellers',
            'Affiliates',
          ].map((link) => (
            <a key={link} href="#" className="link link-hover block  text-xs mb-3">{link}</a>
          ))}
           <h3 className="footer-title text-[#191919] opacity-100 text-xs mt-7">Tools & apps</h3>
          {[
            'Developers',
            'Security center',
            'Site map',
           
          ].map((link) => (
            <a key={link} href="#" className="link link-hover block text-xs mb-3">{link}</a>
          ))}
        </div>
        <div>
          <h3 className="footer-title text-[#191919] opacity-100 text-xs"> eBay companies</h3>
        
            <a href="#" className="link link-hover block text-xs mb-2">  TCGplayer</a>
         
           <h3 className="footer-title text-[#191919] opacity-100 text-xs mt-7">Stay connected</h3>
          {['Facebook', 'X (Twitter)'].map((link) => (
            <a key={link} href="#" className="link link-hover block text-xs mb-3">{link}</a>
          ))}
        </div>
       
        <div>
          <h3 className="footer-title text-[#191919] opacity-100 text-xs">About eBay</h3>
          {[
            'Company info',
            'News',
            'Deferred Prosecution Agreement',
            'Investors',
            'Careers',
            'Diversity & Inclusion',
            'Global Impact',
            'Government relations',
            'Advertise with us',
          ].map((link) => (
            <a key={link} href="#" className="link link-hover block text-xs mb-3">{link}</a>
          ))}
        </div>
        <div>
          <h3 className="footer-title text-[#191919] opacity-100 text-xs">Help & Contact</h3>
          {[
            'Verified Rights Owner (VeRO) Program',
            'eCI Licenses',
            'Seller Center',
            'Contact Us',
            'eBay Returns',
            'Money Back Guarantee',
            'eBay Community',
            'eBay for Business Podcast',
            'eBay Sites',
          ].map((link) => (
            <a key={link} href="#" className="link link-hover block text-xs mb-3">{link}</a>
          ))}
        </div>
      </div>

      <div className="border-t border-base-300 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-600">
          <div className="mb-2 md:mb-0">United States</div>
          <div className="flex flex-wrap gap-x-2">
            <span>© 1995 – 2025 eBay Inc. All Rights Reserved.</span>
            {[
              'Accessibility',
              'User Agreement',
              'Privacy',
              'Consumer Health Data',
              'Payments Terms of Use',
              'Cookies',
              'CA Privacy Notice',
              'Your Privacy Choices',
              'AdChoice',
            ].map((item) => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
