"use client"
import React, { useState } from "react";

interface RowData {
    [key: string]: string;
}

interface DynamicTableProps {
    data: RowData[];
    headers: string[];
}

export const DynamicTable: React.FC<DynamicTableProps> = ({ data, headers }) => {
    const [tableData, setTableData] = useState(data);

    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index} className="py-2 px-4 border-b">
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {tableData.map((row, index) => (
                <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                >
                    {headers.map((header, columnIndex) => (
                        <td key={columnIndex} className="py-2 px-4 border-b">
                            {row[header.toLowerCase()]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

// how to use this

// export default DynamicTable;
//
//
// import React from "react";
// import DynamicTable from "../components/DynamicTable";
//
// const Home: React.FC = () => {
//     const tableData = [
//         { column1: "Data 1", column2: "Data A", column3: "Info X", column4: "Value 1" },
//         { column1: "Data 2", column2: "Data B", column3: "Info Y", column4: "Value 2" },
//         // Add more data as needed
//     ];
//
//     const tableHeaders = ["Header 1", "Header 2", "Header 3", "Header 4"];
//
//     return (
//         <div className="container mx-auto my-8">
//             <h1 className="text-3xl font-bold mb-4">Dynamic Table Example</h1>
//             <DynamicTable data={tableData} headers={tableHeaders} />
//         </div>
//     );
// };
//
// export default Home;
