"use client"

import {useState} from "react";

export default function Answers({answers}: { answers: any[] }) {
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const isCorrect = !!answers.find(a => a.data.description === selected)?.data.isCorrect
  const onClick = () => setMessage(`The selection '${selected}' is ${isCorrect ? "" : "in"}correct`)
  return (<>
      <ol className="mt-2">
        {answers.map((a, i) => {
          return (
            <li className="ml-4" key={a.data.description}>
              <input type="radio" value={a.data.description} checked={a.data.description === selected}
                onChange={e => setSelected(e.target.value)}/> {a.data.description}
            </li>
          );
        })}
      </ol>
      <button onClick={onClick} className="px-4 py-2 border-purple-500 border mt-2">Submit</button>
      {message && (<>
        <h3 className="text-4xl mt-8">Quiz Result</h3>
        <p className="mt-2">{message}</p>
      </>)}
    </>
  )
}
