// import Recipe from './recipe'

//import { getFinalState } from './recipe'

//import { Fragment } from 'react'

// const recipes = [
//   {
//     id: 'greek-salad',
//     name: 'Greek Salad',
//     ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
//   },
//   {
//     id: 'hawaiian-pizza',
//     name: 'Hawaiian Pizza',
//     ingredients: [
//       'pizza crust',
//       'pizza sauce',
//       'mozzarella',
//       'ham',
//       'pineapple',
//     ],
//   },
//   {
//     id: 'hummus',
//     name: 'Hummus',
//     ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
//   },
// ]

// function RecipeList() {
//   const listRec = recipes.map((rec) => (
//     <Recipe
//       key={rec.id}
//       {...rec}
//     />
//   ))

//   return (
//     <div>
//       <h1>Recipes</h1>
//       {listRec}
//     </div>
//   )
// }
// export default RecipeList

// import Profile from './Profile.js';

// export default function App() {
//   return (
//     <>
//       <Profile person={{
//         imageId: 'lrWQx8l',
//         name: 'Subrahmanyan Chandrasekhar',
//       }} />
//       <Profile person={{
//         imageId: 'MK3eW3A',
//         name: 'Creola Katherine Johnson',
//       }} />
//     </>
//   )
// }

// import { useState } from 'react'

// export default function Form() {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [names, setNames] = useState('')

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value)
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value)
//   }

//   function handleReset() {
//     setFirstName('')
//     setLastName('')
//   }

//   function handleBtnClick(e) {
//     e.preventDefault()
//     setNames('Hi,' + firstName + ' ' + lastName)
//   }

//   return (
//     <form onSubmit={handleBtnClick}>
//       <input
//         placeholder='First name'
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder='Last name'
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <button>Enter</button>
//       <h1>{names}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   )
// }

// function increment(n) {
//   return n + 1
// }
// increment.toString = () => 'n => n+1'

// export default function App() {
//   return (
//     <>
//       <TestCase
//         baseState={0}
//         queue={[1, 1, 1]}
//         expected={1}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[increment, increment, increment]}
//         expected={3}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[5, increment]}
//         expected={6}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[5, increment, 42]}
//         expected={42}
//       />
//     </>
//   )
// }

// function TestCase({ baseState, queue, expected }) {
//   const actual = getFinalState(baseState, queue)
//   return (
//     <>
//       <p>
//         Base state: <b>{baseState}</b>
//       </p>
//       <p>
//         Queue: <b>[{queue.join(', ')}]</b>
//       </p>
//       <p>
//         Expected result: <b>{expected}</b>
//       </p>
//       <p
//         style={{
//           color: actual === expected ? 'green' : 'red',
//         }}
//       >
//         Your result: <b>{actual}</b> (
//         {actual === expected ? 'correct' : 'wrong'})
//       </p>
//     </>
//   )
// }

//import { useState } from 'react'
// import { useImmer } from 'use-immer'
// import ItemList from './recipe'

// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ]

// export default function BucketList() {
//   const [myList, updateMyList] = useImmer(initialList)
//   const [yourList, updateYourList] = useImmer(initialList)

//   function handleToggleMyList(artworkId, nextSeen) {
//     const myNextList = (draft) => {
//       draft.find((a) => a.id === artworkId).seen = nextSeen
//     }
//     // const myNextList =  myList.map((art) => {
//     // (art.id === artworkId) ? return { ...art, seen: nextSeen } : return art
//     // })
//     updateMyList(myNextList)
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     const yourNextList = (draft) => {
//       const art = draft.find((a) => a.id === artworkId)
//       art.seen = nextSeen
//     }
//     updateYourList(yourNextList)
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList}
//       />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourList}
//         onToggle={handleToggleYourList}
//       />
//     </>
//   )
// }

//import { useState } from 'react'
import { useImmer } from 'use-immer'
import Product from './recipe'

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, updateProducts] = useImmer(initialProducts)
  const listProducts = products.map((product) => (
    <Product
      key={product.id}
      handleIncreaseClick={handleIncreaseClick}
      {...product}
    />
  ))

  function handleIncreaseClick(productId, productCount) {
    const newProduct = (draft) => {
      draft.find((a) => a.id === productId).count = productCount
    }
    updateProducts(newProduct)
  }

  return <ul>{listProducts}</ul>
}
