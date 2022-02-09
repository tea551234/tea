import React, { Component } from 'react';
import Axios from 'axios';
class TodoDelete extends Component {
    state = { 
        todoItem: { todoTableId: 3, title: "Job C", isComplete: true }
    } 

    async componentDidMount() {
        var url = `http://localhost:8000/todo/item/${this.props.match.params.id}`;
        var result = await Axios.get(url);
        this.state.todoItem = result.data;
        this.setState({});
    }

    okBtn = async () => {
        var url = 'http://localhost:8000/todo/Delete/' + this.state.todoItem.todoTableId;
        await Axios.delete(url)
        window.location = '/Todo/Index'
    }

    render() {
        return (


            <div>
                <dl className="row">
                    <dt className="col-sm-2">
                        項目名稱
                    </dt>
                    <dd className="col-sm-10" id="Name">
                        Job A
                    </dd>
                    <dt className="col-sm-2">
                        是否已完工
                    </dt>
                    <dd className="col-sm-10">
                        <input className="check-box" disabled="disabled" id="isComplete"
                            type="checkbox" checked="checked" />
                    </dd>
                </dl>


                <h3>確定要刪除這筆資料嗎?</h3>

                <form action="/Todo/Delete" method="post">
                    <input type="hidden" id="TodoItemId" name="TodoItemId"
                        value="1"
                    />
                    <input type="button" onClick={this.okBtn} value="確定" className="btn btn-outline-danger" /> |
                    <a href="/index.html" className="btn btn-outline-info">取消</a>
                </form>

            </div>








        );
    }
}

export default TodoDelete;