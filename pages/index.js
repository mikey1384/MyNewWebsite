function HomePage() {
  return (
    <div>
      <button
        style={{
          color: "white",
          background: "blue",
          border: "none",
          fontSize: "2rem",
          padding: "1rem",
          cursor: "pointer"
        }}
        onClick={() => alert('Hello world!!!')}
      >
        Hello world
      </button>
    </div>
  );
}

export default HomePage;