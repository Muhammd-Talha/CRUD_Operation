import React from 'react';
import './Components.css'
import { Container, Button } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs";
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-4'>Welcome To EatWell</h1>
            <Container>
            <div className='Image-s'>
                <img src='./bg_2.jpg.webp' alt='logo' />
            </div>
            </Container>
            <div>
                <h1 className='mt-5 mb-5 text-center'>Our Master Chef</h1>
            </div>
            <Container>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-1.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./chef-1.jpg.webp' alt='logo' />

                            <div className="card-body">
                                <h5 className="card-title">John Smooth</h5>
                                <p className="card-text"> Owner.</p>
                                <div className='icon-s'>
                                    < BsFacebook className='icon' />
                                    < BsTwitter className='icon' />
                                    < BsGoogle className='icon' />
                                    < BsInstagram className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-2.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./chef-2.jpg.webp' alt='logo' />

                            <div className="card-body">
                                <h5 className="card-title">Rebca Welso</h5>
                                <p className="card-text">Head Chef.</p>
                                <div className='icon-s'>
                                    < BsFacebook className='icon' />
                                    < BsTwitter className='icon' />
                                    < BsGoogle className='icon' />
                                    < BsInstagram className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-3.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./chef-3.jpg.webp' alt='logo' />

                            <div className="card-body">
                                <h5 className="card-title">Kharl Branyt</h5>
                                <p className="card-text"> junior Chef.</p>
                                <div className='icon-s'>
                                    < BsFacebook className='icon' />
                                    < BsTwitter className='icon' />
                                    < BsGoogle className='icon' />
                                    < BsInstagram className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-1.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./chef-1.jpg.webp' alt='logo' />

                            <div className="card-body">
                                <h5 className="card-title">Luke Simon</h5>
                                <p className="card-text">junior Chef.</p>
                                <div className='icon-s'>
                                    < BsFacebook className='icon' />
                                    < BsTwitter className='icon' />
                                    < BsGoogle className='icon' />
                                    < BsInstagram className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='i-mages'>
                <h1 className='mt-5 mb-5 text-center'>Recent Post</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-1.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./image_1.jpg.webp' alt='logo' />

                            <div className="card-body">
                                <p>Sept. 06, 2019 Admin</p>
                                <h5 className="card-title">Taste the delicious foods in Asia</h5>
                                <p className="card-text">Read more.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-2.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./image_2.jpg.webp' alt='logo' />

                            <div className="card-body">
                                <p>Sept. 06, 2019 Admin</p>
                                <h5 className="card-title">Taste the delicious foods in Asia</h5>
                                <p className="card-text">Read more.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            {/* <img src="./chef-3.jpg.webp" className="card-img-top" alt="logo"> */}
                            <img src='./image_3.jpg.webp' alt='logo' />
                            <div className="card-body">
                                <p>Sept. 06, 2019 Admin</p>
                                <h5 className="card-title">Taste the delicious foods in Asia</h5>
                                <p className="card-text">Read more.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <Container className='i-mages'>
                <h1 className='mt-5 mb-5 text-center'>Our Offer This Summer</h1>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            {/* <img src="./chef-1.jpg.webp" class="card-img-top" alt="logo"> */}
                            <img src='./offer_1.jpg.webp' alt='logo' />

                            <div class="card-body cen-ter">
                                <p className='color-s'>$22.50</p>
                                <h5 class="card-title">Beef With Souce</h5>
                                <p class="card-text">FAr far away, behind the world mountain, far from the countries and Consonantia</p>
                                <Button className=' Butt-on'>Order Now</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            {/* <img src="./chef-2.jpg.webp" class="card-img-top" alt="logo"> */}
                            <img src='./offer_2.jpg.webp' alt='logo' />

                            <div class="card-body cen-ter">
                                <p className='color-s'>$10.50</p>
                                <h5 class="card-title">Fresh Salmon Fish</h5>
                                <p class="card-text">FAr far away, behind the world mountain, far from the countries and Consonantia</p>
                                <Button className=' Butt-on'>Order Now</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            {/* <img src="./chef-3.jpg.webp" class="card-img-top" alt="logo"> */}
                            <img src='./offer_3.jpg.webp' alt='logo' />
                            <div class="card-body cen-ter">
                                <p className='color-s'>$14.00</p>
                                <h5 class="card-title">Beef Ribs</h5>
                                <p class="card-text">FAr far away, behind the world mountain, far from the countries and Consonantia</p>
                                <Button className=' Butt-on'>Order Now</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <Container >
                <h1 className='mt-5 mb-5 text-center'>
                    Delicious Menu

                </h1>
                <div className='row row-cols-1 row-cols-md-2 g-4'>

                    <div className='d-flex'>
                        <div>
                            <img src='menu_2.jpg.webp' />
                        </div>
                        <div className= 'com-mon'>
                            <h5>Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p >$12.12</p>

                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src='menu_2.jpg.webp' />
                        </div>
                        <div className= 'com-mon'>
                            <h5>Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p >$08.12</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src='menu_1.jpg.webp' />
                        </div>
                        <div className= 'com-mon'>
                            <h5>Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p >$13.12</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src='menu_2.jpg.webp' />
                        </div>
                        <div className= 'com-mon'>
                            <h5>Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p >$03.12</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src='menu_2.jpg.webp' />
                        </div>
                        <div className= 'com-mon'>
                            <h5>Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p >$05.12</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src='menu_2.jpg.webp' />
                        </div>
                        <div className= 'com-mon'>
                            <h5>Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p >$17.12</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />

        </div>
    );
}

export default Home;
