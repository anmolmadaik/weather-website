import "../css/Loading.css";

export default function Loading({ text = "" }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">{text}</div>
    </div>
  );
}
