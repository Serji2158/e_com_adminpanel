import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

  const data = [
    { name: "1", Total: 1300 },
    { name: "2", Total: 2100 },
    { name: "3", Total: 1890 },
    { name: "4", Total: 3300 },
    { name: "5", Total: 1500 },
    { name: "6", Total: 1900 },
    { name: "7", Total: 2900 },
    { name: "8", Total: 4500 },
    { name: "9", Total: 3850 },
    { name: "10", Total: 3200 },
    { name: "11", Total: 4800 },
    { name: "12", Total: 6700 },
]


const Chart = ({aspect, title}) => {


  return (
    <div className="chart">
      <div className="title">
        {title}
      </div>
      <ResponsiveContainer width="100%"  aspect={aspect} >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
          <Area 
            type="monotone"
            dataKey="Total"
            stroke="#8884d8" f
            illOpacity={1}
            fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>

  )
}

export default Chart