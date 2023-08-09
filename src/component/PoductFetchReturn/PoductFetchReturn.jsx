// import { useEffect } from "react";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Loader from "../Shared/Loader/Loader";
// import { createContext } from "react";


// export const AuthContext = createContext({});

// const PoductFetchReturn = ({children}) => {
    

//     const [params , setParams]=useSearchParams();
//     const productId = params.get('productId');
//     // console.log('samau url ', productId);
//     const [loader, setLoader]=useState(false);
//     const [user, setUser] = useState(null)


//     const [itemss, SetItems] = useState([]);
//     const [filteredItems, setFilteredItems] =useState([]);

//     useEffect(() => {
//     setLoader(true);
//         fetch('product.json')
//             .then(res => res.json())
//             .then(data => {
//         if(productId){

//             const filtered = data.filter(product => product.id == productId)
      
//             setFilteredItems(filtered)
//         }
//         else {
//             SetItems(data)
//           }
  
//           setLoader(false)
//         })
//         .catch(err => console.log(err))
//     }, [productId])
  
//     if (loader) {
//       return <Loader />
//     }

//     const loadProductData ={
//         user,
//         itemss,
//         filteredItems

//     }
//     return (
//         <AuthContext.Provider value={loadProductData}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default PoductFetchReturn;


