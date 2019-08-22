import React, { Component } from 'react';
import './../supports/style.css';

class Add extends Component {

    addHandle = (input, penambah) => {

        var month = {
            urut : {
                1 : "January",
                2 : "February",
                3 : "March",
                4 : "April",
                5 : "May",
                6 : "June",
                7 : "July",
                8 : "August",
                9 : "September",
                10 : "October",
                11 : "November",
                12 : "December"
            }
        } 

        input = this.refs.inputbulan.value
        penambah = this.refs.inputadd.value
       
        var a = 12
        var result = (parseInt(input) + parseInt(penambah))%12;
        switch(result){
        case 0 :
            alert(month.urut[a]);
        break;
        default :
            alert(month.urut[result]);
        }
    }

    inputValidation =() => {
        var input = this.refs.inputbulan.value
        if(input < 1) {
            this.refs.inputbulan.value = 1
        } else if(input > 12){
            this.refs.inputbulan.value = 12
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="batas">
                        <div className="form-group">
                            <label>Bulan</label>
                            <input type="number" onChange={this.inputValidation} placeholder="Masukan angka 1 - 12" className="form-control" ref="inputbulan" />
                            <label>Penambah</label>
                            <input type="number" placeholder="Masukan jumlah bulan" className="form-control" ref="inputadd" />
                            <center>
                                <input type="button" className="btn btn-primary mt-2" value="HASIL" onClick={this.addHandle}/>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;