export default function AlertBox(props) {
  const capitalizeWord = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "30px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissable fade show`}
          role="alert"
        >
          <div>
            <strong>{capitalizeWord(props.alert.type)} : </strong>{" "}
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
