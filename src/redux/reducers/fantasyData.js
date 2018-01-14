
/* eslint camelcase: 0 */

const initialState = {
  mainData: {
    status: {
      pending: false,
      success: null,
      lastUpdated: null,
      error: null
    },
    data: null
  },
  mostPopular: {
    selected_by_percent: null,
    transfers_in_event: null,
    total_points: null,
    form: null,
    value_form: null,
    transfers_out_event: null,
    ict_index: null
  }
};

export default function fantasyData(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_DATA':
      console.info('fetching data');
      return Object.assign({}, state, {
        mainData: {
          status: {
            pending: true
          }
        }
      });
    case 'INITIAL_DATA_SUCCESS':
      console.info('merging data success');
      return Object.assign({}, state, {
          mainData: {
            status: {
              lastUpdated: Date.now(),
              pending: false,
              success: true
            },
            data: action.response
          }
      });
    case 'INITIAL_DATA_ERROR':
      console.info('merging data error');
      return Object.assign({}, state, {
        mainData: {
          status: {
            pending: false,
            success: false,
            error: action.response
          }
        }
      });
    case 'GET_MOST_POPULAR':
      console.info('setting most popular');
      const data = state.mainData.data;
      const mostPopular = state.mostPopular;
      const mostPopularPlayers = getMostPopularStats(data, mostPopular);

      return Object.assign({}, state, {
        mostPopular: {
          ...mostPopularPlayers
        }
      });

    case 'GET_PLAYER':
      console.info('getting player info');
      break;
    default:
      return state;
  }
}

function getMostPopularStats(data, mostPopular) {
  let {
    selected_by_percent,
    total_points, transfers_in_event,
    transfers_out_event,
    form, value_form,
    ict_index
  } = mostPopular;
  let populatedData = {};

  for (let x of data.elements) {
    if (selected_by_percent === null || parseFloat(x.selected_by_percent) >
      parseFloat(selected_by_percent.selected_by_percent)) {
      selected_by_percent = x;
    }

    if (total_points === null || x.total_points > total_points.total_points) {
      total_points = x;
    }

    if (transfers_in_event === null || x.transfers_in_event > transfers_in_event.transfers_in_event) {
      transfers_in_event = x;
    }

    if (transfers_out_event === null || x.transfers_out_event > transfers_out_event.transfers_out_event) {
      transfers_out_event = x;
    }

    if (form === null || x.form > form.form) {
      form = x;
    }

    if (value_form === null || x.value_form > value_form.value_form) {
      value_form = x;
    }

    if (ict_index === null || x.ict_index > ict_index.ict_index) {
      ict_index = x;
    }
  }
  populatedData = {
    selected_by_percent,
    total_points,
    transfers_in_event,
    transfers_out_event,
    form,
    value_form,
    ict_index
  };

  return populatedData;
}
