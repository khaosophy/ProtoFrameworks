import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <a href="https://www.partyrentalltd.com/products/buffet-cooking-and-chafing-dishes/copper-and-wrought-iron/5050">
          <picture>
              <source media="(min-width: 768px)" srcSet="//s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_desktop?wid=1920, //s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_desktop?wid=3840 2x" />
              <source media="(min-width: 580px)" srcSet="//s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_mobile?wid=580, //s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_mobile?wid=1160 2x" />
              <source media="(min-width: 320px)" srcSet="//s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_mobile?wid=375, //s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_mobile?wid=750 2x" />
              <img alt="Chafing Dishes For Rent" src="//s7d2.scene7.com/is/image/PartyRental/homeHero_02_09132022_desktop?wid=1920" />
          </picture>
        </a>
      </section>

      <section className="home-cta-section container">
        <div className="home-cta__block">
          <img className="home-cta__img" src="//s7d2.scene7.com/is/image/PartyRental/homeCTA_01_072723?hei=700" />
          <a href="/guides/seasonal-inspirations" className="home-cta__button">
              SEASONAL LOOKS
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.9 244" xmlSpace="preserve">
                  <path style={{ fill: '#fff' }} d="M151.8,244h-45.9l105.7-105.7H0v-32.6h211.6L106,0h45.9l122,122L151.8,244z"></path>
              </svg>
          </a>
        </div>
        <div className="home-cta__block">
            <img className="home-cta__img" src="//s7d2.scene7.com/is/image/PartyRental/homeCTA_03_032423?hei=700" />
            <a href="https://help.partyrentalltd.com/en_US/general-help/how-do-i-make-an-appointment-to-visit-a-design-studio" className="home-cta__button">
                DESIGN STUDIOS
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.9 244" xmlSpace="preserve">
                    <path style={{ fill: '#fff' }} d="M151.8,244h-45.9l105.7-105.7H0v-32.6h211.6L106,0h45.9l122,122L151.8,244z"></path>
                </svg>
            </a>
        </div>
        <div className="home-cta__block">
            <img className="home-cta__img" src="//s7d2.scene7.com/is/image/PartyRental/homeCTA_03_072723?hei=700" />
            <a href="/products/new" className="home-cta__button">
                NEW PRODUCTS
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.9 244" xmlSpace="preserve">
                    <path style={{ fill: '#fff' }} d="M151.8,244h-45.9l105.7-105.7H0v-32.6h211.6L106,0h45.9l122,122L151.8,244z"></path>
                </svg>
            </a>
        </div>
        <div className="home-cta__block">
            <img className="home-cta__img" src="//s7d2.scene7.com/is/image/PartyRental/homeCTA_03_112222?hei=700" />
            <a href="https://help.partyrentalltd.com/" className="home-cta__button">
                HELP CENTER
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.9 244" xmlSpace="preserve">
                    <path style={{ fill: '#fff' }} d="M151.8,244h-45.9l105.7-105.7H0v-32.6h211.6L106,0h45.9l122,122L151.8,244z"></path>
                </svg>
            </a>
        </div>
        <div className="home-cta__block">
            <img className="home-cta__img" src="//s7d2.scene7.com/is/image/PartyRental/homeCTA_05_072723?hei=700" />
            <a href="https://www.partyrentalltd.com/guides/linen-sizes" className="home-cta__button">
                LINEN SIZE GUIDE
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.9 244" xmlSpace="preserve">
                    <path style={{ fill: '#fff' }} d="M151.8,244h-45.9l105.7-105.7H0v-32.6h211.6L106,0h45.9l122,122L151.8,244z"></path>
                </svg>
            </a>
        </div>
      </section>

      <section className="home-content-block">
        <a href="https://www.partyrentalltd.com/guides/seasonal-inspirations">
          <picture>
            <source media="(min-width: 768px)" srcSet="//s7d2.scene7.com/is/image/PartyRental/homeBlog_081723_desktop?wid=1920, //s7d2.scene7.com/is/image/PartyRental/homeBlog_081723_desktop?wid=3840 2x" />
            <source media="(min-width: 580px)" srcSet="//s7d2.scene7.com/is/image/PartyRental/homeBlog_081723_mobile?wid=768, //s7d2.scene7.com/is/image/PartyRental/homeBlog_081723_mobile?wid=1536 2x" />
            <source media="(min-width: 320px)" srcSet="//s7d2.scene7.com/is/image/PartyRental/homeBlog_081723_mobile?wid=580, //s7d2.scene7.com/is/image/PartyRental/homeBlog_081723_mobile?wid=1160 2x" />
            <img alt="2023 Party Rental Ltd. Fall Product Lookbook" src="//s7d2.scene7.com/is/image/PartyRental/homeBlog_072023_desktop?wid=1920" style={{ width: '100%' }} />
          </picture>
        </a>
      </section>
    </Layout>
  )
}