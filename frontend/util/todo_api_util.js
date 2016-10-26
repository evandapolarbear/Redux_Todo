export const FetchTodos = (success, error) => {
  $.ajax({
    method: "GET",
    url: 'api/todos',
    success,
    error
  });
};

export const CreateTodos = (todo, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/todos',
    data: {todo: todo},
    success,
    error
  });
};
