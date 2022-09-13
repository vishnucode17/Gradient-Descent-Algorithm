import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './content.css';
const Graph = (props) => {
    //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2400, amt: 2400}, {name: 'Page C', uv: 300, pv: 2400, amt: 2400}, {name: 'Page D', uv: 400, pv: 2400, amt: 2400}, {name: 'Page E', uv: 200, pv: 2400, amt: 2400}, {name: 'Page F', uv: 400, pv: 2400, amt: 2400}, {name: 'Page G', uv: 500, pv: 2400, amt: 2400}];
    return (
        <div className="graph">
            <LineChart width={500} height={400} data={props.data}>
                <Line type="monotone" dataKey="error" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="count" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}
export default Graph;