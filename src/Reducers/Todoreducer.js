const initialdata = {
  list: [],
};

const Todoreducer = (state = initialdata, action) => {
  switch (action.type) {
    case "add":
      const { id, data } = action.payload;

      if (data.length > 2) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }
      else{
        alert('add minimum 3 letters')
      }

    case "remove":
      const newlist = state.list.filter((elm) => elm.id !== action.id);
      return {
        ...state,
        list: newlist,
      };

    case "removeall":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default Todoreducer;
