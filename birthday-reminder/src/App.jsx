import data from "./data/data.js"
import List from "./components/List.jsx";
import style from "./style.json"
import { useState } from "react"
function App() {
  const [people,setPeople] = useState(data);
  return (
    <>
      <main className={style.container}>
        <section className={style.box}>
          <h1>{people.length} birthdays today</h1>
          <List people={people} img={style.img} article={style.article}/>
          <button onClick={() => setPeople([])} className={style.button}>View all</button>
        </section>
      </main>
    </>
  )
}

export default App
