import React, {Component} from 'react';
import Loader from '../Loader';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  popularWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '0 -1%'
  },
  mainItems: {
    flex: '2 0 40%',
    margin: '1rem 1%',
    padding: '1rem 2%',
    background: '#f8f8f8'
  },
  secondaryItems: {
    flex: '1 0 15%',
    margin: '1rem 1%',
    padding: '1rem 2%',
    background: '#f8f8f8'
  },
  purple: {
    background: '#340438',
    color: '#ffffff'
  },
  blue: {
    background: '#66E6FF'
  },
  greyOne: {
    background: '#D3D3D3'
  },
  greyTwo: {
    background: '#BBB7B7'
  },
  greyThree: {
    background: '#999999'
  },
  greyFour: {
    background: '#757474'
  }
});

class Popular extends Component {
  renderKey(key, i) {
    const { mostPopular } = this.props;
    if (mostPopular[key] && (key !== 'ict_index')) {
      return (
        <div key={key} className={this.getStyles(key, i)}>
          <p>{this.getTitle(key)}</p>
          <h2>{mostPopular[key].web_name || ''} {mostPopular[key][key] || ''}</h2>
        </div>
      );
    }
  }

  getStyles(key, i) {
    const colorArray = [styles.purple, styles.blue, styles.greyOne, styles.greyTwo, styles.greyThree, styles.greyFour];

    if (key === 'selected_by_percent' || key === 'total_points') {
      return css(styles.mainItems, colorArray[i]);
    }

    return css(styles.secondaryItems, colorArray[i]);
  }

  getTitle(key) {
    switch(key) {
      case 'selected_by_percent':
        return 'Most Selected';
      case 'total_points':
        return 'Highest Points';
      case 'transfers_in_event':
        return 'Most Transferred In';
      case 'transfers_out_event':
        return 'Most Transferred Out';
      case 'form':
        return 'Form';
      case 'value_form':
        return 'Best Value/Form Balance';
    }
  }

  render() {
    const { mostPopular } = this.props;

    return (
      <div className={css(styles.popularWrapper)}>
        {!mostPopular &&
          <Loader />
        }
        {mostPopular &&
          Object.keys(mostPopular || {}).map((key, i) => {
            return (
              this.renderKey(key, i)
            );
          })
        }
      </div>
    );
  }
}

Popular.propTypes = {
  mostPopular: React.PropTypes.object
};

export default Popular;
