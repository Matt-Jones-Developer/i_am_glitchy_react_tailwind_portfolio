import styles from './styles/SquaresAnim.module.css';

// let's build some pretty coloured squares!
const GridSquare = () => {
  // assign colours randomly, e
  if (Math.random() < 0.05) {
    // define the colours
    const colorClasses = ['purple', 'peach', 'aqua', 'green', 'pink'];
    // create index - this needs to randomize again (every second)
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    // return a random grid item, colour and index
    return (
      <div
        className={`${styles.gridItem} ${styles[colorClasses[randomIndex]]}`}
      ></div>
    );
  }

  return <div className={styles.gridItem}></div>;
};

const Squares = () => {
  return (
    // generate squares grid
    <section className='mt-0 pt-0 sm:pt-6 bg-primary'>
      <div className={styles.bgGridContainer}>
        {Array.from({ length: 192 }).map((_, index) => (
          <GridSquare key={index} />
        ))}
      </div>
    </section>
  );
};

export default Squares;
