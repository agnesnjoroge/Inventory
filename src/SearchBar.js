import {useState} from "react";

function SearchBar(props){
  const[name,setName]=useState("");
  const[price,setPrice]=useState(0);
  const[type,setType]=useState("");
  const[brand,setBrand]=useState("");
  
 const SearchButtonPressed = ()=>
 {
props.UpdateSearchParams({
 // data:"Euphoria"
name:name, 
price:price, 
type:type, 
brand:brand,
   
 });
setName("");
setBrand(0);
setType("");
setBrand("");
 

    //console.log(name);
    //console.log(price);
    //console.log(type);;
    //console.log(brand);
 };

 return(
      <div>
       <h2 className="text" >Search for an Item</h2>
       <form>
       <label htmlFor="name-field" className="label">Name</label>
       <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value) } className="input"/>
       <br/>
      <label htmlFor="price-field" className="label">Max Price</label>
       <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value) } className="input"/>
       <br/>
        <label htmlFor="name-field" className="label">Type</label>
       <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value) } className="input"/>
       <br/>
       <label htmlFor="name-field" className="label">Brand</label>
       <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value) } className="input"/>
       <br/>
       <button type="button" onClick={SearchButtonPressed} className="submit">Search</button>
       <br/>
    </form>
    <table border="1">
      <tr>
      <td>Name</td>
      <td>Price</td>
      <td>Type</td>
      <td>Brand</td>
      </tr>
      <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{type}</td>
      <td>{brand}</td>
      </tr>
   </table>
    

   </div>
   );
}
           // <p>Entries:{"name" in name //?name[name]:"No data to //display"}</p>

   
    
   

export default SearchBar;