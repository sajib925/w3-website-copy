// "use client"
//
//
//
// interface TableProps<T> {
//     data: T[];
//     headerData: Array<{ [key: string]: string }>;
// }
//
// const DynamicTable: React.FC<TableProps<{ col1: string; col2: string; col3: string ; col4?: string;}>> = ({ data, headerData }) => {
//     return (
//         <table className="table-auto w-full">
//             <thead>
//             {
//                 headerData.map((header, index) => (
//                     <tr key={index}>
//                         {Object.values(header).map((title, columnIndex) => (
//                             <th key={columnIndex} className="px-4 py-2 text-start">
//                                 {title}
//                             </th>
//                         ))}
//                     </tr>
//                 ))
//             }
//             </thead>
//             <tbody>
//             {data.map((row, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
//                     {Object.values(row).map((column, columnIndex) => (
//                         <td key={columnIndex} className={`px-4 py-2 ${index % 2 === 0 ? "border border-gray-200" : "border border-white"}`}>
//                             {column}
//                         </td>
//                     ))}
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     );
// };
//
// export default DynamicTable;
//
//
//
//
//
//
//
"use client"
import React from 'react';

interface TableProps<T> {
    data: T[];
    headerData: Array<{ [key: string]: string }>;
}

const DynamicTable: React.FC<TableProps<{ col1: string; col2: string; col3: string; col4?: string; }>> = ({ data, headerData }) => {
    return (
        <table className="table-auto w-full border-2 border-[#E2E8F0]">
            <thead>
            {headerData.map((header, index) => (
                <tr key={index}>
                    {Object.values(header).map((title, columnIndex) => (
                        <th key={columnIndex} className="px-4 py-2 text-start border border-[#E2E8F0]">
                            {title}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr
                    key={index}
                    style={{ backgroundColor: index % 2 === 0 ? "#E2E8F0" : "#FFFFFF" }}
                >
                    {Object.values(row).map((column, columnIndex) => (
                        <td
                            key={columnIndex}
                            style={{
                                padding: "8px",
                                border: `1px solid ${
                                    index % 2 === 0 ? "#FFFFFF" : "#E2E8F0"
                                }`,
                            }}
                        >
                            {column}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DynamicTable;
