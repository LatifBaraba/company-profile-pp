import React, { useEffect } from "react"
import Contact from "../Common/Contact"
import Footer from "../Common/Footer"

const NewsDetail = (props) => {
    const item = props.location.state

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    

    return (
        <>
            <div className="container-xl" style={{ marginTop: '100px' }}>

                <div class="row">
                    <div class="col-sm-4 grid-margin">
                        <div class="position-relative">
                            <div class="rotate-img">
                                <img src={item.image} alt="thumb" class="img-fluid" />
                            </div>
                            <div class="badge-positioned">
                                <span class="badge badge-danger font-weight-bold">{item.tag}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8  grid-margin">
                        <h2 class="mb-2 font-weight-600">
                            {item.sub_title}
                        </h2>
                        <div class="fs-13 mb-2">
                            {item.created_at.slice(0, 10)}
                        </div>
                        <p class="mb-0">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
            <Contact menu={item.menu} kontak={item.kontak} hubungi={item.hubungi} />
            <Footer/>
        </>
    )
}

export default NewsDetail