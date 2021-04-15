import  {
  ADD_CART,
  ADD_COUNT
} from './mutation-types'
export default {
  [ADD_COUNT](state, payload) {
    payload.count++
  },
  [ADD_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}