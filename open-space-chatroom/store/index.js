export const state = () => ({
  userDetails: {
    userId: '2',
    name: 'Hesus',
    colour: 'blue',
  },

  activeUsers: [
    'Charles',
    'Jacob',
    'Paul Scott',
    'Malcome',
    'Daniel Denial',
    'Justine Belieber',
  ],

  userMessages: [
    {
      userId: '1',
      name: 'Charles',
      colour: 'yellow',
      messages: [
        'Lorem ipsum dolor sit amet',
        'Excepteur sint occae cat cupi datat non proi dent, sunt in cul pa qui off i cia.',
      ],
    },
    {
      userId: '2',
      name: 'Hesus',
      colour: 'blue',
      messages: ['Lorem ipsum dolor sit amet', 'veritatis et'],
    },
    {
      userId: '3',
      name: 'Jacob',
      colour: 'pink',
      messages: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dignissim enim, ut condimentum sem. Aenean quam quam, ultricies eget sem ac, dictum placerat ex. Suspendisse auctor velit vel tellus volutpat feugiat. Vivamus tincidunt velit suscipit libero hendrerit, quis vehicula risus euismod. Proin eget sodales tellus, nec efficitur diam. In convallis, leo eget aliquet ultrices, ante nisi ultricies ligula, at interdum lectus orci sed nunc. Integer et sapien lorem. Aenean rhoncus turpis vel accumsan pulvinar. Lorem ipsum dolor sit amet',
        'veritatis et',
      ],
    },
    {
      userId: '4',
      name: 'Paul Scott',
      colour: 'red',
      messages: ['Anyone got some weed yo?'],
    },
    {
      userId: '2',
      name: 'Hesus',
      colour: 'blue',
      messages: ['Yeah bro, I got you, what do', 'yah need?'],
    },
    {
      userId: '4',
      name: 'Paul Scott',
      colour: 'red',
      messages: ['The good stuff, whatever g!'],
    },
    {
      userId: '2',
      name: 'Hesus',
      colour: 'blue',
      messages: [
        'Yeah soz bro, only got the shit stuff',
        'yah still interested still?',
      ],
    },
  ],
});

export const getters = {
  activeUsers(state) {
    return state.activeUsers;
  },

  userDetails(state) {
    return state.userDetails;
  },

  userMessages(state) {
    return state.userMessages;
  },
};
