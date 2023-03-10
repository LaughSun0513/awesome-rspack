import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Title } from "./components/title";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<Title></Title>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count 的值是 {count}
				</button>
				<p>
					编辑 <code>src/App.tsx</code> 测试一下热更新HMR有多快
				</p>
			</div>
			<p className="read-the-docs">
				点击 Rspack 和 React 的logo 了解更多
			</p>
		</div>
	);
}

export default App;
