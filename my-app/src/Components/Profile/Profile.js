import './profile.css';

export default function Profile() {
    return (
            <section className="user-profile">
                <article className="user-details">
                    <div className="img-holder">
                        <img src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d"
                            alt="" />
                        <p className="level">Level : <span>Chef</span></p>
                    </div>
                    <div className="user-information">
                        <div className="user-personal-data">
                            <div className="wrapper">
                                <div className="name">
                                    <label>full name</label>
                                    <p>Ivan Ivanov</p>
                                </div>
                                <div className="username">
                                    <label>username</label>
                                    <p>Ivanko</p>
                                </div>
                            </div>
                            <div>
                                <div className="email">
                                    <label>email</label>
                                    <p>ivanivano@abv.bg</p>
                                </div>
                                <div className="phone">
                                    <label>phone</label>
                                    <p>0888333222</p>
                                </div>
                            </div>
                        </div>

                        <div className="user--icons">
                            <div className="wrapper">
                                <button className="btn"><i className="fa-solid fa-utensils"></i></button>
                                <p>Cooked: <span>31</span></p>
                            </div>

                            <div className="wrapper">
                                <button className="btn"><i className="fa-solid fa-heart"></i></button>
                                <p>Favorites: <span>31</span></p>
                            </div>
                            <div className="wrapper">
                                <button className="btn"><i className="fa-solid fa-camera"></i></button>
                                <p>Gallery</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="recipies">
                    <div>
                        <h2 className="recipies-title">Recently added</h2>
                        <ul className="card-list" type="none">
                            <li>
                                <a href="#">
                                    <div className="card-item">
                                        <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                        <h3 className="card-title">Lasagna</h3>
                                        <p className="card-descr">Very delicious dish for the whole family...</p>
                                        <span><i className="fa-solid fa-clock"></i>30 mins</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="card-item">
                                        <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                        <h3 className="card-title">Lasagna</h3>
                                        <p className="card-descr">Very delicious dish for the whole family...</p>
                                        <span><i className="fa-solid fa-clock"></i>30 mins</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="card-item">
                                        <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                        <h3 className="card-title">Lasagna</h3>
                                        <p className="card-descr">Very delicious dish for the whole family...</p>
                                        <span><i className="fa-solid fa-clock"></i>30 mins</span>
                                    </div>
                                </a>
                                <p className="show-all"><a href="">Show all...</a></p>
                            </li>

                        </ul>
                    </div>
                </article>
            </section>
    
    );


}