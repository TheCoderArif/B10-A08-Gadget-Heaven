import { useLoaderData } from "react-router-dom";
import { BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const BarC = () => {

  const productList = useLoaderData();
    const dashBoardData = [...productList.categories[0].products,...productList.categories[1].products, ...productList.categories[2].products]

    // console.log(dashBoardData);

    

    return (
        <div>
             <LineChart width={1200} height={300} data={dashBoardData}>
              <XAxis dataKey={'product_title'}></XAxis>
              <YAxis dataKey={'rating'}></YAxis>
              <YAxis dataKey={'price'}></YAxis>
              {/* <Line type="monotone" dataKey={'rating'}></Line> */}
              <Line type="monotone" dataKey={'price'}></Line>
              
              {/* <Bar dataKey="rating" fill="#8884d8" /> */}
              <Tooltip></Tooltip>
              <Legend></Legend>
              

             </LineChart>
             <LineChart width={1200} height={300} data={dashBoardData}>
              <XAxis dataKey={'product_title'}></XAxis>
              <YAxis dataKey={'rating'}></YAxis>
              {/* <YAxis dataKey={'price'}></YAxis> */}
              <Line type="monotone" dataKey={'rating'}></Line>
              {/* <Line type="monotone" dataKey={'price'}></Line> */}
              
              {/* <Bar dataKey="rating" fill="#8884d8" /> */}
              <Tooltip></Tooltip>
              <Legend></Legend>
              

             </LineChart>
        </div>
    );
};

export default BarC;