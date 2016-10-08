
const initialState = {
  mainData: {
    status: {
      pending: false,
      success: null,
      lastUpdated: null,
      error: null
    },
    data: {},
    mostPopular: {
      selected: null,
      captained: null,
      transferredIn: null,
      transferredOut: null,
      form: null,
      value: null
    },
    selectedTeam: {
      id: null,
      name: null
    },
    selectedPlayer: {
      id: null,
      name: null
    }
  }
};

export default function mainData(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_DATA':
      console.info('fetching data');
      return {
        mainData: {
          status: {
            pending: true
          }
        }
      };
    case 'INITIAL_DATA_SUCCESS':
      console.info('merging data success');
      return {
        mainData: {
          status: {
            lastUpdated: Date.now(),
            pending: false,
            success: true
          },
          data: action.response
        }
      };
    case 'INITIAL_DATA_ERROR':
      console.info('merging data error');
      return {
        mainData: {
          status: {
            pending: false,
            success: false
          }
        }
      };
    case 'GET_MOST_POPULAR':
      console.info('getting most popular');
      const data = state.mainData.data;
      const {
        selected,
        captained,
        transferredIn,
        transferredOut,
        form,
        value
      } = getMostPopularStats(data);

      return {
        mainData: {
          mostPopular: {
            selected,
            captained,
            transferredIn,
            transferredOut,
            form,
            value
          }
        }
      };

    default:
      return state;
  }
}

function getMostPopularStats(data) {
  let players = { selected, captained, transferredIn, transferredOut, form, value }
  let values = { selectedValue, captainedValue, transferredInValue, transferredOutValue, formValue, valueValue }




  return 
}
