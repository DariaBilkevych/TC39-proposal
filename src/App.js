import {Row, Col} from "react-bootstrap";
import CategoriesTable from "./CategoriesTable";


const App = () => {
    return (
        <div className="container-fluid">
            <Row>
                <Col md={4}>
                    <div className="container mt-5">
                        <div className={"personalInfo"}>
                            <h3>Персональна інформація</h3>
                            <p>
                                <strong>Прізвище, ім'я: </strong><br/>Бількевич Дар'я
                            </p>
                            <p>
                                <strong>Напрямок, за яким планує
                                    розвиватись: </strong><br/>NodeJS developer
                            </p>
                            <p>
                                <strong>Персональна сертифікація, яку планує складати: </strong><br/>The OpenJS Node.js Services Developer (JSNSD)
                            </p>
                            <p>
                                <strong>Аргументація, чому саме ця сертифікація: </strong>
                                <br/>Ця сертифікація перевіряє навички створення
                                RESTful Node.js серверів і сервісів (або мікросервісів) з особливим наголосом на практиках
                                безпеки. Оскільки Node.js є популярною платформою для створення серверних додатків, то сертифікація
                                    JSNSD є корисною для будь-якої людини, яка прагне займатися розробкою серверної частини додатків
                                    на Node.js
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="container mt-5">
                        <CategoriesTable/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default App;
