import "./TodoList.css"; // Assuming the CSS is stored here

const TodoList = () => (
  <>
    <input type="checkbox" id="todo" name="todo" value="todo" />
    <label htmlFor="todo" data-content="Get out of bed">
      Get out of bed
    </label>
  </>
);

export default TodoList;
