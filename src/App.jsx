import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const label = "Home";

  const students = [
    {
      id: 1,
      name: "Md Sujan Ahmed",
      age: 29
    },
    {
      id: 2,
      name: "Habiba",
      age: 22
    },
    {
      id: 1,
      name: "Sohel",
      age: 28
    },
  ];

  return (
    <>
      {
        label === "Home" ? <Header title="Header Section"/> : <Footer title="Footer Section"/>
      }

      {
        students.map((student, id)=>{
           return (
              <div key={id} className="card mb-2">
                  <h2>{student.name}</h2>
                  <p>{student.age}</p>
              </div>
           )
        })
      }
    </>
  )
}

export default App
