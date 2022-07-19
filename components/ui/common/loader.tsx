

export const Loader = () => {
  return (
    <div className="spinner">
      { Array.from<number>({length: 5}).map((_, i) => {
        return <div key={`rect-${i}`} className={`rect${i + 1}`} />;
      }) }
    </div>
  );
};
