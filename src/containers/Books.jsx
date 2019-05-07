import React from 'react';

// export function Books() {
//   console.log('render Books');
//   return (
//     <p>
//       Books
//     </p>
//   );
// }

export class Books extends React.Component {
  state = {
    books: [],
  };

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps Books');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Books');
  }

  render() {
    console.log('render Books');

    return (
      <p>
        Books
      </p>
    );
  }
}

// UnconnectedMainContainer.propTypes = {
//   timer: PropTypes.object.isRequired,
//   changeTime: PropTypes.func.isRequired,
// };

// const mapStateToProps = ({ timer, dates }) => ({ timer, dates });

// const mapDispatchToProps = {
//   changeTime: ACTIONS.changeTime,
// };

// export const Books = connect(mapStateToProps, mapDispatchToProps)(UnconnectedBooks);
