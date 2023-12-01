import styles from "./styles.css";
const ProgressBar = ({ firstTypeClass }) => {
  return (
    <div className="progress_bar flex justify-center">
      <progress
        className={`bar progress ${"background_" + firstTypeClass}`}
      ></progress>
    </div>
  );
};
export default ProgressBar;
