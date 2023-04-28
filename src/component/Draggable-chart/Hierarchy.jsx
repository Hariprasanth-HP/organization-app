import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./Board";
import Cards from "./Cards";
import { Card } from "react-bootstrap";
import "./Hierarchy.css";
import men2 from "../icons/men2.png";
import women2 from "../icons/women2.png";
import men3 from "../icons/men3.png";
import men4 from "../icons/men4.jpg";
import men5 from "../icons/men5.jpg";
import men6 from "../icons/men6.png";
import men7 from "../icons/men7.jpg";
import women1 from "../icons/women1.png";
import women3 from "../icons/women3.jpg";

function Hierarchy({ employees }) {
  return (
    <div className="Hierarchy">
      <main className="flexbox">
        <Card className="heading">
          <img className="image" src={men2} />
          <Card.Body>
            <Card.Title>Gokul</Card.Title>
            <Card.Text>Cheif Excecutive officer</Card.Text>
          </Card.Body>
        </Card>
        <Board id="board-1" className="board">
          <Cards id="card-1" className="card" draggable="true">
            <Card>
              <img className="image" src={men3} />
              <Card.Body>
                <Card.Title>Joe Linux</Card.Title>
                <Card.Text>Cheif Technology Officer</Card.Text>
              </Card.Body>
            </Card>
            <Board id="board-1-1" className="board">
              <Cards id="card-1-1" className="card" draggable="true">
                <Card>
                  <img className="image" src={men5} />
                  <Card.Body>
                    <Card.Title>Ron Blomquist</Card.Title>
                    <Card.Text>Cheif Information Officer</Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
              <Cards id="card-1-2" className="card" draggable="true">
                <Card>
                  <img className="image" src={men6} />
                  <Card.Body>
                    <Card.Title>Michael Rubin</Card.Title>
                    <Card.Text>Cheif Innovative Officer</Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
            </Board>
          </Cards>
          <Cards id="card-2" className="card" draggable="true">
            <Card>
              <img className="image" src={women1} />
              <Card.Body>
                <Card.Title>Linda May</Card.Title>
                <Card.Text>Cheif Business officer</Card.Text>
              </Card.Body>
            </Card>
            <Board id="board-1-2" className="board">
              <Cards id="card-2-1" className="card" draggable="true">
                <Card>
                  <img className="image" src={women2} />
                  <Card.Body>
                    <Card.Title>Alice Lopez</Card.Title>
                    <Card.Text>Cheif Communication Officer</Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
              <Cards id="card-2-2" className="card" draggable="true">
                <Card>
                  <img className="image" src={women3} />
                  <Card.Body>
                    <Card.Title>Mary Johnson</Card.Title>
                    <Card.Text>Cheif Brand Officer</Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
              <Cards id="card-2-3" className="card" draggable="true">
                <Card>
                  <img className="image" src={men7} />
                  <Card.Body>
                    <Card.Title>Kirk Dougals</Card.Title>
                    <Card.Text>Cheif Bussiness Developement Officer</Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
            </Board>
          </Cards>
          <Cards id="card-3" className="card" draggable="true">
            <Card>
              <img className="image" src={men4} />
              <Card.Body>
                <Card.Title>John Green</Card.Title>
                <Card.Text>Cheif Accounting officer</Card.Text>
              </Card.Body>
            </Card>
            <Board id="board-1-3" className="board">
              <Cards id="card-3-1" className="card" draggable="true">
                <Card>
                  <img className="image" src={men2} />
                  <Card.Body>
                    <Card.Title>Erica Reel</Card.Title>
                    <Card.Text>Cheif Custom Officer</Card.Text>
                  </Card.Body>
                </Card>
              </Cards>
            </Board>
          </Cards>
        </Board>
      </main>
    </div>
  );
}

export default Hierarchy;
