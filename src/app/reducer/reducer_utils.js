const createReducer = (initialState, fnMap) => {
    return (state = initialState, {type, payload}) => {
        const handler = fnMap[type];
        const output = handler ? handler(state, payload) : state;
        return output;
    }
};

export default createReducer;

