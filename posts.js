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

export function reducer(state, action) {
    let ris = {}
    switch (action.type) {
        case types.LOADING: {
            ris = { ...state, loading: true } 
            console.log(ris)
            return ris
        }
        case types.SUCCESS:
            ris = { ...state, loading: false, posts: action.payload }
            console.log(ris)
            return ris
        case types.FAILURE:
            ris = { ...state, loading: false, error: true }
            console.log(ris)
            return ris
    }
}

