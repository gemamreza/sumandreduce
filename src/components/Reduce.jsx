import React, { Component } from 'react';
import './../supports/style.css';

class Reduce extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="batas">
                        <div className="form-group">
                            <label>Bulan</label>
                            <input type="number" placeholder="Masukan angka 1 - 12" className="form-control" ref="inputbulan" />
                            <label>Pengurang</label>
                            <input type="number" placeholder="Masukan jumlah bulan" className="form-control" ref="inputreduce" />
                            <center>
                                <input type="button" className="btn btn-primary mt-2" value="HASIL"/>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reduce;