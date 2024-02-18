function CircleButton({ icon, additionalClasses = "", onClickHandler }) {
  return (
    <button
      className={`circle_button btn btn-primary ${additionalClasses}`}
      onClick={onClickHandler}
    >
      {icon}
    </button>
  );
}

export default CircleButton;
