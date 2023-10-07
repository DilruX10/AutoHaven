import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Container>
				<Row>
					<Col>
						<center>
							<h1>
								<br />
								To Do List App
							</h1>
							<Button
								variant="primary"
								onClick={() => setCount((count) => count + 1)}
							>
								count is {count}
							</Button>
						</center>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
