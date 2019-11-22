"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Todo = /** @class */ (function (_super) {
    __extends(Todo, _super);
    function Todo(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (event) {
            event.preventDefault();
            _this.setState({ newitem: event.target.value });
        };
        _this.state = {
            newitem: '',
            list: [],
            isEditing: false
        };
        return _this;
    }
    Todo.prototype.additem = function () {
        var newitem = {
            id: 1 + Math.random(),
            value: this.state.newitem.slice()
        };
        var list = __spreadArrays(this.state.list);
        list.push(newitem);
        console.log(list);
        this.setState({
            list: list,
            newitem: '',
            isEditing: false
        });
    };
    Todo.prototype.delete = function (id) {
        var list = __spreadArrays(this.state.list);
        var updatedlist = list.filter(function (item) { return item.id !== id; });
        this.setState({
            list: updatedlist
        });
        console.log(updatedlist);
    };
    Todo.prototype.edit = function (id) {
        var list = __spreadArrays(this.state.list);
        var updatedlist = list.filter(function (item) { return item.id !== id; });
        var selecteditem = list.find(function (item) { return item.id === id; });
        console.log(selecteditem);
        this.setState({
            list: updatedlist,
            newitem: selecteditem.value,
            isEditing: true
        });
    };
    Todo.prototype.render = function () {
        var _this = this;
        //  if(this.state.isEditing){
        //     return <li>
        //         <form onSubmit={this.edit}>
        //             <input type="text" value={this.state.newitem} onChange={this.onChange} />
        //             <button type="submit" onClick={this.additem} >save</button>
        //             <button onClick={this.edit}>cancel</button>
        //         </form>
        //     </li>
        // }  
        return (<div className="list">
             <table align="center">
                <tr>  
                    <th> 
            <input align="center" type="text" value={this.state.newitem} onChange={this.onChange}></input>
            &nbsp;
            </th>
            <th>            
            <button id="a2" type="button" class="btn btn-success" disabled={!this.state.newitem} onClick={function () { _this.additem(); }}>
        {this.state.isEditing ? "save" : "add"}  </button> </th></tr>
             <br />
             <tr>
             
                 {this.state.list.map(function (item) {
            return (<ul type="none" key={item.id}>
                         {item.value}
                         &nbsp;
                         
                             <button id="a2" class="btn btn-danger" onClick={function () { _this.delete(item.id); }}>Delete</button>&nbsp;
                             &nbsp;
               <button id="a2" class="btn btn-success" onClick={function () { _this.edit(item.id); }}> edit</button>
                     </ul>);
        })}
             
             </tr>
            
             </table>
            
             </div>);
    };
    return Todo;
}(react_1.default.Component));
;
exports.default = Todo;
