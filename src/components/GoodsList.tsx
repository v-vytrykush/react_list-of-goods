import React from 'react';

type State = {
  goods: string[],
};

type Props = {
  goods: string[],
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: this.props.goods,
  };

  reverseGoods = () => {
    return (
      this.setState(state => (
        {
          goods: [...state.goods].reverse(),
        }
      ))
    );
  };

  sortGoodsAlphabetically = () => {
    return (
      this.setState(state => (
        {
          goods: [...state.goods]
            .sort((firstGood, secondGood) => firstGood
              .localeCompare(secondGood)),
        }
      ))
    );
  };

  resetGoods = () => {
    return (
      this.setState(() => (
        {
          goods: this.props.goods,
        }
      ))
    );
  };

  sortGoodsByLength = () => {
    return (
      this.setState(state => (
        {
          goods: [...state.goods]
            .sort((firstGood, secondGood) => firstGood.length
              - secondGood.length),
        }
      ))
    );
  };

  render() {
    return (
      <>
        <ul>
          {this.state.goods.map(good => (<li key={good}>{good}</li>))}
        </ul>

        <button
          className="btn-primary"
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortGoodsAlphabetically}
          className="btn-primary"
        >
          Sort alphabetically
        </button>

        <button
          className="btn-primary"
          type="button"
          onClick={this.resetGoods}
        >
          Reset
        </button>

        <button
          className="btn-primary"
          type="button"
          onClick={this.sortGoodsByLength}
        >
          Sort by length
        </button>
      </>
    );
  }
}