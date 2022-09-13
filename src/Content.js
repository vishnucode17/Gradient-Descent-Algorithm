import React, { useEffect, useState } from 'react';
import Graph from './Graph';
import './content.css';
const Content = () => {
    const [data, setData] = useState("");
    const [label, setLabel] = useState("");
    var [l_rate, setL_rate] = useState(0.001);
    var [n_iter, setN_iter] = useState(1000);
    var data_array = data.split(',');
    var label_array = label.split(',');
    var data_object = [];
    for (let i = 0; i < data_array.length; i++) {
        let data_value = {}
        data_value["value"] = parseFloat(data_array[i]);
        data_object.push(data_value);
    }
    for (let i = 0; i < label_array.length; i++) {
        label_array[i] = parseFloat(label_array[i]);
    }
    var costArray = [];
    var initialize = function () {
        var count = 1;
        var weights = 0.01;
        var bias = 0;
        var cost = 0;
        var epoch = n_iter;
        var learning_rate = l_rate;
        var gradient_descent = function (data, label, weights, bias, cost, epoch, learning_rate) {
            for (let i = 0; i < epoch; i++) {
                for (let j = 0; j < data.length; j++) {
                    let output = weights * data[j].value + bias;
                    var error = label[j] - output;
                    weights = weights + learning_rate * error * data[j].value;
                    bias = bias + learning_rate * error;
                    cost = cost + (error * error) / 2;
                }
                
                    let cost_object = {};
                    cost_object["error"] = error;
                    cost_object["count"] = count;
                    count++;
                    costArray.push(cost_object);
                
            }
            return [weights, bias, cost, epoch, learning_rate];

        }
        return gradient_descent(data_object, label_array, weights, bias, cost, epoch, learning_rate);
    }


    return (
        <div className="content">
            <div className="data">
                <div className="input_data">
                    <input type="text" value={data} placeholder="Enter data separted by comma" onChange={e => setData(e.target.value)} />
                </div>
                <div className="label_data">
                    <input type="text" value={label} placeholder="Enter labels separted by comma" onChange={e => setLabel(e.target.value)} />
                </div>
                <div className="result">
                    <p>Weight: {initialize()[0].toFixed(2)}</p>
                    <p>Bias: {initialize()[1].toFixed(2)}</p>
                </div>
                {/* Slider input */}
                <div className="slider">
                    <p>Learning Rate: </p>
                    <input type="range" min="0.000001" max="0.01" step="0.0001" value={l_rate} onChange={e => setL_rate(e.target.value)} />
                </div>
                <div className="slider">
                    <p>Number of iterations: </p>
                    <input type="range" min="1000" max="10000" step="1000" value={n_iter} onChange={e => setN_iter(e.target.value)} />
                </div>

                
            </div>
            <Graph data={costArray} />
        </div>
    )
};
export default Content;