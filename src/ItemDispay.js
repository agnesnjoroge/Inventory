function ItemDispay(props){
 const showItem=(item)=>{
   return(
     <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.type}</td>
      <td>{item.brand}</td>
      <td><button className="delete" onClick={()=>props.deleteItem(item) }>Delete</button></td>
    </tr>
     );
 };

  
  return(
   <div> 
   <h2>Items</h2>
       <table className="col-75">
      <thead>
      <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Type</th>
      <th>Brand</th>
      <th>Delete</th>
      </tr>
      </thead>
      <tbody>{props.items.map(showItem)}</tbody>
      </table>
      </div>
   
    );
}
export default ItemDispay;