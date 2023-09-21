import React , {useState } from "react";


const TodoList = () => {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addToList = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== "") {
            setToDos(toDos.concat(inputValue));
            setInputValue("");
        }
    };

    const itemsLeft = (list) => {
        if(list.length==0) {
            return (<li>
                        No tasks, add a task
                    </li>);
        }
        if(list.length==1){
            return (<li>
                1 item left
            </li>);
        }
        return (<li>
                    {list.length} items left
                </li>);
    }
    
    return(
        <div id="container">
			<h1 className="todo-header">To do List</h1>
			<input onKeyDown={addToList} onChange={(e) => setInputValue(e.target.value)}
				value={inputValue} id="addToDo" type="text" placeholder="Add to do here" />
			<ul>
                {toDos.map((item, index) => (<li key={index}>
					<span onClick={() => setToDos(toDos.filter((item, currentIndex) => index != currentIndex ))}><i className="fa fa-trash"></i></span> {item}
				</li>))}
                {itemsLeft(toDos)}
			</ul>
		</div>
    );

};

export default TodoList;

