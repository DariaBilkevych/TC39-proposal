import React, {useState, useEffect} from "react";
import {Form, Button, Table} from "react-bootstrap";
import {useCookies} from "react-cookie";

const CategoriesTable = () => {
    const [inputValue, setInputValue] = useState("");
    const [categoryToProducts, setCategoryToProducts] = useState({});
    const [cookies] = useCookies(["categoryToProducts"]);

    useEffect(() => {
        if (cookies.categoryToProducts) {
            setCategoryToProducts(cookies.categoryToProducts);
        }
    }, [cookies]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const regex = /(?<category>[\w\s]+),\s*(?<product>[\w\s]+)/g;
        let match = regex.exec(inputValue);
        const newCategoryToProducts = {...categoryToProducts};

        while (match != null) {
            let {category, product} = match.groups;

            category = category.toLowerCase();

            if (!newCategoryToProducts[category]) {
                newCategoryToProducts[category] = [];
            }

            newCategoryToProducts[category].push(product);
            match = regex.exec(inputValue);
        }

        setCategoryToProducts(newCategoryToProducts);
        setInputValue('');

        document.cookie = `categoryToProducts=${JSON.stringify(newCategoryToProducts)}; path=/;`;
    };


    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Form onSubmit={handleSubmit}>
                        <Form.Label htmlFor="inlineFormInput">
                            <h2>TC39/Proposal-duplicate-named-capturing-groups-regex</h2>
                        </Form.Label>
                        <Form.Group controlId="formCategoryProduct">
                            <Form.Label>Enter category and product:</Form.Label>
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    value={inputValue}
                                    onChange={(event) => setInputValue(event.target.value)}
                                />
                                <Button type="submit" className="ml-3">
                                    Submit
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Products</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(categoryToProducts).map(([category, products]) => (
                            <tr key={category}>
                                <td>{category}</td>
                                <td>{products.join(", ")}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                <small>
                    * Функція regex.exec() використовує цю фічу, щоб знайти збіги з введеними даними та розбити їх на
                    категорії та продукти, що було введено користувачем. Функція regex.exec() повертає об'єкт match, який
                    містить масив зі збігами, а також властивість groups, яка містить іменовані групи.
                </small>
                </div>
            </div>
        </div>
    );
};

export default CategoriesTable;
