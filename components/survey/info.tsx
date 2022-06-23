const Information = (props: { children: JSX.Element; marginTop?: string }) => {
  return (
    <div style={{ marginTop: props.marginTop ? props.marginTop : "15px" }}>
      {props.children}
    </div>
  );
};

export default Information;
