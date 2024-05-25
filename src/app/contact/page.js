import styles from "../page.module.css";
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function contact() {
    return (
        <>
            <div className={styles.contact}>

                <div className={styles.discuss}>
                    <h2>Let’s Discuss Your Project</h2>
                    <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                </div>
                

                <form class="needs-validation" novalidate>
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control"  placeholder="Name" required />

                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control"  placeholder="Email" required />

                    </div>

                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control"  placeholder="Subject" required />

                    </div>
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control"  placeholder="Message" required />

                    </div>


                    <div class="col-12">
                        <button class="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>

            </div>


        </>
    )
}