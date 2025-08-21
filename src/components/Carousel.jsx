import img1 from '../assets/img/hero-slider-1.jpg';
import img2 from '../assets/img/hero-slider-2.jpg';
import img3 from '../assets/img/hero-slider-3.jpg';

import {motion}  from 'framer-motion'
export default function OurOffer() {
  return (
    <section className="our-offer">
        <style jsx="true">{`
            .hero-slider{
                width: 100%;
                max-width: 100%;
                overflow: hidden;
                max-height: 80vh;
                position: relative;
            }

            .hero-slider > .img{
                max-width: 100%;
                width: 100%;
                position: absolute;
                z-index: 10;
                top: 0;
                left: 0;
                object-position: center;

            }

            .dummy{
                position: block !important;
                width: 100%;
                max-width: 100%;    
                opacity: 0;        
            }

            div.img{
                height: 100%;
                background: rgba(0, 0, 0, 0.65);
                display: flex;
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(1px);
                transition: .5s;
                text-align: center;
            }

            div.img:hover{
                backdrop-filter: blur(5px);
            }

            div.img p{
            max-width: 500px
            ;margin-top: -90px;
            margin-left: 20%}
        `}</style>
        <div className='hero-slider'>
            <img  src={img1} className='dummy' />
            <motion.img initial = {{opacity: 1}} animate ={{opacity: 0}} transition={{duration: 9, delay: 4, repeat: 'reverse'}} src={img1} className='img'/>
            <motion.img initial = {{opacity: 1}} animate ={{opacity: 0}} transition={{duration: 7, delay: 2, repeat: 'reverse'} } src={img2} className='img'/>
            <motion.img initial = {{opacity: 1}} animate ={{opacity: 0}} transition={{duration: 5, repeat: 'reverse'}} src={img3} className='img'/>
            <div className='img'>
                <article>
                    <h1 style = {{fontSize: '100px'}}>Campus Connect</h1>
                    <p>
                        Find Your Ideal
    Student Accommodation
    From verified listings to escrow payments, CampusConnect uses tech to protect your rent and your peace of mind
                    </p>
                </article>
                
            </div>
            
        </div>
        <br />
        <br />
    </section>
  );
}