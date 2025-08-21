import img1 from '../assets/offer1.jpg';
import img2 from '../assets/offer2.jpg';
import img3 from '../assets/offer3.jpg';

export default function OurOffer() {
  return (
    <section className="our-offer">
        <style jsx="true">{`
            .offer-image{
                max-width: 100%;
                display: grid;
                grid-template-columns: repeat(3, .7fr);
                align-items: baseline;
                overflow: auto;
                text-align: center;
            }

            .offer-image > div{
                padding: 20px;
            }

            .offer-image img{
                width: 80%;
                display: block;
                min-width: 300px;
            }

            .offer-image > *:nth-child(2){
                margin-bottom: -10px;
            }

            .offer-image span{
                font-size: 25px;
                margin-top: 15px;
            }

        `}</style>
        
        <div className="shell">
        <h2>We Offer Top Notch</h2>
        <p className="muted">CampusConnect was built by students, for students to cut out the scams, connect renters directly with landlords, and create a fair housing community for everyone.</p>
        <ul>
            <li>Wide range of listings</li>
            <li>Easy booking process</li>
            <li>Secure payments</li>
            <li>24/7 customer support</li>
        </ul>
        </div>

        {/* <div className="offer-image">
            <div>
                <img src={img1} alt="Offer 1" />
                <span>For students</span>
            </div>
            <div>
                <img src={img2} alt="Offer 2" />
                <span>For agents</span>
            </div>
            <div>
                <img src={img3} alt="Offer 3" />
                <span>For The Community</span>
            </div>
        </div> */}
    </section>
  );
}