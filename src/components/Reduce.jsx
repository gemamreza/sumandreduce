import React, { Component } from 'react';
import './../supports/style.css';

class Reduce extends Component {
    
    reduce = (input, pengurang) => {

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
        input = parseInt(this.refs.inputbulan.value)
        pengurang = parseInt(this.refs.inputreduce.value)

        var result = Math.abs(input - pengurang)
        var a= 0
        var one = (pengurang < input)
        var two = (pengurang > input && result < 12)
        var three = (pengurang > input && result > 12)
      
        switch(true){
            case one :
                alert(month.urut[result]);
            break;
            case two:
                alert(month.urut[12 - result]);
            break;
            case three:
                a = result % 12
                alert(month.urut[12 - a]);
            break;
            default:
                alert(month.urut[input]);
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
                            <input type="number" placeholder="Masukan angka 1 - 12" className="form-control" ref="inputbulan" onChange={this.inputValidation} />
                            <label>Pengurang</label>
                            <input type="number" placeholder="Masukan jumlah bulan" className="form-control" ref="inputreduce" />
                            <center>
                                <input type="button" className="btn btn-primary mt-2" value="HASIL" onClick={this.reduce}/>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reduce;