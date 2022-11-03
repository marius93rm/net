const types = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
}

export const actionCreators = {
    loading: () => ({ type: types.LOADING }),
    failure: () => ({ type: types.FAILURE }),
    success: (payload) => ({ type: types.SUCCESS, payload })
}

export const initialiState = {
    loading: true,
    error: false,
    posts: []
}

export function reducer (state, action) {
    switch (action.type) {
        case types.LOADING:
            return { ...state, loading: true }
        case types.SUCCESS:
            return { ...state, loading: false, posts: action.payload }
        case types.FAILURE:
            return { ...state, loading: false, error: true }
    }
}

