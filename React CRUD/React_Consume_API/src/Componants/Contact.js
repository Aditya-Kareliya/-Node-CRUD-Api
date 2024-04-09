// import "./main.css"

export default function Contact() {
    return(
        <>
            <div class="container mt-5 mb-5 pt-2 pb-3 text-center">
                <form class="form-control form-control-lg text-center">
                    <h1 class="card-title fs-2 d-flex justify-content-center text-center m-5">CONTACT US</h1>
                    {/* <div className="m-3">Leave a Message</div> */}
                    <div class="mb-3">
                        <input class="form-control" type="text" name="name" placeholder="Name"/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>
                    <div class="m-3">
                        <button type="button" class="btn btn-success">Submmit</button>
                    </div>
                </form>
            </div>
        </>
    )
}