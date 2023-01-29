import './articleDetails.css';

export default function ArticleDetails() {
    return (
        <div>
            <section className="header">
                <article>
                    <h1 className="article--header">The importance of proteins</h1>
                </article>
                <article>
                    <q className="descr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt deleniti error
                        necessitatibus quis architecto aspernatur animi ea autem? Repudiandae, repellat alias asperiores quasi
                        culpa
                        officia neque animi veniam distinctio.
                    </q>
                </article>
            </section>

            <section className="hero">
                <article className="content">
                    <div className="user-details">
                        <div className="img-holder">
                            <img className="profile--image"
                                src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d"
                                alt="" />
                        </div>
                        <div className="user--information">
                            <p>Ivan Ivanov</p>
                            <p>Beginner</p>
                        </div>
                        <div className="user__stats">
                            <div className="stats__wrapper">
                                <i className="fa-solid fa-utensils"></i>
                                <p>31</p>
                            </div>

                            <div className="stats__wrapper">
                                <i className="fa-sharp fa-solid fa-camera"></i>
                                <p>220</p>
                            </div>

                            <div className="stats__wrapper">
                                <i className="fa-solid fa-fire-burner"></i>
                                <p>31</p>
                            </div>
                        </div>
                    </div>

                    <div className="user--icons">
                        <div className="wrapper">
                            <button className="btn"> <i className="fa-solid fa-pen-to-square"></i> </button>
                            <span>Edit</span>
                        </div>
                        <div className="wrapper">
                            <button className="btn"><i className="fa-regular fa-trash-can"></i></button>
                            <span>Delete</span>
                        </div>
                        <div className="wrapper">
                            <button className="btn"><i className="fa-regular fa-images"></i></button>
                            <span>Change photo</span>
                        </div>
                        <div className="wrapper">
                            <button className="btn"><i className="fa-solid fa-heart"></i> </button>
                            <span>Favourites</span>
                        </div>
                    </div>
                </article>

                <article className="article--img--icons">
                    <div className="icons">
                        <div className="wrapper">
                            <span>Category: </span>
                            <p>Proteins</p>
                        </div>
                        <div className="wrapper">
                            <span>Added on: </span>
                            <p>21.10.2022</p>
                        </div>
                        <div className="wrapper">
                            <span>Last edited: </span>
                            <p>21.10.2022</p>
                        </div>
                    </div>

                    <img src="/img/dishes/Best-Lasagna-550.jpg" className="image" alt="" />
                </article>
            </section>

            <section className="article--content">
                <article>
                    <h3>Why to count proteins ?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eum fugit assumenda eius dignissimos
                        sunt, optio corrupti ipsam asperiores iure pariatur ullam officiis quisquam possimus qui. Facilis
                        adipisci numquam commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi atque sapiente, corrupti esse, magni, ipsum nihil ut alias eaque deserunt similique laboriosam magnam dolorum distinctio impedit voluptate nulla iusto?</p>
                </article>
            </section>
        </div>
    );
}