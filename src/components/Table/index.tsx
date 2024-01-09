interface HeaderProps<T> {
    key: keyof T;
    label: string;
}

interface Props<T> {
    headers: HeaderProps<T>[];
    data: T[];
}

const Table = <T, >({headers, data} : Props<T>) => {
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
               {data.map((row, index) => (
                <tr key={index}>
                    {headers.map( (column, colIdx) => (
                        <td key={colIdx}>{String(row[column.key])}</td>
                    ))}
                </tr>
               ))}
            </tbody>
        </table>
    )
}

export default Table;