export function TableData({ recordsData, deleteRecord }) {


    return (
        <div >
        <table>
            <thead>
                <th>Fname</th>
                <th>Age</th>
                <th>Password</th>
            </thead>
            <tbody>
                {recordsData?.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.fname}</td>
                            <td>{item.age}</td>
                            <td>{item.password}</td>
                            <td><button type="delet" onClick={() => deleteRecord(index)} className="bg-orange-800 h-12 w-24 rounded-xl  border-yellow-300  text-white">Delet</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}