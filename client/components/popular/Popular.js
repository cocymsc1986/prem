import React, {Component} from 'react';
import Loader from '../Loader';

class Popular extends Component {

  renderKey(key) {
    const { mostPopular } = this.props;
    if (mostPopular[key] && (key !== 'ict_index')) {
      return (
        <div key={key}>
          <p>{this.getTitle(key)}</p>
          <h2>{mostPopular[key].web_name || ''} {mostPopular[key][key] || ''}</h2>
        </div>
      );
    }
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
      <div>
        <ul>
          {!mostPopular &&
            <Loader />
          }
          {mostPopular &&
            Object.keys(mostPopular || {}).map((key) => {
              return (
                this.renderKey(key)
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Popular.propTypes = {
  mostPopular: React.PropTypes.object
};

export default Popular;
