import authSliceReducer, { initialState, signIn } from './authSlice'

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(authSliceReducer(undefined, {})).toEqual(initialState)
  })
  it('should store the token upon login', () => {
    const idToken = 'some-token'
    const userId = 'some-user-id'
    const nextState = authSliceReducer(
      initialState,
      signIn.fulfilled({ idToken: idToken, localId: userId }, initialState)
    )
    expect(nextState.token).toEqual(idToken)
    expect(nextState.userId).toEqual(userId)
  })
})
