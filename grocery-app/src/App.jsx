import { useState,useEffect } from "react";
import { Alert } from "./Alert";
import "./App.css";
import { List } from "./List";

const getLocalStorage=()=>{
  let list=localStorage.getItem("list");
  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
}


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ 
    show: true,
     message: "",
      type: "" 
  });
  const handleSubmit = (e) => {
    e.preventDefault();
   if(!name){
     // display alert
     setAlert(true,"danger","Please enter value");
   }
   else if(name && isEditing){
    //edit
    setList(list.map((item) => {
      if (item.id === editId) {
        return { ...item, title: name };
      }
      return item;
    }
    ));
    

    setName("");
    setEditId(null);
    setIsEditing(false);
    showAlert(true,"success","Item updated successfully");
   }else{
     // show alert
     showAlert(true,"success","Item added successfully");
     const newItem={id:new Date().getTime().toString(),title:name};
     setList([...list,newItem]);
     setName("");
   }
  };
  const showAlert=(show=false,type="",message="")=>{
    setAlert({show,type,message});
  }
  const clearList=()=>{
    showAlert(true,"danger","List cleared");
    setList([]);
  }
  const removeItem=(id)=>{
    showAlert(true,"danger","Item removed");
    setList(list.filter((item)=>item.id!==id));
  }

  const editItem=(id)=>{
  const specificItem=list.find((item)=>item.id===id);
  setIsEditing(true);
  setEditId(id);
  setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert}  removeAlert={showAlert} list={list}/>
          }
          <h3>Grocery App</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length >0 && ( 
        <div className="grocery-container">
          <List  items={list} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
        )}
      </section>
    </div>
  );
}

export default App;
