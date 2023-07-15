export const Home = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { currency } = e.target.elements;
    const [amout, from, , to] = currency.value.split(' ');
    console.log({ amout, from, to });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label> Currency</label>
      <input type="text" name="currency" />
    </form>
  );
};
