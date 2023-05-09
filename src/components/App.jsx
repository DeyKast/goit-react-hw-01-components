import Profile from './UserProfile/UserProfile';
import userData from '../data/user.json';

import Statistics from './UploadStats/UploadStats';
import statisticsData from '../data/data.json';

import Friends from './FriendsList/FriendList';
import friendsData from '../data/friends.json';

import Transactions from './TransactionsHistory/TransactionsHistory';
import TransactionsData from '../data/transactions.json';

export const App = () => {
  return (
    <section className="main-section">
      <h1>Profile</h1>
      <div>
        <Profile data={userData} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={statisticsData} />
      </div>
      <h1>Friends</h1>
      <div>
        <Friends data={friendsData} />
      </div>
      <h1>Transactions</h1>
      <div>
        <Transactions data={TransactionsData} />
      </div>
    </section>
  );
};
