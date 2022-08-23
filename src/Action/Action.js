export const add = (data) => {
  return {
    type: "add",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const remove = (id) => {
  return { type: "remove", id };
};

export const removeall = () => {
  return { type: "removeall" };
};
