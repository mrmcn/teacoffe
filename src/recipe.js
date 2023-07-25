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

function Product({ id, name, count, handleIncreaseClick }) {
  const BTNs = [
    { a: '+', b: 1 },
    { a: '-', b: -1 },
  ]
  const listBtn = BTNs.map((btn) => (
    <button
      key={nanoid()}
      onClick={onClick}
      value={btn.b}
    >
      {btn.a}
    </button>
  ))

  function onClick(e) {
    handleIncreaseClick(id, count + Number(e.target.value))
  }

  return (
    <li>
      {name} (<b>{count}</b>){listBtn}
    </li>
  )
}

export default Product
