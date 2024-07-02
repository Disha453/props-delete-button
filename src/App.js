
import './App.css';
import { useState } from 'react';
import { TableData } from './table';

function App() {

  const [student, setStudent] = useState({ fname: "", age: "", password: "" })
  const [data, setData] = useState(JSON.parse(localStorage.getItem("f")) || []);

  const submitChange = (e) => {

    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  const submit = () => {
    setData([...data, student]);
    localStorage.setItem("f", JSON.stringify([...data, student]))
  }

  console.log(data)
  console.log(student)

  // delet button
  const deleteRecord = (indexx) => {
    const update = data.filter((item, index) => { return index !== indexx });
    setData(update);
    localStorage.setItem('f', JSON.stringify(update))


  }



  return (
    <>
      <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=ais)" }} className='h-[1000px] bg-cover p-2.5  flex  flex-col items-center  justify-center '>
        <div className='flex flex-col gap-[20px]'>
          <div>
            <label htmlFor="fname"><b className="text-xl ">Fname:</b></label>
            <input type='text' name='fname' value={student.fname} onChange={(e) => submitChange(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
          </div>

          <div>
            <label htmlFor="age"><b className="text-xl ">Age:</b></label>
            <input type='number' name='age' value={student.age} onChange={(e) => submitChange(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
          </div>

          <div>
            <label htmlFor='password'><b className="text-xl ">Password:</b></label>
            <input type='password' name='password' value={student.password} onChange={(e) => submitChange(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
          </div>
          <button onClick={() => submit()} className="bg-orange-800 h-12 w-24 rounded-xl  border-yellow-300  ml-[70px] mt-6 text-white">Submit</button>

        </div>

        <TableData recordsData={data} deleteRecord={(e) => deleteRecord(e)} />
      </div>
    </>
  );
}

export default App;
