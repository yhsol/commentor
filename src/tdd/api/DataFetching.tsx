import React, { useState } from "react";

interface HitsProps {
  objectID?: number;
  url?: string;
  title?: string;
}
// 객체의 타입을 정의 할 때: 객체 안의 내용을 정의 하고, 그 타입 인터페이스 뒤에 [] 를 추가한다.
interface DataProps {
  hits: HitsProps[];
}

function App() {
  const [data, setData] = useState<DataProps>({ hits: [] });

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
