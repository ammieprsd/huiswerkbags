// import bag1 from "../assets/bag_1.png";
// import bag2 from "../assets/bag_2.png";

function Bags(props){
    return(
        <article>
            <span>Best seller</span>
            <img src={props.iname} alt={props.nameText}/>
            <p>{props.nameText}</p>
            <h4>{props.price}</h4>
        </article>
    );
}

export default Bags




// Function Bags(){
//     return(
//         <article>
//             <span>Best seller</span>
//             <img src={bag2} alt="The stylish bag"/>
//             <p>The stylish bag</p>
//             <h4>€250</h4>
//         </article>
//     );
// }
//
//
// export default Bags

