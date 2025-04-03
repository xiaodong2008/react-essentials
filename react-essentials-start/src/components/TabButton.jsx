export default function TabButton({ children, isActive, handleClick }) {
  return (
    <li>
      <button className={isActive && "active"} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
