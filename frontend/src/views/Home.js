import React from 'react';
import ReactToPrint from 'react-to-print';



export class ComponentToPrint extends React.Component {
    render() {

        return (
            <div class="table w-100 p-3 position-relative "  >
                <h1 class="text-white">Youcode</h1>
                <table class="table text-white table-Dark text-center"    >
                    <thead >
                        <tr >
                            <th scope="col" >id</th>
                            <th scope="col">first name</th>
                            <th scope="col">last name</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">adresse</th>
                        </tr>
                    </thead>

                    <tbody class="text-white" >
                        <tr>
                            <th scope="row" ></th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        );
    }
}


class Home extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {
                        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                        // to the root node of the returned component as it will be overwritten.
                        return <button class="btnp">Print this out!</button>;
                    }}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />

            </div>
        );
    }
}


export default Home;

