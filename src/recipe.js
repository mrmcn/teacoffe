// function Recipe({ name, ingredients }) {
//   const listIngr = ingredients.map((ingr) => (
//     <ul key={ingr}>
//       <li>{ingr}</li>
//     </ul>
//   ))

//   return (
//     <>
//       <h2>{name}</h2>
//       {listIngr}
//     </>
//   )
// }
// export default Recipe

// export function getFinalState(baseState, queue) {
//   let finalState = baseState

//   for (let update of queue) {
//     if (typeof update === 'function') {
//       finalState = update(finalState)
//     } else {
//       finalState = update
//     }
//   }
//   return finalState
// }

// function ItemList({ artworks, onToggle }) {
//   const row = artworks.map((artwork) => (
//     <li key={artwork.id}>
//       <label>
//         <input
//           type='checkbox'
//           checked={artwork.seen}
//           onChange={(e) => {
//             onToggle(artwork.id, e.target.checked)
//           }}
//         />
//         {artwork.title}
//       </label>
//     </li>
//   ))

//   return <ul>{row}</ul>
// }

// export default ItemList

import { nanoid } from 'nanoid'

function Product(props) {
  const BTN = [
    { a: '+', b: 1 },
    { a: '-', b: -1 },
  ]
  const listBtn = BTN.map((c) => (
    <button
      key={nanoid()}
      onClick={onClick}
      value={c.b}
    >
      {c.a}
    </button>
  ))

  function onClick(e) {
    props.handleIncreaseClick(props.id, props.count + Number(e.target.value))
  }

  return (
    <li>
      {props.name} (<b>{props.count}</b>){listBtn}
    </li>
  )
}

export default Product
