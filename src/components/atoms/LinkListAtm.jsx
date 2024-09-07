const LinkListAtm = ({ val }) => {
  console.log(val);
  return (
    <li>
      <a href={val.link}>{val.name}</a>
    </li>
  );
};
export default LinkListAtm;
