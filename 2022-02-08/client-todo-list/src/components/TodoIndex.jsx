import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';


class TodoIndex extends Component {
    state = {

        todoList: [

            { todoListID: 1, title: 'Job A', isComputer: true },
            { todoListID: 2, title: 'Job B', isComputer: false },
            { todoListID: 3, title: 'Job C', isComputer: true }

        ]


    }
    async componentDidMount() {
        var result = await Axios.get("http://localhost:8000/todo/list");
        this.state.todoList = result.data;
        this.setState({});
    }
    render() {
        return (


            <div className="container">

                <h1>
                    待辦事項清單
                    <a href="/Todo/Create" className="btn btn-outline-success btn-md float-right">
                        新增
                    </a>
                </h1>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                項目名稱
                            </th>
                            <th>
                                是否已完工
                            </th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.todoList.map((item, index) =>

                            <tr key={index}>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    <input className="check-box" disabled="disabled"
                                        type="checkbox" checked={item.isComputer} />
                                </td>
                                <td>
                                    <span className="float-right">
                                        <a href={`/Todo/Edit/${item.todoListID}`} className="btn btn-outline-primary btn-sm">編輯</a> |
                                        <a href={`/Todo/Delete/${item.todoListID}`} className="btn btn-outline-danger btn-sm">刪除</a>
                                    </span>
                                </td>
                            </tr>)}
                    </tbody>
                </table>


            </div>



            /*===
            
            
            this.state.todoList.map((item , index) =>
            
            <tr key ={index}>
            <td>
            {item.title}
            </td>
            
            
            
            
            
            
            )
            
            
            
            ====  */








        );
    }
}

export default TodoIndex;
<div className="container">

    <h1>
        待辦事項清單
        <a href="/Todo/Create" className="btn btn-outline-success btn-md float-right">
            新增
        </a>
    </h1>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>
                    項目名稱
                </th>
                <th>
                    是否已完工
                </th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Job A
                </td>
                <td>
                    <input className="check-box" disabled="disabled"
                        type="checkbox" />
                </td>
                <td>
                    <span className="float-right">
                        <a href="/Todo/Edit/1" className="btn btn-outline-primary btn-sm">編輯</a> |
                        <a href="/Todo/Delete/1" className="btn btn-outline-danger btn-sm">刪除</a>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>



</div>