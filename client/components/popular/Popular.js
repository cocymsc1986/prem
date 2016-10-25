import React, {Component} from 'react';

class Popular extends Component {

  renderKey(key) {
    const { mostPopular } = this.props;
    return (
      mostPopular[key] &&
        <div key={key}>
          <h2>{mostPopular[key].web_name || ''}</h2>
          <p>{key} {mostPopular[key][key] || ''}</p>
        </div>
    );
  }

  render() {
    const { mostPopular } = this.props;

    return (
      <div>
        <ul>
          {!mostPopular &&
            <p className="loader">...loading</p>
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
