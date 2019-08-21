import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center" style={{marginTop:"15%"}}>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4" >
                        <h1>Program Menghitung Bulan</h1>
                        <ol style={{textAlign:"left"}}>
                            <li>Menambah : <Link to='/add'><input type="button" className="btn btn-primary" value="ADD"></input></Link></li>
                            <li style={{marginTop:'5px'}}>Mengurang : <Link to='/reduce'><input type="button" className="btn btn-primary" value="REDUCE"></input></Link></li>
                        </ol>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;